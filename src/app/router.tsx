import { createBrowserRouter } from "react-router-dom";
import { PublicLayout } from "./layouts/PublicLayout";
import { NotFoundPage } from "../features/public/pages/NotFoundPage";
import { PublicPlaceholderPage } from "../features/public/pages/PublicPlaceholderPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: (
          <PublicPlaceholderPage
            title="Welcome"
            description="A journey of ideas, leadership and meaningful impact. Discover the work, speaking and perspectives of David Chekwas."
          />
        ),
      },
      {
        path: "about",
        element: <PublicPlaceholderPage title="About David" />,
      },
      {
        path: "speaking",
        element: <PublicPlaceholderPage title="Speaking" />,
      },
      {
        path: "media",
        element: <PublicPlaceholderPage title="Media" />,
      },
      {
        path: "events",
        element: <PublicPlaceholderPage title="Events" />,
      },
      {
        path: "testimonials",
        element: <PublicPlaceholderPage title="Testimonials" />,
      },
      {
        path: "insights",
        element: <PublicPlaceholderPage title="Insights" />,
      },
      {
        path: "insights/:slug",
        element: <PublicPlaceholderPage title="Insight" />,
      },
      {
        path: "resources",
        element: <PublicPlaceholderPage title="Resources" />,
      },
      {
        path: "contact",
        element: <PublicPlaceholderPage title="Contact" />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
