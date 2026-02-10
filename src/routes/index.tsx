import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <h1>
        Im Felix — a front-end focused Software Developer both on mobile and web
        applications.
      </h1>
      <p>Software developer currently working as a frontend mobile and web application developer at App-Bar.</p>
    </div>
  );
}
