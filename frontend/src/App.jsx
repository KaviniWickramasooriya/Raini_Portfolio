import { createRootRoute, createRoute, createRouter, Outlet } from "@tanstack/react-router";
import { AuthProvider } from "./lib/auth/provider";
import { PreviewHostBridge } from "./components/preview-host-bridge";
import { Toaster } from "sonner";
import { SiteNav } from "./components/site-nav";
import { LandingHero } from "./components/landing-hero";
import { EraSection } from "./components/era-section";
import { AboutSection } from "./components/about-section";
import { MusicSection } from "./components/music-section";
import { GallerySection } from "./components/gallery-section";
import { ShowsSection } from "./components/shows-section";
import { ContactSection } from "./components/contact-section";
import { SiteFooter } from "./components/site-footer";
import { StorySection } from "./components/story-page";
import { MusicPage } from "./components/music-page";
import { ContactPage } from "./components/contact-page";
import { ShowsPage } from "./components/shows-page";
import { GalleryPage } from "./components/gallery-page";
import { AppErrorComponent } from "./lib/error-component";

export const RootRoute = createRootRoute({
  component: () => (
    <div className="bg-bg text-fg font-sans min-h-screen selection:bg-accent selection:text-accent-fg">
      <PreviewHostBridge />
      <AuthProvider>
        <Outlet />
      </AuthProvider>
      <Toaster
        theme="dark"
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#1c1014",
            color: "#f4ece4",
            border: "1px solid rgba(244,236,228,0.12)",
          },
        }}
      />
    </div>
  ),
});

function Home() {
  return (
    <>
      <a
        href="#music"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg"
      >
        Skip to music
      </a>
      <div className="page-grain" aria-hidden="true" />
      <SiteNav />
      <main>
        <LandingHero />
        <EraSection />
        <AboutSection />
        <MusicSection />
        <GallerySection />
        <ShowsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}

function StoryPageRoute() {
  return (
    <>
      <div className="page-grain" aria-hidden="true" />
      <SiteNav />
      <main>
        <StorySection />
      </main>
      <SiteFooter />
    </>
  );
}

function MusicPageRoute() {
  return (
    <>
      <div className="page-grain" aria-hidden="true" />
      <SiteNav />
      <main>
        <MusicPage />
      </main>
      <SiteFooter />
    </>
  );
}

function ContactPageRoute() {
  return (
    <>
      <div className="page-grain" aria-hidden="true" />
      <SiteNav />
      <main>
        <ContactPage />
      </main>
      <SiteFooter />
    </>
  );
}

function ShowsPageRoute() {
  return (
    <>
      <div className="page-grain" aria-hidden="true" />
      <SiteNav />
      <main>
        <ShowsPage />
      </main>
      <SiteFooter />
    </>
  );
}

function GalleryPageRoute() {
  return (
    <>
      <div className="page-grain" aria-hidden="true" />
      <SiteNav />
      <main>
        <GalleryPage />
      </main>
      <SiteFooter />
    </>
  );
}

export const IndexRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/",
  component: Home,
});

export const StoryRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/story",
  component: StoryPageRoute,
});

export const MusicRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/music",
  component: MusicPageRoute,
});

export const ContactRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/contact",
  component: ContactPageRoute,
});

export const ShowsRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/shows",
  component: ShowsPageRoute,
});

export const GalleryRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/gallery",
  component: GalleryPageRoute,
});

export const routeTree = RootRoute.addChildren([IndexRoute, StoryRoute, MusicRoute, ContactRoute, ShowsRoute, GalleryRoute]);

export function getRouter() {
  return createRouter({ routeTree, defaultErrorComponent: AppErrorComponent });
}