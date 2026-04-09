import { ProjectCard } from '../components/projects/ProjectCard';
import { getGithubRepos } from '../utils/github';

export default async function HomePage() {
  // Obtenemos dinámicamente tus últimos repositorios de GitHub
  const projects = await getGithubRepos('MALTHODZ');

  return (
    <main className="min-h-screen p-8 w-full max-w-6xl mx-auto flex flex-col gap-16">
      
      {/* SECCIÓN SOBRE MÍ */}
      <section id="sobre-mi" className="mt-16 text-center sm:text-left">
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight line-clamp-2">
          ¡Hola! Soy <span className="text-blue-600 dark:text-blue-400">Frontend Developer</span>
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl leading-relaxed">
          Me especializo en construir experiencias web modernas, escalables y visualmente atractivas utilizando React, Next.js y el ecosistema web actual. 
          Aquí puedes encontrar una selección de mis últimos trabajos extraídos directamente desde mi GitHub.
        </p>
      </section>

      {/* SECCIÓN PROYECTOS */}
      <section id="proyectos" className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Mis Proyectos de GitHub</h2>
        
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-zinc-500 italic">No se encontraron proyectos por el momento.</p>
        )}
      </section>

    </main>
  );
}
