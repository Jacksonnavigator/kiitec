import { lazy } from "react";
import { createBrowserRouter, ScrollRestoration } from "react-router-dom";
import { Layout } from "./components/Layout";
import { RouteErrorBoundary } from "./components/RouteErrorBoundary";

const Home = lazy(() => import("./pages/Home").then((m) => ({ default: m.Home })));
const About = lazy(() => import("./pages/About").then((m) => ({ default: m.About })));
const Programs = lazy(() => import("./pages/Programs").then((m) => ({ default: m.Programs })));
const Admissions = lazy(() => import("./pages/Admissions").then((m) => ({ default: m.Admissions })));
const Campus = lazy(() => import("./pages/Campus").then((m) => ({ default: m.Campus })));
const Gallery = lazy(() => import("./pages/Gallery").then((m) => ({ default: m.Gallery })));
const News = lazy(() => import("./pages/News").then((m) => ({ default: m.News })));
const Contact = lazy(() => import("./pages/Contact").then((m) => ({ default: m.Contact })));
const Apply = lazy(() => import("./pages/Apply").then((m) => ({ default: m.Apply })));
const NotFound = lazy(() => import("./pages/NotFound").then((m) => ({ default: m.NotFound })));

function RootShell() {
  return (
    <>
      <ScrollRestoration />
      <Layout />
    </>
  );
}

const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootShell />,
      errorElement: <RouteErrorBoundary />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "programs", element: <Programs /> },
        { path: "admissions", element: <Admissions /> },
        { path: "apply-here", element: <Apply /> },
        { path: "campus", element: <Campus /> },
        { path: "gallery", element: <Gallery /> },
        { path: "news", element: <News /> },
        { path: "contact", element: <Contact /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ],
  basename ? { basename } : undefined
);
