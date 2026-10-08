const projects = [
  { name: "Website refresh", detail: "Design system · 8 tasks", progress: "72%", color: "bg-coral" },
  { name: "Q4 planning", detail: "Strategy · 12 tasks", progress: "46%", color: "bg-teal" },
  { name: "Customer interviews", detail: "Research · 5 tasks", progress: "88%", color: "bg-yellow" },
];

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ name: string }> },
) {
  const { name } = await params;
  const project = projects.find((item) => item.name.toLowerCase() === decodeURIComponent(name).toLowerCase());

  if (!project) {
    return Response.json({ error: "Project not found" }, { status: 404 });
  }

  return Response.json({ project });
}
