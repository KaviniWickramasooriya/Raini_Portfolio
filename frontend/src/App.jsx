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

export const IndexRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/",
  component: Home,
});

export const routeTree = RootRoute.addChildren([IndexRoute]);

export function getRouter() {
  return createRouter({ routeTree, defaultErrorComponent: AppErrorComponent });
}