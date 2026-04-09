import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-zinc-900 text-white">
      <div className="text-xl font-bold tracking-tight">
        <Link href="/">Porfolio Xavier Santiago</Link>
      </div>

      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="hover:text-blue-400 transition-colors">
            Inicio
          </Link>
        </li>
        <li>
          <Link href="#proyectos" className="hover:text-blue-400 transition-colors">
            Proyectos
          </Link>
        </li>
        <li>
          <Link href="#sobre-mi" className="hover:text-blue-400 transition-colors">
            Sobre mí
          </Link>
        </li>
      </ul>
    </nav>
  );
}
