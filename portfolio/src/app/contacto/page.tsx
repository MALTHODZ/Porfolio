export default function ContactoPage() {
  return (
    <main className="min-h-screen p-6 md:p-12 w-full max-w-7xl mx-auto flex flex-col gap-12 overflow-x-hidden pt-24 md:pt-32 pb-24">

      {/* Header */}
      <section className="flex flex-col gap-6 w-full lg:w-2/3">
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
          <span className="text-on-surface">Construyamos </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic">algo</span>
          <span className="text-on-surface"> juntos</span>
        </h1>
        <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-3xl">
          ¿Tienes una idea innovadora o buscas un desarrollador junior? Estoy disponible para nuevos proyectos y colaboraciones creativas.
        </p>
      </section>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">

        {/* Left Column (Info Cards) */}
        <div className="flex flex-col gap-6">

          {/* Canales Directos */}
          <div className="bg-surface-container rounded-3xl p-8 border border-white/5 flex flex-col gap-6 shadow-lg">
            <h2 className="font-display text-xl font-bold text-secondary">Canales Directos</h2>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase block">Email</span>
                  <span className="text-on-surface font-medium text-sm md:text-base group-hover:text-primary transition-colors">emprendedorxavier@gmail.com
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase block">Ubicación</span>
                  <span className="text-on-surface font-medium text-sm md:text-base">Barcelona, ES</span>
                </div>
              </div>
            </div>
          </div>

          {/* Huella Digital */}
          <div className="bg-surface-container rounded-3xl p-8 border border-white/5 flex flex-col gap-6 shadow-lg">
            <h2 className="font-display text-xl font-bold text-secondary">Huella Digital</h2>

            <div className="flex flex-col gap-3">
              <a href="https://github.com/repos?q=owner%3A%40me" className="flex justify-between items-center px-5 py-4 bg-surface-container-highest rounded-2xl hover:bg-surface-variant transition-colors border border-transparent hover:border-white/5 group">
                <div className="flex items-center gap-3 text-on-surface font-medium">
                  <span className="text-primary font-mono font-bold">&lt;&gt;</span>
                  GitHub
                </div>
                <svg className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-all group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a href="https://www.linkedin.com/in/xavier-santiago-aguil%C3%B3-26621b247/" className="flex justify-between items-center px-5 py-4 bg-surface-container-highest rounded-2xl hover:bg-surface-variant transition-colors border border-transparent hover:border-white/5 group">
                <div className="flex items-center gap-3 text-on-surface font-medium">
                  <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  LinkedIn
                </div>
                <svg className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-all group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Map/Radar Box */}
          <div className="bg-surface-container rounded-3xl p-6 border border-white/5 h-48 relative overflow-hidden flex items-end">
            {/* Background Map/Grid Decoration */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle at center, transparent 0%, #060e20 80%), linear-gradient(0deg, transparent 24%, rgba(129, 236, 255, .3) 25%, rgba(129, 236, 255, .3) 26%, transparent 27%, transparent 74%, rgba(129, 236, 255, .3) 75%, rgba(129, 236, 255, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(129, 236, 255, .3) 25%, rgba(129, 236, 255, .3) 26%, transparent 27%, transparent 74%, rgba(129, 236, 255, .3) 75%, rgba(129, 236, 255, .3) 76%, transparent 77%, transparent)`,
                backgroundSize: '40px 40px'
              }}>
            </div>

            <div className="flex items-center gap-3 relative z-10">
              <span className="w-2.5 h-2.5 rounded-full bg-surface-variant flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
              </span>
              <span className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">
                Ubicado en el corazón de la creación digital
              </span>
            </div>
          </div>

        </div>

        {/* Right Column (Form) */}
        <div className="bg-surface-container rounded-3xl p-8 lg:p-12 border border-white/5 shadow-lg">
          <form className="flex flex-col gap-8">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">Nombre completo</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Tu nombre"
                  className="w-full bg-surface-container-highest border border-white/5 rounded-xl px-5 py-4 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  placeholder="ejemplo@email.com"
                  className="w-full bg-surface-container-highest border border-white/5 rounded-xl px-5 py-4 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">Asunto</label>
              <input
                type="text"
                id="subject"
                placeholder="¿En qué puedo ayudarte?"
                className="w-full bg-surface-container-highest border border-white/5 rounded-xl px-5 py-4 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">Mensaje</label>
              <textarea
                id="message"
                rows={6}
                placeholder="Cuéntame sobre tu proyecto..."
                className="w-full bg-surface-container-highest border border-white/5 rounded-xl px-5 py-4 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
              ></textarea>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4 border-t border-white/5 mt-2">
              <p className="text-on-surface-variant text-sm italic">
                Este formulario solo es visual, puedes contactarme por correo electrónico.
              </p>
              <button
                type="button"
                className="w-full md:w-auto px-8 py-4 bg-primary text-on-primary font-bold rounded-xl flex items-center justify-center gap-3 hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(129,236,255,0.2)] group"
              >
                Enviar Mensaje
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>

          </form>
        </div>
      </div>

      {/* Stats Bottom Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

        <div className="bg-surface-container p-6 rounded-2xl border border-white/5 flex flex-col gap-2 justify-center shadow-md">
          <span className="font-display text-4xl lg:text-5xl font-bold text-primary">99%</span>
          <span className="text-[9px] md:text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">Uptime Respuesta</span>
        </div>

        <div className="bg-surface-container p-6 rounded-2xl border border-white/5 flex flex-col gap-2 justify-center shadow-md">
          <span className="font-display text-4xl lg:text-5xl font-bold text-secondary">15+</span>
          <span className="text-[9px] md:text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">Proyectos Listos</span>
        </div>

        <div className="bg-surface-container p-6 rounded-2xl border border-white/5 flex flex-col gap-2 justify-center shadow-md">
          <span className="font-display text-4xl lg:text-5xl font-bold text-[#6a82fb]">24/7</span>
          <span className="text-[9px] md:text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">Mentalidad Digital</span>
        </div>

        <div className="bg-surface-container p-6 rounded-2xl border border-white/5 flex flex-col gap-2 justify-center shadow-md">
          <span className="font-display text-4xl lg:text-5xl font-bold text-primary">JS</span>
          <span className="text-[9px] md:text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">Hablado Fluido</span>
        </div>

      </div>

    </main>
  );
}
