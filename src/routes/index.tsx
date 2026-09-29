import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Tools Hub — Discover, Learn & Build with AI" },
      { name: "description", content: "Expert reviews of the best AI tools, practical tutorials, comparisons and technology guides for creators, students and developers." },
      { property: "og:title", content: "AI Tools Hub — Discover, Learn & Build with AI" },
      { property: "og:description", content: "Find the right AI tools and practical guides to work smarter and build what’s next." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});
