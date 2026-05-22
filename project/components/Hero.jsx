// Casa Jaguar Allies — Hero with 3D-tilt Ally membership card
const { useRef, useState, useEffect } = React;

function AllyMembershipCard({ pattern }) {
  // pattern: 49 squares (7x7) for a fake QR
  const qrCells = pattern || [
  1, 1, 1, 1, 1, 1, 1,
  1, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 1, 1, 0, 1,
  1, 0, 1, 0, 1, 0, 1,
  1, 0, 1, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 1,
  1, 1, 1, 1, 1, 1, 1];

  // shuffle middle a bit for realism
  const cells = qrCells.map((v, i) => {
    if (i > 8 && i < 40 && i % 3 === 0) return Math.random() > 0.5 ? 1 : 0;
    return v;
  });
  return (
    <div className="ally-card-face">
      <div className="ally-card-grid"></div>
      <div className="ally-card-shine"></div>
      <div className="ally-card-row">
        <div>
          <div className="ally-card-brand">Casa Jaguar · Allies</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, lineHeight: 1, marginTop: 8 }}>ALIADO</div>
        </div>
        <div className="ally-card-tier">ORO · Tier 03</div>
      </div>
      <div className="ally-card-bottom-row">
        <div>
          <div className="ally-card-number">CJ · 002 · NZ · GLY</div>
          <div className="ally-card-name">Gab Ruiz</div>
          <div className="ally-card-role">Tour Driver · Glenorchy</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
          <div style={{ textAlign: 'right' }}>
            <div className="ally-card-points">238</div>
            <div className="ally-card-points-label">Points</div>
          </div>
          <div className="ally-card-qr" aria-hidden="true">
            {cells.map((v, i) => <div key={i} style={{ background: v ? 'var(--bg)' : 'transparent' }}></div>)}
          </div>
        </div>
      </div>
    </div>);

}

function Hero({ onJoin, onLearn }) {
  const stageRef = useRef(null);
  const cardRef = useRef(null);
  const maskRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    function onMove(e) {
      const r = stage.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      if (cardRef.current) {
        cardRef.current.style.transform = `rotateX(${-y * 18}deg) rotateY(${x * 22}deg) translateZ(20px)`;
      }
      if (maskRef.current) {
        maskRef.current.style.transform = `translate(${x * -18}px, ${y * -14}px)`;
      }
    }
    function onLeave() {
      if (cardRef.current) cardRef.current.style.transform = 'rotateX(8deg) rotateY(-12deg)';
      if (maskRef.current) maskRef.current.style.transform = 'translate(0,0)';
    }
    stage.addEventListener('mousemove', onMove);
    stage.addEventListener('mouseleave', onLeave);
    return () => {
      stage.removeEventListener('mousemove', onMove);
      stage.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero-aztec" aria-hidden="true"></div>
      <div className="container hero-inner" style={{ fontFamily: "Impact" }}>
        <div className="hero-copy">
          <div className="hero-eyebrow" style={{ fontFamily: "Nunito" }}>
            <span className="dot"></span>
            CASA JAGUAR ALLIES · GLENORCHY, NZ
          </div>
          <h1 className="hero-title" style={{ fontFamily: "\"Bebas Neue\"" }}>
            <span className="hero-title-script">You send them our way.</span>
            <span className="hero-title-emph" style={{ fontFamily: "\"Bebas Neue\"" }}>We make sure</span><br />
            they never<br />forget it.
          </h1>
          <p className="hero-sub" style={{ fontFamily: "Nunito" }}>
            Join the hospitality network that rewards the people who shape
            the Glenorchy experience — <em style={{ fontFamily: "Impact" }}>drivers, hosts, concierges,
            guides</em>, and more. Free to join. Real rewards. Real recognition.
          </p>
          <div className="hero-ctas">
            <button className="btn btn-primary" onClick={onJoin}>
              Join the Allies <span className="btn-arrow">→</span>
            </button>
            <button className="btn btn-secondary" onClick={onLearn}>
              See how it works ↓
            </button>
          </div>
          <div className="hero-trust">
            <div className="hero-trust-pill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5" /></svg>
              Free forever
            </div>
            <div className="hero-trust-pill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5" /></svg>
              Secure your spot
            </div>
            <div className="hero-trust-pill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5" /></svg>
              QR profile in 24h
            </div>
          </div>
        </div>

        <div className="hero-stage" ref={stageRef}>
          <div className="hero-mask-glow"></div>
          <img ref={maskRef} className="hero-mask" src="assets/jaguar-mask.png" alt="Jaguar Mask ®" style={{ width: "500px", opacity: "0.1", height: "500px" }} />
          <div className="ally-card-ghost g2"></div>
          <div className="ally-card-ghost g1"></div>
          <div className="ally-card" ref={cardRef}>
            <AllyMembershipCard />
          </div>
        </div>
      </div>
    </section>);

}

window.Hero = Hero;