import { spawn } from "node:child_process";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** Open default browser — Cursor/IDE terminals often ignore Vite's `--open`. */
function openBrowser(url: string) {
  if (process.env.CI) return;
  if (process.platform === "win32") {
    spawn("powershell.exe", ["-NoProfile", "-NonInteractive", "-Command", `Start-Process '${url}'`], {
      detached: true,
      stdio: "ignore",
      windowsHide: true,
    }).unref();
    return;
  }
  if (process.platform === "darwin") {
    spawn("open", [url], { detached: true, stdio: "ignore" }).unref();
    return;
  }
  spawn("xdg-open", [url], { detached: true, stdio: "ignore" }).unref();
}

export default defineConfig({
  /** Render static sites often default publish dir to `build` (CRA-style); match that here. */
  build: {
    outDir: "build",
    emptyOutDir: true,
  },
  plugins: [
    react(),
    {
      name: "kiitec-open-browser",
      configureServer(server) {
        server.httpServer?.once("listening", () => {
          const addr = server.httpServer?.address();
          if (!addr || typeof addr === "string") return;
          const port = addr.port;
          const url = `http://127.0.0.1:${port}/`;
          console.log(`\n  \x1b[1m\x1b[36mKiitecWeb\x1b[0m — open in your browser:\n  \x1b[1m\x1b[32m${url}\x1b[0m\n`);
          openBrowser(url);
        });
      },
    },
  ],
  server: {
    /** Dedicated port so you are not stuck guessing 5173 vs 5174 when another Vite is running */
    port: 5180,
    strictPort: false,
  },
});
