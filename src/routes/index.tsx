import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <h1>Hi, I’m Felix. I build for web and mobile.</h1>
      <p>
        Software developer currently working as a frontend mobile and web
        application developer at App-Bar.
      </p>
    </div>
  );
}
