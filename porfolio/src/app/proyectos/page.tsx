import { ProjectCard } from '../../components/projects/ProjectCard';
import { getGithubRepos } from '../../utils/github';

export default async function ProyectosPage() {
  const projects = await getGithubRepos('MALTHODZ');

  return (
    <main className="min-h-screen p-6 md:p-12 w-full max-w-7xl mx-auto flex flex-col gap-12 overflow-x-hidden pt-24 md:pt-32">
      <div className="flex flex-col gap-4">
        <h1 className="font-display text-5xl font-bold text-on-surface">
          Mis Proyectos
        </h1>
        <p className="text-on-surface-variant max-w-2xl text-lg">
          Una colección de mis trabajos recientes alojados en GitHub. 
          Aquí puedes explorar el código fuente y las tecnologías que utilizo en mi día a día.
        </p>
      </div>
      
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-on-surface-variant italic">No se encontraron proyectos por el momento.</p>
      )}
    </main>
  );
}
