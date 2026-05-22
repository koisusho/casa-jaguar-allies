// Casa Jaguar Allies — Sticky Nav
function Nav({ onJoin }) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-brand">
          <div className="nav-brand-mark"></div>
          <div className="nav-brand-text">
            <span className="nav-brand-name">CASA JAGUAR</span>
            <span className="nav-brand-prog">ALLIES · GLENORCHY</span>
          </div>
        </a>
        <div className="nav-links" style={{ fontSize: "21px" }}>
          <a href="#why">Why join</a>
          <a href="#how">How it works</a>
          <a href="#tiers">Tiers & rewards</a>
          <a href="#allies">Allies</a>
        </div>
        <button className="nav-cta" onClick={onJoin} style={{ fontSize: "15px" }}>Join the program</button>
      </div>
    </nav>);

}

window.Nav = Nav;