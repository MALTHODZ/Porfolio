import { Project } from '../types';

export async function getGithubRepos(username: string): Promise<Project[]> {
  // Obtenemos los repositorios de GitHub (ordenados por fecha de actualización, los 6 más recientes)
  const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, {
    next: { revalidate: 3600 } // ISR: se revalida cada hora para que sea súper rápido el tiempo de carga
  });

  if (!res.ok) {
    console.error('Error fetching GitHub repos:', res.statusText);
    return [];
  }

  const data = await res.json();

  return data.map((repo: any) => ({
    id: repo.id.toString(),
    title: repo.name,
    description: repo.description,
    url: repo.html_url,
    language: repo.language,
    // Usamos la API de OpenGraph de Github que genera una imagen bonita de "carta social"
    imageUrl: `https://opengraph.githubassets.com/1/${username}/${repo.name}` 
  }));
}
