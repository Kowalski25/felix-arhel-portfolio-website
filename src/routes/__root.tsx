import { NavBar } from "@components";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const RootLayout = () => (
  <div
    style={{
      maxWidth: "56.25rem",
      marginInline: "auto",
      padding: "1.25rem",
    }}>
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
        {
          label: "Blog",
          href: "/blog",
        },
        {
          label: "Work",
          href: "/work",
        },
      ]}
    />
    <hr />
    <Outlet />
    <TanStackRouterDevtools />
  </div>
);

export const Route = createRootRoute({ component: RootLayout });
