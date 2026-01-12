import { NavBar } from "@components";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const RootLayout = () => (
  <>
    <NavBar
      items={[
        {
          label: "Home",
          href: "/",
        },
        {
          label: "About",
          href: "/about",
        },
      ]}
    />
    <hr />
    <Outlet />
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
