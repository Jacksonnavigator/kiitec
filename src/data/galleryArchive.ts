/**
 * Curated legacy gallery: filters manifest.json, removes duplicates,
 * and assigns each image to a display section.
 */

export type GallerySectionId =
  | 'campus'
  | 'labs'
  | 'events'
  | 'graduation'
  | 'campus-life'
  | 'heritage'
  | 'archive';

export const GALLERY_SECTION_ORDER: GallerySectionId[] = [
  'campus',
  'labs',
  'events',
  'graduation',
  'campus-life',
  'heritage',
  'archive',
];

export const GALLERY_SECTION_LABELS: Record<
  GallerySectionId,
  { title: string; blurb: string }
> = {
  campus: {
    title: 'Campus & surroundings',
    blurb: 'Location, buildings, and the environment around the institute.',
  },
  labs: {
    title: 'Laboratories & workshops',
    blurb: 'Hands-on training spaces and technical facilities.',
  },
  events: {
    title: 'Teaching, exhibitions & partnerships',
    blurb: 'Open days, outreach, accreditation visits, and industry collaboration.',
  },
  graduation: {
    title: 'Graduation & celebrations',
    blurb: 'Ceremonies and moments with graduates and guests.',
  },
  'campus-life': {
    title: 'Student life & sports',
    blurb: 'Activities beyond the classroom.',
  },
  heritage: {
    title: 'Heritage & milestones',
    blurb: 'Earlier years and welcome moments from the archive.',
  },
  archive: {
    title: 'More from the archive',
    blurb: 'Additional photos from the media library.',
  },
};

const EXCLUDE_SUBSTRINGS = [
  'placeholder',
  'whatsapp',
  'selection-list',
  'elementor',
  'kingshead',
  'boxking',
  '/cropped-',
  'kiitec-logo',
  '/logo.png',
  'applications',
  'march-intake',
  'dodoso',
  '404.webp',
  'mastercard',
  '.gif',
  'online_training',
  'home_online',
  'presentation1',
  'wasichan',
  'poster-graduation',
  'poster-1-scaled',
  'kiitec-6-',
  'march-intake-2025',
  'applications-',
  '/comp.jpg',
  '/it.jpg',
  'computer-science-program',
  'telecommunications.jpg',
  'sola.jpg',
  'industrial-automation-advantages',
  'export-2023-06-28',
  'screenshot_20250618_211819',
];

function shouldExcludePath(src: string): boolean {
  const n = src.toLowerCase().replace(/\\/g, '/');
  for (const frag of EXCLUDE_SUBSTRINGS) {
    if (n.includes(frag.toLowerCase())) return true;
  }
  return false;
}

/** Prefer HD JPEG when both -scaled and -1024x684 exist for DB-Kiitec-* */
function removeScaledWhenHdExists(paths: string[]): string[] {
  const set = new Set(paths);
  const out: string[] = [];
  for (const p of paths) {
    const m = p.match(/^(.*\/DB-Kiitec-\d+)-scaled\.(jpe?g)$/i);
    if (m) {
      const hdJpg = `${m[1]}-1024x684.jpg`;
      const hdJpeg = `${m[1]}-1024x684.jpeg`;
      if (set.has(hdJpg) || set.has(hdJpeg)) continue;
    }
    out.push(p);
  }
  return out;
}

/** Prefer Loc1-768x576 over duplicate Loc1.jpg */
function removeLocDupes(paths: string[]): string[] {
  const set = new Set(paths);
  return paths.filter((p) => {
    if (/\/Loc1\.jpe?g$/i.test(p) && [...set].some((q) => /\/Loc1-768x576\.jpe?g$/i.test(q)))
      return false;
    return true;
  });
}

/** Hero uses 1536x1024; drop smaller duplicates of same shot from gallery */
function removeImg6384Dupes(paths: string[]): string[] {
  const has1536 = paths.some((p) => p.includes('IMG_6384-1536x1024'));
  if (!has1536) return paths;
  return paths.filter(
    (p) => !p.includes('IMG_6384-1024x683') && !p.includes('IMG_6384-scaled'),
  );
}

export function filterAndDedupeManifestImages(images: string[]): string[] {
  let list = images.filter((src) => typeof src === 'string' && src.startsWith('/images/'));
  list = list.filter((src) => !shouldExcludePath(src));
  list = removeScaledWhenHdExists(list);
  list = removeLocDupes(list);
  list = removeImg6384Dupes(list);
  return [...new Set(list)].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
}

export function gallerySectionForSrc(src: string): GallerySectionId {
  const lower = src.replace(/\\/g, '/').toLowerCase();

  if (lower.includes('/2023/06/') && !lower.includes('export-'))
    return 'heritage';
  if (lower.includes('graduants.jpeg') || lower.includes('kiitec-welcome') || lower.includes('img_5485'))
    return 'heritage';

  if (lower.includes('/2024/11/') && lower.includes('dbkiitec')) return 'graduation';
  if (lower.includes('graduant') || lower.includes('graduants')) return 'graduation';

  if (lower.includes('afternoon-') || lower.includes('night-r6') || lower.includes('img_6372'))
    return 'campus-life';

  if (
    /db-kiitec-(32|38|43|44|45|46|47|48|49)/i.test(lower) ||
    lower.includes('labs.jpeg') ||
    lower.includes('solar-panels') ||
    lower.includes('electronics-lab') ||
    lower.includes('electical-lab') ||
    lower.includes('electrical-lab') ||
    (lower.includes('industrial-automation') && !lower.includes('advantages')) ||
    lower.includes('/2025/06/new6') ||
    lower.includes('/2025/06/new8') ||
    lower.includes('/2025/06/new-scaled') ||
    lower.includes('kiitec-elec')
  )
    return 'labs';

  if (
    lower.includes('loc1') ||
    lower.includes('loc2') ||
    /db-kiitec-(12|28|37)/i.test(lower) ||
    lower.includes('new4') ||
    lower.includes('new5') ||
    lower.includes('new7') ||
    lower.includes('kiitec-sorround') ||
    lower.includes('sorround') ||
    lower.includes('gate.png') ||
    lower.includes('gate2.png')
  )
    return 'campus';

  if (
    lower.includes('/2024/08/img_') ||
    lower.includes('kaab') ||
    lower.includes('nacte') ||
    lower.includes('africa') ||
    /img_67[68]/i.test(lower) ||
    (lower.includes('dbkiitec') && !lower.includes('/2024/11/'))
  )
    return 'events';

  return 'archive';
}

export function groupGalleryBySection(paths: string[]): Map<GallerySectionId, string[]> {
  const map = new Map<GallerySectionId, string[]>();
  for (const id of GALLERY_SECTION_ORDER) map.set(id, []);
  for (const src of paths) {
    const section = gallerySectionForSrc(src);
    map.get(section)!.push(src);
  }
  return map;
}

export function filenameCaption(src: string): string {
  const base = src.split('/').pop() ?? src;
  const decoded = decodeURIComponent(base.replace(/\+/g, ' '));
  return decoded.length > 48 ? `${decoded.slice(0, 45)}…` : decoded;
}
