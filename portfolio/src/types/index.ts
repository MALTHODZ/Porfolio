export interface Project {
  id: string | number;
  title: string;
  description: string | null;
  url: string;
  imageUrl?: string; 
  language?: string;
}
