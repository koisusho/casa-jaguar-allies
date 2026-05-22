// Casa Jaguar Allies — Ally Atom diagram
// Casa Jaguar at the nucleus, 8 ally types as electrons on a rotating orbit.
// Click any node to reveal extra info. Orbit pauses on hover/select.

const { useState: useStateAT } = React;

const ALLY_TYPES = [
{
  id: "drivers",
  name: "Tour Drivers",
  short: "Drivers",
  icon: "M3 14h12V6H3M3 6v8M15 14l5-2v-4l-5-2M6 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM16 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  desc: "You control where the van stops. Make Casa Jaguar a signature stop.",
  why: "Your guests trust your route. One detour shapes their whole trip.",
  earn: "5 pts per stop · Free Café de Olla every visit · 15 pts for pre-booked tables",
  best: "Routes through Glenorchy, Paradise, & the Lord of the Rings circuit"
},
{
  id: "concierge",
  name: "Hotel Concierge",
  short: "Concierge",
  icon: "M3 21h18M5 21V8l7-5 7 5v13M9 12h6M9 16h6",
  desc: "Guests trust you more than TripAdvisor. Reward that trust.",
  why: "You're their first 'where should we eat?' Be the answer they brag about.",
  earn: "10 pts per referral · 15 pts for pre-bookings · Quarterly tasting nights",
  best: "Queenstown, Glenorchy, Wanaka lodges & boutique hotels"
},
{
  id: "hosts",
  name: "Airbnb & Holiday Hosts",
  short: "Hosts",
  icon: "M3 11 12 3l9 8M5 9v11h14V9M9 20v-6h6v6",
  desc: "A great restaurant tip turns a good stay into a great story.",
  why: "Your welcome notes get screenshot. Make us part of the recommendation.",
  earn: "10 pts per referral · Welcome-pack pairing kit · Group-booking bonus",
  best: "Lake Wakatipu Airbnbs, Glenorchy bach owners, holiday-home managers"
},
{
  id: "guides",
  name: "Tour Guides",
  short: "Guides",
  icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  desc: "Your recommendations shape the entire Glenorchy experience.",
  why: "Eight hours in the van together — your word is gospel by dinner time.",
  earn: "10 pts per referral · 20 pts for groups of 6+ · Guide-only tasting nights",
  best: "LOTR tours, jet-boat operators, walking-tour leads, kayak guides"
},
{
  id: "activity",
  name: "Activity Providers",
  short: "Activities",
  icon: "M14 4 4 14l3 1 1 3L18 8M14 4l4 4M18 8l3 5",
  desc: "Adventure companies, operators, and outdoor guides.",
  why: "Your guests are hungry after the river. We're the meal they'll remember.",
  earn: "10 pts per referral · Activity bundle co-promotions · Staff family discount",
  best: "Skydiving, rafting, horse trekking, hiking, scenic flights"
},
{
  id: "rentals",
  name: "Car Rental Teams",
  short: "Rentals",
  icon: "M3 13l2-6h14l2 6v6H3v-6zM7 17h.01M17 17h.01",
  desc: "Independent travelers need a local recommendation. Be that person.",
  why: "Self-drivers ask one question at pickup: 'where do we eat tonight?'",
  earn: "10 pts per referral · Branded map drops · Counter-staff café perks",
  best: "Queenstown airport rentals, campervan companies, car-share desks"
},
{
  id: "visitor",
  name: "Visitor Centre Staff",
  short: "Visitor Centre",
  icon: "M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",
  desc: "First stop, trusted, influential. The perfect ally.",
  why: "You're the official welcome to the South Island. We want to be on the map.",
  earn: "10 pts per referral · Casa Jaguar info-card supply · Reciprocal listings",
  best: "Queenstown i-SITE, Glenorchy visitor info, DOC offices"
},
{
  id: "local",
  name: "Local Businesses",
  short: "Locals",
  icon: "M3 9h18l-2-5H5L3 9zm0 0v11h18V9M9 14h6",
  desc: "Cafés, retailers, anyone who talks to tourists every day.",
  why: "Coffee in the morning, dinner with us at night. The Glenorchy loop.",
  earn: "10 pts per referral · Cross-promo windows · Shared events calendar",
  best: "Cafés, boutiques, galleries, gear shops, post office regulars"
}];


const ATOM_RADIUS = 270; // used by the SVG viewBox math (640x640)

function AtomNode({ data, angle, index, selectedId, onSelect }) {
  const isActive = selectedId === data.id;
  return (
    <div
      className={"atom-slot " + (isActive ? "is-active" : "")}
      style={{ ['--a']: angle + 'deg' }}
      onClick={() => onSelect(data.id)}
      role="button"
      aria-pressed={isActive}
      aria-label={data.name}
      tabIndex={0}
      onKeyDown={(e) => {if (e.key === 'Enter' || e.key === ' ') {e.preventDefault();onSelect(data.id);}}}>
      
      <div className="atom-anti-spin">
        <div className="atom-anti-tilt">
          <div className="atom-node">
            <div className="atom-node-ring" aria-hidden="true"></div>
            <svg className="atom-node-icon" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d={data.icon} />
            </svg>
            <div className="atom-node-name">{data.short}</div>
            <div className="atom-node-num">0{index + 1}</div>
          </div>
        </div>
      </div>
    </div>);

}

function AllyTypes() {
  const [selectedId, setSelectedId] = useStateAT(null);
  const types = ALLY_TYPES;
  const selected = types.find((t) => t.id === selectedId);
  const selectedIndex = types.findIndex((t) => t.id === selectedId);

  // Distribute 8 nodes evenly, starting at top (-90°)
  const positioned = types.map((t, i) => ({ ...t, angle: -90 + i * 360 / types.length }));

  return (
    <section className="section section-dark allies-section" id="allies" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="section-header">
          <span className="eyebrow" style={{ fontSize: "30px" }}>— Who this is for —</span>
          <h2 className="section-title" style={{ fontFamily: "\"Bebas Neue\"" }}>If you talk to tourists, <em>you belong here.</em></h2>
          <p className="section-sub">Eight kinds of Ally orbit around a great place. Casa Jaguar at the center, the network around. Tap a node to see who they are — and what they unlock.


          </p>
        </div>

        <div className={"atom-wrap " + (selected ? "is-selected" : "")}>
          <div className="atom-stage" aria-hidden={selected ? "true" : "false"} style={{ fontSize: "6px" }}>
            <div className="atom-aurora" aria-hidden="true"></div>
            <svg className="atom-bg-ring" viewBox="-320 -320 640 640" aria-hidden="true">
              <defs>
                <radialGradient id="atomFade" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(247,160,25,0.0)" />
                  <stop offset="80%" stopColor="rgba(247,160,25,0.18)" />
                  <stop offset="100%" stopColor="rgba(247,160,25,0)" />
                </radialGradient>
              </defs>
              <circle cx="0" cy="0" r={ATOM_RADIUS} fill="none" stroke="rgba(247,160,25,0.22)" strokeWidth="1.25" />
              <circle cx="0" cy="0" r={ATOM_RADIUS} fill="none" stroke="rgba(247,160,25,0.35)" strokeWidth="0.5" strokeDasharray="2 6" />
              <circle cx="0" cy="0" r={ATOM_RADIUS - 80} fill="none" stroke="rgba(247,160,25,0.10)" strokeWidth="1" strokeDasharray="1 4" />
              <circle cx="0" cy="0" r={ATOM_RADIUS + 60} fill="none" stroke="rgba(247,160,25,0.08)" strokeWidth="1" strokeDasharray="1 8" />
            </svg>

            {/* Connection lines + orbit + electrons all rotate together so they stay aligned */}
            <div className="atom-orbit">
              <svg className="atom-lines" viewBox="-320 -320 640 640" aria-hidden="true">
                {positioned.map((p, i) => {
                  const rad = p.angle * Math.PI / 180;
                  const x = Math.cos(rad) * ATOM_RADIUS;
                  const y = Math.sin(rad) * ATOM_RADIUS;
                  return (
                    <g key={i}>
                      <line x1="0" y1="0" x2={x} y2={y} stroke="rgba(247,160,25,0.18)" strokeWidth="0.75" strokeDasharray="2 5" />
                    </g>);

                })}
              </svg>

              {/* small inner electrons for atom feel */}
              <div className="atom-electron e1"></div>
              <div className="atom-electron e2"></div>
              <div className="atom-electron e3"></div>

              {positioned.map((t, i) =>
              <AtomNode
                key={t.id}
                data={t}
                angle={t.angle}
                index={i}
                selectedId={selectedId}
                onSelect={setSelectedId} />

              )}
            </div>

            <div className="atom-nucleus">
              <div className="atom-nucleus-pulse" aria-hidden="true"></div>
              <div className="atom-nucleus-glow" aria-hidden="true"></div>
              <img src="assets/jaguar-mask.png" alt="Casa Jaguar" className="atom-nucleus-mask" />
            </div>
          </div>

          <aside className="atom-detail">
            {selected ?
            <div className="atom-detail-card">
                <button className="atom-close" onClick={() => setSelectedId(null)} aria-label="Close">×</button>
                <div className="atom-detail-head">
                  <div className="atom-detail-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d={selected.icon} />
                    </svg>
                  </div>
                  <div>
                    <div className="atom-detail-tag">Ally Type · 0{selectedIndex + 1} / 0{types.length}</div>
                    <h3 className="atom-detail-title">{selected.name}</h3>
                  </div>
                </div>
                <p className="atom-detail-desc">{selected.desc}</p>
                <div className="atom-detail-meta">
                  <div className="atom-detail-row">
                    <span className="atom-detail-key">Why you</span>
                    <p className="atom-detail-val">{selected.why}</p>
                  </div>
                  <div className="atom-detail-row">
                    <span className="atom-detail-key">How you earn</span>
                    <p className="atom-detail-val">{selected.earn}</p>
                  </div>
                  <div className="atom-detail-row">
                    <span className="atom-detail-key">Best for</span>
                    <p className="atom-detail-val">{selected.best}</p>
                  </div>
                </div>
                <div className="atom-detail-cta">
                  <a href="#signup" className="atom-detail-btn">
                    Join as {selected.short.toLowerCase()} <span>→</span>
                  </a>
                </div>
              </div> :

            <div className="atom-detail-empty">
                <div className="atom-detail-tag" style={{ fontSize: "6px" }}>The Glenorchy circuit</div>
                <h3 className="atom-detail-title" style={{ fontFamily: "\"Bebas Neue\"" }}>One experience.<br /><em>The whole network.</em></h3>
                <p className="atom-detail-desc">
                  Every dot is someone whose word matters in Glenorchy.
                  Drivers, hosts, guides, concierges — the people guests ask
                  before they ask Google. Casa Jaguar sits at the center.
                </p>
                <ul className="atom-detail-list">
                  {types.map((t, i) =>
                <li key={t.id} onClick={() => setSelectedId(t.id)}>
                      <span className="atom-detail-list-num">0{i + 1}</span>
                      <span style={{ fontSize: "15px" }}>{t.name}</span>
                      <span className="atom-detail-list-arrow">→</span>
                    </li>
                )}
                </ul>
              </div>
            }
          </aside>
        </div>
      </div>
    </section>);

}

window.AllyTypes = AllyTypes;