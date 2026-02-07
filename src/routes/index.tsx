import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <h1>Welcome Home!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, rerum
        dolorum adipisci odit cum soluta optio illum vel eos impedit eligendi
        ratione amet sequi illo maiores iure qui hic tempora quia accusantium
        molestias nihil delectus! Vero laudantium consequatur ducimus voluptates
        distinctio. Voluptas facere aliquam molestiae similique magnam facilis
        expedita fuga.
      </p>
    </div>
  );
}
