// import { getProjects } from "@/actions/projects";

async function DashboardPage() {
  // const projects = await getProjects();
  return (
    <div className="w-full flex flex-col grow gap-6 relative">
      <div className="flex flex-col-reverse items-start w-full gap-6 sm:flex-row sm:justify-between sm:items-center">
        <div className="flex flex-col items-start">
          <h1 className="text-2xl font-semibold text-primary backdrop-blur-lg">
            Projects
          </h1>
          <p className="text-base text-secondary-foreground">
            All of your work in one place
          </p>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
