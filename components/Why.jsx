// Casa Jaguar Allies — Why join (value cards) + How it works (3D steps)

function ValueProps() {
  const cards = [
  {
    num: "01",
    title: "Earn",
    body: "Accumulate points every time a guest you referred visits Casa Jaguar. Points convert to real rewards: meals, experiences, and Prezzy Visa cards."
  },
  {
    num: "02",
    title: "Belong",
    body: "Join an exclusive community of hospitality pros shaping the Glenorchy visitor experience. Tasting nights, VIP events, early menu access."
  },
  {
    num: "03",
    title: "Matter",
    body: "Your recommendation has real power. When you send someone to Casa Jaguar, you're giving them a story they'll tell back home. That counts."
  }];

  return (
    <section className="section section-cream" id="why">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow" style={{ fontSize: "30px" }}>— Why join —</span>
          <h2 className="section-title" style={{ fontFamily: "\"Bebas Neue\"" }}>
            The people tourists trust most<br />
            <em>deserve to be rewarded.</em>
          </h2>
          <p className="section-sub" style={{ fontFamily: "system-ui" }}>
            You already recommend restaurants, experiences, and places every single day.
            Casa Jaguar Allies simply makes that natural behaviour part of a program that gives back.
          </p>
        </div>
        <div className="value-grid">
          {cards.map((c) =>
          <div className="value-card" key={c.num}>
              <div className="value-card-num" style={{ background: 'var(--gradient-fire-h)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{c.num}</div>
              <h3 className="value-card-title">{c.title}</h3>
              <p className="value-card-body">{c.body}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function HowItWorks() {
  // small QR pattern
  const qr = Array.from({ length: 64 }, (_, i) => {
    if ([0, 1, 2, 3, 4, 5, 6, 8, 14, 16, 22, 24, 30, 40, 48, 49, 50, 51, 52, 53, 54].includes(i)) return 1;
    return Math.random() > 0.5 ? 1 : 0;
  });
  return (
    <section className="section section-dark" id="how">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow" style={{ fontSize: "30px" }}>— How it works —</span>
          <h2 className="section-title" style={{ fontFamily: "\"Bebas Neue\"" }}><em style={{ fontFamily: "\"Bebas Neue\"" }}>Three steps.</em> Zero complexity.</h2>
          <p className="section-sub" style={{ fontSize: "20px" }}>Sign up. Share your QR. Get rewarded.
Casa Jaguar handles the rest — you focus on doing what you already do well, give great recommendations.

          </p>
        </div>
        <div className="steps-grid">
          <div className="step">
            <div className="step-big-num">01</div>
            <div className="step-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
                <path d="M19 8v6M22 11h-6" />
              </svg>
            </div>
            <div className="step-tag" style={{ fontSize: "15px" }}>Step 01</div>
            <h3 className="step-title">Join Free</h3>
            <p className="step-body">Sign up today and receive your unique QR code and Ally profile.
              We'll be in touch via WhatsApp within 24 hours.</p>
          </div>
          <div className="step">
            <div className="step-big-num">02</div>
            <div className="step-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <path d="M14 14h3v3h-3zM18 18h3v3h-3zM14 18h2" />
              </svg>
            </div>
            <div className="step-tag" style={{ fontSize: "15px" }}>Step 02</div>
            <h3 className="step-title">Recommend</h3>
            <p className="step-body">Share Casa Jaguar with your guests. They scan your QR
              when they arrive — that's your fingerprint on the visit.</p>
            <div className="step-qr-stage">
              <div className="step-qr">
                {qr.map((v, i) => <div key={i} style={{ background: v ? 'var(--bg)' : 'transparent' }}></div>)}
              </div>
            </div>
          </div>
          <div className="step">
            <div className="step-big-num">03</div>
            <div className="step-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9h12l-1 13H7L6 9z" />
                <path d="M9 9V5a3 3 0 0 1 6 0v4" />
                <circle cx="12" cy="15" r="2" />
              </svg>
            </div>
            <div className="step-tag" style={{ fontSize: "15px" }}>Step 03</div>
            <h3 className="step-title">Earn & Enjoy</h3>
            <p className="step-body">Points accumulate automatically. Redeem for meals,
              experiences, merchandise, and Prezzy Visa Cards — your choice, every time.</p>
          </div>
        </div>
      </div>
    </section>);

}

window.ValueProps = ValueProps;
window.HowItWorks = HowItWorks;