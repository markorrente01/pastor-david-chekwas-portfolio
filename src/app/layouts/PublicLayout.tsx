import { Outlet, ScrollRestoration } from "react-router-dom";
import { GlobalCursor } from "../../features/public/components/GlobalCursor";
import { PublicFooter } from "../../features/public/components/PublicFooter";
import { PublicNavigation } from "../../features/public/components/PublicNavigation";

export function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <GlobalCursor />
      <PublicNavigation />

      <main className="flex-1">
        <ScrollRestoration />
      <Outlet />
      </main>

      <PublicFooter />
    </div>
  );
}
