import Image from 'next/image';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  isLarge?: boolean;
}

export function ProjectCard({ project, isLarge }: ProjectCardProps) {
  const coverImage = project.imageUrl || '/default-project.jpg';
  
  return (
    <article className="group w-full h-full flex flex-col bg-surface-container rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
      <div className={`relative w-full overflow-hidden bg-surface-container-highest ${isLarge ? 'h-64 md:h-80' : 'h-56'}`}>
        <Image 
          src={coverImage} 
          alt={`Imagen del proyecto ${project.title}`} 
          fill 
          style={{ objectFit: 'cover' }}
          className="group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
          unoptimized={true}
        />
        {/* Subtle vignette/gradient to blend with the card */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent opacity-80"></div>
      </div>
      
      <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10">
        <div className="flex items-center gap-2 mb-4">
          {project.language && (
            <span className="text-[9px] md:text-[10px] px-3 py-1.5 bg-surface-container-highest rounded-full text-on-surface-variant font-bold tracking-widest uppercase">
              {project.language}
            </span>
          )}
        </div>
        
        <h3 className="font-display text-2xl font-bold mb-3 text-primary group-hover:text-primary-container transition-colors">
          {project.title}
        </h3>
        
        <p className="text-on-surface-variant text-sm md:text-base flex-grow mb-8 leading-relaxed">
          {project.description || 'Exploración técnica y desarrollo del sistema con un enfoque centrado en rendimiento y accesibilidad.'}
        </p>
        
        <div className="flex items-center gap-6 mt-auto">
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs font-bold text-secondary hover:text-primary transition-colors inline-flex items-center gap-1 uppercase tracking-wider"
          >
            Ver Caso de Estudio <span className="text-lg leading-none ml-1">↗</span>
          </a>
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs font-semibold text-on-surface-variant hover:text-on-surface transition-colors inline-flex items-center gap-1.5 uppercase tracking-wider ml-auto"
          >
            <span className="font-mono text-sm tracking-tighter">&lt; &gt;</span> GITHUB
          </a>
        </div>
      </div>
    </article>
  );
}
