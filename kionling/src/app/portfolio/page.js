export default function PortfolioPage() {
    const projects = [
      { id: 1, name: "Project One", description: "This is my first project" },
      { id: 2, name: "Project Two", description: "This is my second project" },
    ];
  
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold">My Portfolio</h1>
        <div className="mt-4 space-y-4">
          {projects.map((project) => (
            <div key={project.id} className="p-4 border rounded">
              <h2 className="text-2xl">{project.name}</h2>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  