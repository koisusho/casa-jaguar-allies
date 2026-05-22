// Casa Jaguar Allies — Sticky Nav with mobile hamburger menu
const { useState: useStateNav, useEffect: useEffectNav } = React;

function Nav({ onJoin }) {
  const [menuOpen, setMenuOpen] = useStateNav(false);

  // Close menu on Escape, and lock body scroll while open
  useEffectNav(() => {
    if (!menuOpen) return;
    const onKey = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const handleLink = (e) => {
    const href = e.currentTarget.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        const top = el.getBoundingClientRect().top + window.pageYOffset - 60;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
    setMenuOpen(false);
  };

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-brand" onClick={handleLink}>
          <div className="nav-brand-mark"></div>
          <div className="nav-brand-text">
            <span className="nav-brand-name">CASA JAGUAR</span>
            <span className="nav-brand-prog">ALLIES · GLENORCHY</span>
          </div>
        </a>
        <div className="nav-links" style={{ fontSize: "21px" }}>
          <a href="#why" onClick={handleLink}>Why join</a>
          <a href="#how" onClick={handleLink}>How it works</a>
          <a href="#tiers" onClick={handleLink}>Tiers & rewards</a>
          <a href="#allies" onClick={handleLink}>Allies</a>
        </div>
        <div className="nav-end">
          <button className="nav-cta" onClick={onJoin} style={{ fontSize: "15px" }}>Join the program</button>
          <button
            type="button"
            className={"nav-hamburger " + (menuOpen ? "is-open" : "")}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="nav-mobile-menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div id="nav-mobile-menu" className="nav-mobile-menu">
          <a href="#why" onClick={handleLink}>Why join</a>
          <a href="#how" onClick={handleLink}>How it works</a>
          <a href="#tiers" onClick={handleLink}>Tiers & rewards</a>
          <a href="#allies" onClick={handleLink}>Allies</a>
          <button
            type="button"
            className="nav-mobile-cta"
            onClick={() => { onJoin(); setMenuOpen(false); }}>
            Join the Allies →
          </button>
        </div>
      )}
    </nav>);

}

window.Nav = Nav;
