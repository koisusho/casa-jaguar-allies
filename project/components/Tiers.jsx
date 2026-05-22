// Casa Jaguar Allies — Earning Points + Tiers (3D flip cards) + Customer Benefits

const { useState: useState2 } = React;

function Points() {
  const points = [
  { val: 10, unit: "pts", title: "Standard referral", desc: "Guest spends $50+ at Casa Jaguar." },
  { val: 15, unit: "pts", title: "Pre-booked table", desc: "You arrange the booking in advance." },
  { val: 20, unit: "pts", title: "Large group", desc: "10+ guests or a tour group. Min spend*" },
  { val: 5, unit: "pts", title: "Driver stop", desc: "Each stop you make with guests." },
  { val: "∞", unit: "free café", title: "Drivers' bonus", desc: "Free Café de Olla — every visit, on us." }];

  return (
    <section className="section section-dark" id="points">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow" style={{ fontSize: "30px" }}>— How to earn —</span>
          <h2 className="section-title" style={{ fontFamily: "\"Bebas Neue\"" }}><em style={{ fontFamily: "\"Bebas Neue\"" }}>Every connection</em> earns.</h2>
          <p className="section-sub">
            Five ways to rack up points — the moment a guest you sent us walks through the door,
            you're on the board. No paperwork. No chasing receipts.
          </p>
        </div>
        <div className="points-grid">
          {points.map((p, i) =>
          <div className="point" key={i}>
              <div className="point-val" style={{ background: 'var(--gradient-fire-h)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                {p.val}
              </div>
              <div className="point-unit">{p.unit}</div>
              <h4 className="point-title">{p.title}</h4>
              <p className="point-desc">{p.desc}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function Tier({ data }) {
  const [flipped, setFlipped] = useState2(false);
  return (
    <div
      className={"tier " + (flipped ? "is-flipped" : "")}
      data-tier={data.id}
      onClick={() => setFlipped((f) => !f)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}>
      
      <div className="tier-face">
        <div className="tier-badge-wrap">
          <div className="tier-badge-halo"></div>
          <img className="tier-badge" src={data.badge} alt={data.name + ' badge'} />
        </div>
        <h3 className="tier-name">{data.name}</h3>
        <div className="tier-points">{data.points}</div>
        <ul className="tier-perks">
          {data.perks.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
        <div className="tier-flip-hint">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12a9 9 0 1 0 3-6.7" /><path d="M3 4v5h5" /></svg>
          Hover for reward
        </div>
      </div>
      <div className="tier-face tier-back">
        <div className="tier-badge-wrap tier-badge-wrap-sm">
          <img className="tier-badge" src={data.badge} alt="" />
        </div>
        <h3 className="tier-reward-title">{data.rewardTitle}</h3>
        <p className="tier-reward-desc">{data.reward}</p>
        <div style={{ flex: 1 }}></div>
        <div className="tier-reward-mini">Unlocked at {data.points}</div>
      </div>
    </div>);

}

function Tiers() {
  const tiers = [
  {
    id: "axolotl",
    badge: "assets/tier-axolotl.png",
    name: "Axolotl",
    points: "0 – 250 points",
    perks: [
    "Welcome to Casa Jaguar Allies",
    "Complimentary Café de Olla for drivers, every visit",
    "Access to Ally-only specials & promotions"],

    rewardTitle: "Your seat at the table.",
    reward: "Step into the family. Free Café de Olla for drivers every visit, plus first-look access to Ally-only specials. Small gestures, said with sabor."
  },
  {
    id: "aguila",
    badge: "assets/tier-aguila.png",
    name: "Águila",
    points: "251 – 499 points",
    perks: [
    "All Axolotl benefits",
    "Free meal at Casa Jaguar at 100 points",
    "Invitations to tasting nights & special events"],

    rewardTitle: "A meal on us — and a standing invite.",
    reward: "Bring a friend. Order whatever calls you. We pick up the tab. Plus a standing invite to our seasonal tasting nights — the kitchen comes out and sits with you."
  },
  {
    id: "jaguar",
    badge: "assets/tier-jaguar.png",
    name: "Jaguar",
    points: "500+ points",
    perks: [
    "All Águila benefits",
    "Prezzy® card rewards",
    "Priority bookings & VIP experiences",
    "Exclusive rewards and surprise perks"],

    rewardTitle: "Co-create something legendary.",
    reward: "Real money on a real Prezzy® card. VIP access. One-night-only experiences designed around your guests. Few will ever wear this medal."
  }];

  return (
    <section className="section section-dark" id="tiers" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="section-header">
          <span className="eyebrow" style={{ fontSize: "30px" }}>— Tiers & Rewards —</span>
          <h2 className="section-title" style={{ fontFamily: "\"Bebas Neue\"" }}>Three medals. <em>One movement.</em></h2>
          <p className="section-sub">
            Climb the ladder as guests you've sent us walk through the door.
            Each tier unlocks something real — not loyalty-program theatre.
            <span style={{ display: 'block', marginTop: 8, fontStyle: 'italic', color: 'var(--accent)' }}>Hover any medal to reveal the reward.</span>
          </p>
        </div>
        <div className="tiers-grid">
          {tiers.map((t) => <Tier key={t.id} data={t} />)}
        </div>
      </div>
    </section>);

}

// What your customers get — to make the value clear to allies too
function CustomerPerks() {
  const perks = [
  {
    icon:
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20" /><circle cx="12" cy="12" r="9" /></svg>,

    title: "House welcome",
    body: "Pre-booked Allies' tables are greeted with chips n'  salsa — on the house, every time."
  },
  {
    icon:
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16l7-3 7 3z" /></svg>,

    title: "Priority seating",
    body: "Pre-booked tables for Ally-referred guests — even on the busy Glenorchy weekends."
  },
  {
    icon:
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z" /></svg>,

    title: "A real story to take home",
    body: "Hand-pressed tortillas, real flavors coming our of the kitchen, the mountains in the window. The exact memory you promised."
  }];

  return (
    <section className="section section-cream" id="guests">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow" style={{ fontSize: "30px" }}>— What your guests get —</span>
          <h2 className="section-title" style={{ fontFamily: "\"Bebas Neue\"" }}>When you send guests our way, <em>we send them home with a story.</em></h2>
          <p className="section-sub">Your reputation is on the line every time you make a recommendation. We know that, that's why we protect it.
Pre-booked, Let us know you are coming to visit us, we will be ready to welcome you.
          </p>
        </div>
        <div className="value-grid">
          {perks.map((p, i) =>
          <div className="value-card" key={i}>
              <div style={{ width: 48, height: 48, border: '1.5px solid var(--accent)', borderRadius: 12, display: 'grid', placeItems: 'center', color: 'var(--accent)', background: 'rgba(247,160,25,0.06)', marginBottom: 'var(--s-5)' }}>{p.icon}</div>
              <h3 className="value-card-title">{p.title}</h3>
              <p className="value-card-body">{p.body}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

window.Points = Points;
window.Tiers = Tiers;
window.CustomerPerks = CustomerPerks;