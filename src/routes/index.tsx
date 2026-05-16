import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MoveMax Moving — Stress-free to your new home" },
      {
        name: "description",
        content:
          "MoveMax Moving offers apartment, office and furniture moving services. Get a fast, free quote and let us handle the heavy lifting.",
      },
      { property: "og:title", content: "MoveMax Moving — Stress-free to your new home" },
      {
        property: "og:description",
        content: "Apartment, office and furniture moving — done right, stress-free.",
      },
    ],
  }),
  component: Index,
});
