import { redirect } from "next/navigation";

// The old /projects page redirects to the new /work portfolio page
export default function ProjectsPage() {
  redirect("/work");
}
