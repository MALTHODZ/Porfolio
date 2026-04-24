import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-surface-container-lowest mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-display font-bold text-lg text-primary tracking-wide uppercase">Xavier</span>
          <span className="text-sm font-medium text-on-surface-variant">© 2026 Todos los derechos reservados.</span>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 text-sm font-semibold tracking-wide text-on-surface-variant">
          <a href="mailto:emprendedorxavier@gmail.com" className="hover:text-primary transition-colors">
            emprendedorxavier@gmail.com
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            LinkedIn
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
