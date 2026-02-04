import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: Blog,
});

function Blog() {
  return <div>Hello from Blog!</div>;
}
