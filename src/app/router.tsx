import { createBrowserRouter } from "react-router-dom";
import { PublicLayout } from "./layouts/PublicLayout";
import { NotFoundPage } from "../features/public/pages/NotFoundPage";
import { HomePage } from "../features/public/pages/HomePage";
import { SpeakingPage } from "../features/public/pages/SpeakingPage";
import { AboutPage } from "../features/public/pages/AboutPage";
import { MediaPage } from "../features/public/pages/MediaPage";
import { EventsPage } from "../features/public/pages/EventsPage";
import { InsightsPage } from "../features/public/pages/InsightsPage";
import { InsightsArticlePage } from "../features/public/pages/InsightsArticlePage";
import { ResourcesPage } from "../features/public/pages/ResourcesPage";
import { TestimonialsPage } from "../features/public/pages/TestimonialsPage";
import { ContactPage } from "../features/public/pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "speaking",
        element: <SpeakingPage />,
      },
      {
        path: "media",
        element: <MediaPage />,
      },
      {
        path: "events",
        element: <EventsPage />,
      },
      {
        path: "testimonials",
        element: <TestimonialsPage />,
      },
      {
        path: "insights",
        element: <InsightsPage />,
      },
      {
        path: "insights/:slug",
        element: <InsightsArticlePage />,
      },
      {
        path: "resources",
        element: <ResourcesPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
