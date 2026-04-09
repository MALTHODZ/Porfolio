import Image from 'next/image';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const coverImage = project.imageUrl || '/default-project.jpg';

  return (
    <article className="flex flex-col border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all bg-white dark:bg-zinc-900 duration-300">
      <div className="relative w-full h-48 bg-zinc-100 dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-800">
        <Image 
          src={coverImage} 
          alt={`Imagen del proyecto ${project.title}`} 
          fill 
          style={{ objectFit: 'cover' }}
          className="hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold mb-2 flex items-center justify-between dark:text-white">
          {project.title}
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm flex-grow mb-4 leading-relaxed">
          {project.description || 'Sin descripción disponible.'}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          {project.language && (
            <span className="text-xs px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-md text-zinc-700 dark:text-zinc-300 font-medium">
              {project.language}
            </span>
          )}
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
          >
            Ver en GitHub &rarr;
          </a>
        </div>
      </div>
    </article>
  );
}
