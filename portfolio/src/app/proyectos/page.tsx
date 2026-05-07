import { ProjectCard } from '../../components/projects/ProjectCard';
import { getGithubRepos } from '../../utils/github';

export default async function ProyectosPage() {
  const projects = await getGithubRepos('MALTHODZ');

  return (
    <main className="min-h-screen p-6 md:p-12 w-full max-w-7xl mx-auto flex flex-col overflow-x-hidden pt-24 md:pt-32 pb-24">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12">
        <div className="flex flex-col gap-2">
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            <span className="block text-on-surface">Proyectos</span>
            <span className="block text-primary">Seleccionados</span>
          </h1>
          <p className="text-on-surface-variant max-w-xl text-sm md:text-base leading-relaxed mt-4">
            Cada proyecto seleccionado representa un enfoque diferente en cuanto a la arquitectura y el diseño.
          </p>
        </div>
        {/* Grid Icon */}
        <div className="hidden md:flex text-on-surface-variant/30 mb-2">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 0h6v6h-6z" />
          </svg>
        </div>
      </div>

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {projects.map((project, index) => {
            // Layout Pattern:
            // 0: col-span-4 (large)
            // 1: col-span-2 (narrow)
            // 2 & 3: col-span-3 (half width)
            let spanClass = "md:col-span-2"; // default fallback
            if (index === 0) spanClass = "md:col-span-4";
            else if (index === 1) spanClass = "md:col-span-2";
            else if (index % 4 === 2 || index % 4 === 3) spanClass = "md:col-span-3";
            else if (index % 4 === 0) spanClass = "md:col-span-4";
            else if (index % 4 === 1) spanClass = "md:col-span-2";

            return (
              <div key={project.id} className={`${spanClass} flex`}>
                <ProjectCard project={project} isLarge={index % 4 === 0} />
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-on-surface-variant italic mt-8">No se encontraron proyectos por el momento.</p>
      )}
    </main>
  );
}
