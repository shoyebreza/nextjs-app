const projects = [
  { name: "Website refresh", detail: "Design system · 8 tasks", progress: "72%", color: "bg-coral" },
  { name: "Q4 planning", detail: "Strategy · 12 tasks", progress: "46%", color: "bg-teal" },
  { name: "Customer interviews", detail: "Research · 5 tasks", progress: "88%", color: "bg-yellow" },
];

export async function GET() {
  return Response.json({ projects });
}
