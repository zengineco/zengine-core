const ZengineHeader = () => (
  <header className="fixed top-0 w-full bg-[rgba(10,20,33,0.8)] backdrop-blur-md border-b border-[var(--zengine-border)] z-50">
    <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
      <a href="https://zengine.site" className="flex items-center gap-3">
        <img 
          src="https://cdn.jsdelivr.net/gh/yourusername/zengine-core@main/assets/logos/zengine-logo-transparent.png" 
          alt="Zengine" 
          className="h-10 zengine-logo"
        />
        <span className="text-xl font-bold tracking-wider text-[var(--zengine-primary)]">ZENGINE ARCADE</span>
      </a>
      <nav className="flex gap-6">
        <a href="https://zengine.site" className="hover:text-[var(--zengine-secondary)] transition">Lobby</a>
        <a href="https://tg.zengine.site" className="hover:text-[var(--zengine-secondary)] transition">Telegaming</a>
        <a href="https://arcade.zengine.site" className="hover:text-[var(--zengine-secondary)] transition">Arcade</a>
        <a href="https://aipoker.zengine.site" className="hover:text-[var(--zengine-secondary)] transition">AI Poker</a>
      </nav>
    </div>
  </header>
);
