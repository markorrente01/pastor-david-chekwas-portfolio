import { Outlet } from "react-router-dom";
import { PublicFooter } from "../../features/public/components/PublicFooter";
import { PublicNavigation } from "../../features/public/components/PublicNavigation";

export function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <PublicNavigation />

      <main className="flex-1">
        <Outlet />
      </main>

      <PublicFooter />
    </div>
  );
}
