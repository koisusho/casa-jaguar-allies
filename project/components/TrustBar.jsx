// Casa Jaguar Allies — Marquee trust bar
function TrustBar() {
  const items = [
  { icon: "🌮", text: "Real Mexican Food Since Day One" },
  { icon: "📍", text: "Glenorchy's Most Recommended" },
  { icon: "🤝", text: "Join Free · No Commitment" },
  { icon: "🏆", text: "Real Rewards · Real Recognition" },
  { icon: "🐆", text: "Tortillas Made In Casa — Every Time" }];

  // duplicate for seamless loop
  const list = [...items, ...items, ...items];
  return (
    <div className="trust-bar" style={{ fontSize: "15px" }}>
      <div className="trust-track">
        {list.map((it, i) =>
        <div className="trust-item" key={i}>
            <span aria-hidden="true">{it.icon}</span>
            <span style={{ fontSize: "15px" }}>{it.text}</span>
            <span className="trust-dot"></span>
          </div>
        )}
      </div>
    </div>);

}

window.TrustBar = TrustBar;