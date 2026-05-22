// Casa Jaguar Allies — Footer with Made-by-Claude credit

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--s-10)' }}>
          <img src="assets/casa-jaguar-logo-dark.png" alt="Casa Jaguar" style={{ height: 88, width: 'auto', filter: 'drop-shadow(0 0 30px rgba(247,160,25,0.25))' }} />
        </div>
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-col-title">Casa Jaguar</div>
            <p className="footer-tagline">Real Mexican Food — Made with love. Mexico's flavour in the mountains of New Zealand's.</p>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Visit</div>
            <div>25 Mull St, Glenorchy</div>
            <div>Lake Wakatipu, NZ</div>
            <a href="mailto:hola@tacosjaguar.nz">tacosjaguar.nz@gmail.com</a>
            <a href="https://instagram.com/tacosjaguar.nz">@tacosjaguar.nz</a>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Allies</div>
            <a href="#why">Why join</a>
            <a href="#how">How it works</a>
            <a href="#tiers">Tiers & rewards</a>
            <a href="#signup">Become an Ally</a>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Program</div>
            <a href="#">Program terms</a>
            <a href="#">Ally portal (soon)</a>
            <a href="#">Contact program manager</a>
            <div style={{ fontStyle: 'italic', color: 'var(--accent)', fontFamily: 'var(--font-accent)', fontSize: 16, marginTop: 'var(--s-3)' }}>Sabor que viaja contigo</div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="legal">
            © {new Date().getFullYear()} Casa Jaguar · Glenorchy, New Zealand · Casa Jaguar Allies is an invitation-style program. Participation subject to program terms.
            <span style={{ display: 'block', marginTop: 6 }}>
              #CasaJaguar #RealMexicanFood #Glenorchy
            </span>
          </div>
          <div className="made-by" title="This landing page was designed by Gab Ruiz with Claude (Anthropic)">
            <span className="dot"></span>
            <span style={{ color: 'var(--fg-2)' }}>Built with</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent)' }}>
              <path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z" />
            </svg>
            <span className="name">Claude</span>
            <span style={{ opacity: 0.5 }}>×</span>
            <span className="name">Gab Ruiz</span>
          </div>
        </div>
      </div>
    </footer>);

}

window.Footer = Footer;