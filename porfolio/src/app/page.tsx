export default async function HomePage() {

  return (
    <main className="min-h-screen p-6 md:p-12 w-full max-w-7xl mx-auto flex flex-col gap-24 overflow-x-hidden">

      {/* SECCIÓN HERO */}
      <section id="inicio" className="mt-8 md:mt-16 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
        <div className="w-full lg:w-[55%] flex flex-col items-start z-10">

          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-surface-container-highest border border-outline-variant/30 text-[10px] md:text-xs font-bold tracking-widest text-secondary uppercase">
            FRONT-END DEVELOPER
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
            <span className="block text-on-surface mb-2">Hola, soy</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary-container">
              Desarrollador
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary-container">
              Front-end Junior
            </span>
          </h1>

          <p className="text-on-surface-variant text-lg md:text-xl max-w-xl leading-relaxed mb-10">
            Construyo interfaces web limpias y funcionales. Enfocado en transformar ideas en código simple y elegante con las tecnologías más modernas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="proyectos" className="text-center font-body font-semibold px-8 py-3.5 rounded-md text-on-primary bg-gradient-to-br from-primary to-primary-container hover:opacity-90 transition-opacity">
              Ver Proyectos
            </a>
            <a href="contacto" className="text-center font-body font-semibold px-8 py-3.5 rounded-md text-primary bg-surface-variant/20 border border-outline-variant/30 hover:bg-surface-variant/40 transition-colors">
              Hablemos
            </a>
          </div>

        </div>

        {/* CODE MOCKUP RIGHT SIDE */}
        <div className="w-full lg:w-[45%] relative">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-3/4 bg-primary/20 blur-[100px] -z-10 rounded-full"></div>

          {/* Editor Container */}
          <div className="w-full aspect-[4/3] rounded-2xl bg-surface-container relative overflow-hidden ring-1 ring-white/5 flex flex-col p-6 shadow-2xl">

            {/* Fake Code Lines */}
            <div className="opacity-80 font-mono text-xs sm:text-sm leading-loose text-primary tracking-wide">
              <p className="text-on-surface-variant opacity-60">// React Developer Portfolio</p>
              <p>import <span className="text-secondary">&#123;</span> useState, useEffect <span className="text-secondary">&#125;</span> from <span className="text-on-surface">'react'</span>;</p>
              <br />
              <p><span className="text-[#c678dd]">const</span> <span className="text-[#61afef]">buildExperience</span> = <span className="text-[#c678dd]">async</span> () <span className="text-[#c678dd]">=&gt;</span> <span className="text-secondary">&#123;</span></p>
              <p className="pl-6"><span className="text-[#c678dd]">const</span> <span className="text-on-surface">ideas</span> = <span className="text-[#c678dd]">await</span> <span className="text-[#61afef]">parse</span>(<span className="text-[#98c379]">'vision'</span>);</p>
              <p className="pl-6"><span className="text-[#c678dd]">return</span> <span className="text-on-surface">ideas</span>.<span className="text-[#61afef]">map</span>(idea <span className="text-[#c678dd]">=&gt;</span> <span className="text-[#61afef]">code</span>(idea));</p>
              <p className="text-secondary">&#125;</p>
              <br />
              <p><span className="text-[#c678dd]">export default</span> buildExperience;</p>
            </div>

            {/* Overlay Badge */}
            <div className="absolute bottom-6 left-6 inline-flex items-center gap-3 px-4 py-2.5 rounded-lg bg-surface-variant/60 backdrop-blur border border-outline-variant/20 shadow-lg">
              <span className="text-secondary font-mono font-bold text-base tracking-tighter">&lt;&gt;</span>
              <span className="text-on-surface text-sm font-semibold tracking-wide">Compilando futuro</span>
            </div>

            {/* Gradient Mask Over Editor (to fade out code at the bottom right) */}
            <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-surface-container to-transparent z-0 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* SECCIÓN MI ENFOQUE */}
      <section id="enfoque" className="w-full">
        {/* Header de la sección */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
          <div className="w-full md:w-1/2">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-on-surface inline-block relative border-b-4 border-secondary pb-2">
              Mi Enfoque
            </h2>
          </div>
          <div className="w-full md:w-1/2 md:max-w-md ml-auto">
            <p className="text-on-surface-variant text-sm md:text-base leading-relaxed text-left md:text-right">
              Metodologías y principios que guían mi proceso de desarrollo para entregar productos de calidad.
            </p>
          </div>
        </div>

        {/* Tarjetas / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Tarjeta 1 */}
          <div className="bg-surface-container p-8 rounded-2xl flex flex-col items-start gap-4 hover:bg-surface-bright transition-all group duration-300">
            <div className="w-12 h-12 bg-surface-container-highest rounded-xl flex items-center justify-center mb-2">
              <svg className="w-6 h-6 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 12 12 17 22 12" />
                <polyline points="2 17 12 22 22 17" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-display text-xl font-bold text-on-surface mb-3">Frameworks Modernos</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                Domino herramientas como React y Tailwind CSS para crear aplicaciones escalables, mantenibles y preparadas para el futuro.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold tracking-wider text-on-surface-variant uppercase transition-colors group-hover:text-primary">React</span>
              <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold tracking-wider text-on-surface-variant uppercase transition-colors group-hover:text-primary">Next.js</span>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="bg-surface-container p-8 rounded-2xl flex flex-col items-start gap-4 hover:bg-surface-bright transition-all group duration-300">
            <div className="w-12 h-12 bg-surface-container-highest rounded-xl flex items-center justify-center mb-2">
              <svg className="w-6 h-6 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 16 16 12 12 8" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-display text-xl font-bold text-on-surface mb-3">Ingeniería UI</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                Diseño con sistemas de diseño en mente, asegurando consistencia visual y una experiencia de usuario intuitiva en cada píxel.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold tracking-wider text-on-surface-variant uppercase transition-colors group-hover:text-primary">Design Systems</span>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="bg-surface-container p-8 rounded-2xl flex flex-col items-start gap-4 hover:bg-surface-bright transition-all group duration-300">
            <div className="w-12 h-12 bg-surface-container-highest rounded-xl flex items-center justify-center mb-2">
              <svg className="w-6 h-6 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-display text-xl font-bold text-on-surface mb-3">Optimización</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                Priorizo el rendimiento y la accesibilidad, optimizando cada recurso para que la web cargue instantáneamente en cualquier dispositivo.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold tracking-wider text-on-surface-variant uppercase transition-colors group-hover:text-primary">SEO</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
