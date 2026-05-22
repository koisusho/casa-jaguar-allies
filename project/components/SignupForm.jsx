// Casa Jaguar Allies — Signup form (4 sections, full validation, success state)
const { useState: useS, useMemo: useM } = React;

const ROLE_OPTIONS = [
"Hotel Reception / FOH", "Concierge", "Tour Driver", "Tour Guide",
"Airbnb Host", "Holiday Home Manager", "Car Rental Staff",
"Activity Provider", "Café / Restaurant Staff", "Tourism Operator", "Other"];

const AREAS = ["Queenstown", "Frankton", "Arrowtown", "Glenorchy", "Wanaka", "Other"];
const GUESTS_PER_DAY = ["1–5", "5–10", "10–20", "20–50", "50+"];
const ASK_FREQ = ["Very Often", "Sometimes", "Rarely"];
const VISITED = ["Yes — Glenorchy", "Yes — Tacos Jaguar (QT)", "Not yet, but I'd love to!"];
const PREFS = ["Tasting Night Invites", "VIP Events", "New Menu Previews", "Reward Updates", "Special Guest Promotions", "Collaboration Opportunities"];
const PREBOOK = ["Yes", "Maybe", "Not right now"];
const CONTACT = ["WhatsApp", "Email", "Instagram", "SMS"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function FormSection({ num, title, children }) {
  return (
    <div className="form-section" style={{ fontSize: "6px" }}>
      <div className="form-section-head">
        <div className="form-section-num">{num}</div>
        <div className="form-section-title" style={{ fontSize: "20px" }}>{title}</div>
      </div>
      {children}
    </div>);

}

function Label({ children, required }) {
  return (
    <label className="form-label" style={{ fontSize: "15px" }}>
      {children}{required && <span className="req">*</span>}
    </label>);

}

function Pill({ active, children, onClick }) {
  return (
    <button type="button" className={"pill " + (active ? "active" : "")} onClick={onClick}>
      {children}
    </button>);

}

function Radio({ active, children, onClick }) {
  return (
    <button type="button" className={"radio-pill " + (active ? "active" : "")} onClick={onClick}>
      {children}
    </button>);

}

function Check({ active, children, onClick }) {
  return (
    <button type="button" className={"checkbox " + (active ? "active" : "")} onClick={onClick}>
      <span className="checkbox-box">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
      </span>
      <span>{children}</span>
    </button>);

}

function SignupForm({ formRef }) {
  const [submitted, setSubmitted] = useS(false);
  const [submitting, setSubmitting] = useS(false);
  const [f, setF] = useS({
    fullName: "", nickname: "", email: "", phone: "", instagram: "",
    roles: [], company: "", area: "", guestsPerDay: "", asks: "",
    visited: "", recommend: "", why: "",
    prefs: [], prebook: "", contact: "", birthday: ""
  });
  const set = (k, v) => setF((s) => ({ ...s, [k]: v }));
  const toggle = (k, v) => setF((s) => ({ ...s, [k]: s[k].includes(v) ? s[k].filter((x) => x !== v) : [...s[k], v] }));

  // Sections: A complete if name+email+phone; B if 1+ role + company + area + guestsPerDay + asks; C if visited + why; D if contact
  const progress = useM(() => ({
    A: !!(f.fullName && f.email && f.phone),
    B: !!(f.roles.length && f.company && f.area && f.guestsPerDay && f.asks),
    C: !!(f.visited && f.why),
    D: !!f.contact
  }), [f]);
  const canSubmit = progress.A && progress.B && progress.C && progress.D;

  function onSubmit(e) {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);
    setTimeout(() => {setSubmitting(false);setSubmitted(true);}, 900);
  }

  if (submitted) {
    const displayName = f.nickname || f.fullName.split(" ")[0] || "Aliado";
    return (
      <div className="signup-stage" id="signup" ref={formRef}>
        <div className="container">
          <div className="signup-card">
            <div className="success-stage">
              <div className="success-icon">
                <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              </div>
              <span className="signup-tag" style={{ marginBottom: 0, fontSize: "20px" }}>¡Estás dentro!</span>
              <h2 className="success-title" style={{ background: 'var(--gradient-fire-h)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                BIENVENIDO, {displayName.toUpperCase()}
              </h2>
              <p className="success-msg" style={{ fontFamily: "Nunito" }}>
                You're an Ally. Your QR profile will be ready within 24 hours — we'll
                send it to you on {f.contact || "WhatsApp"}. <br />
                <em style={{ color: 'var(--accent)' }}>Welcome to la casa.</em>
              </p>
              <div className="success-meta">
                Tier: <strong style={{ color: 'var(--fg)' }}>Bronce</strong> · Points: <strong style={{ color: 'var(--fg)' }}>0</strong> · Onboarding via {f.contact || "WhatsApp"}
              </div>
              <div className="hero-trust" style={{ marginTop: 'var(--s-8)', justifyContent: 'center' }}>
                <div className="hero-trust-pill"><span className="dot" style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }}></span>Profile in 48h</div>
                <div className="hero-trust-pill"><span className="dot" style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }}></span>Free antojito welcome on us</div>
              </div>
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="signup-stage" id="signup" ref={formRef}>
      <div className="container">
        <div className="signup-card">
          <div className="signup-tag" style={{ fontSize: "30px" }}>— Become an Ally —</div>
          <h2 className="signup-title" style={{ fontFamily: "\"Bebas Neue\"" }}>Join the Program.</h2>
          <p className="signup-sub">
            It takes 2 minutes. Your QR profile will be ready within 24 hours.
          </p>

          <div className="form-progress" aria-label="form progress">
            {["A", "B", "C", "D"].map((k) =>
            <div key={k} className={"form-progress-dot " + (progress[k] ? "active" : "")}></div>
            )}
          </div>

          <form onSubmit={onSubmit} noValidate>

            <FormSection num="A" title="Who you are">
              <div className="form-row">
                <div>
                  <Label required>Full name</Label>
                  <input className="form-input" placeholder="e.g. Maria Gonzalez" value={f.fullName} onChange={(e) => set('fullName', e.target.value)} />
                </div>
                <div>
                  <Label>What should we call you?</Label>
                  <input className="form-input" placeholder="Nickname (optional)" value={f.nickname} onChange={(e) => set('nickname', e.target.value)} />
                </div>
              </div>
              <div className="form-row">
                <div>
                  <Label required>Email</Label>
                  <input type="email" className="form-input" placeholder="you@hospitality.nz" value={f.email} onChange={(e) => set('email', e.target.value)} />
                </div>
                <div>
                  <Label required>Phone / WhatsApp</Label>
                  <input type="tel" className="form-input" placeholder="+64 21 …" value={f.phone} onChange={(e) => set('phone', e.target.value)} />
                </div>
              </div>
              <div className="form-row full">
                <div>
                  <Label>Instagram handle</Label>
                  <input className="form-input" placeholder="@yourhandle" value={f.instagram} onChange={(e) => set('instagram', e.target.value)} />
                </div>
              </div>
            </FormSection>

            <FormSection num="B" title="Your role">
              <Label required>What best describes you? (pick all that fit)</Label>
              <div className="pill-group" style={{ marginBottom: 'var(--s-6)' }}>
                {ROLE_OPTIONS.map((r) =>
                <Pill key={r} active={f.roles.includes(r)} onClick={() => toggle('roles', r)}>{r}</Pill>
                )}
              </div>
              <div className="form-row">
                <div>
                  <Label required>Business / Company name</Label>
                  <input className="form-input" placeholder="e.g. Glenorchy Glider Co." value={f.company} onChange={(e) => set('company', e.target.value)} />
                </div>
                <div>
                  <Label required>Area you work in</Label>
                  <select className="form-select" value={f.area} onChange={(e) => set('area', e.target.value)}>
                    <option value="">Choose your area…</option>
                    {AREAS.map((a) => <option key={a} value={a}>{a}</option>)}
                  </select>
                </div>
              </div>
              <div className="form-row full">
                <div>
                  <Label required>Guests you talk to per day</Label>
                  <div className="radio-group">
                    {GUESTS_PER_DAY.map((g) =>
                    <Radio key={g} active={f.guestsPerDay === g} onClick={() => set('guestsPerDay', g)}>{g}</Radio>
                    )}
                  </div>
                </div>
              </div>
              <div className="form-row full">
                <div>
                  <Label required>Do guests ask you for food recommendations?</Label>
                  <div className="radio-group">
                    {ASK_FREQ.map((g) =>
                    <Radio key={g} active={f.asks === g} onClick={() => set('asks', g)}>{g}</Radio>
                    )}
                  </div>
                </div>
              </div>
            </FormSection>

            <FormSection num="C" title="Your connection to Casa Jaguar">
              <div className="form-row full">
                <div>
                  <Label required>Have you visited Casa Jaguar before?</Label>
                  <div className="radio-group">
                    {VISITED.map((g) =>
                    <Radio key={g} active={f.visited === g} onClick={() => set('visited', g)}>{g}</Radio>
                    )}
                  </div>
                </div>
              </div>
              <div className="form-row full">
                <div>
                  <Label>What do you usually recommend in Glenorchy?</Label>
                  <textarea className="form-textarea" maxLength={200} placeholder="The walks, the views, the places you send people back home telling stories about…" value={f.recommend} onChange={(e) => set('recommend', e.target.value)} />
                  <div style={{ textAlign: 'right', fontSize: 11, color: 'var(--fg-3)', marginTop: 4 }}>{f.recommend.length}/200</div>
                </div>
              </div>
              <div className="form-row full">
                <div>
                  <Label required>Why do you want to join Casa Jaguar Allies?</Label>
                  <textarea className="form-textarea" maxLength={300} placeholder="In your own words — what draws you in?" value={f.why} onChange={(e) => set('why', e.target.value)} />
                  <div style={{ textAlign: 'right', fontSize: 11, color: 'var(--fg-3)', marginTop: 4 }}>{f.why.length}/300</div>
                </div>
              </div>
            </FormSection>

            <FormSection num="D" title="Preferences">
              <Label>I'd like to receive</Label>
              <div className="checkbox-grid" style={{ marginBottom: 'var(--s-6)' }}>
                {PREFS.map((p) =>
                <Check key={p} active={f.prefs.includes(p)} onClick={() => toggle('prefs', p)}>{p}</Check>
                )}
              </div>
              <div className="form-row">
                <div>
                  <Label>Interested in pre-booking tables for guests?</Label>
                  <div className="radio-group">
                    {PREBOOK.map((g) =>
                    <Radio key={g} active={f.prebook === g} onClick={() => set('prebook', g)}>{g}</Radio>
                    )}
                  </div>
                </div>
                <div>
                  <Label>Birthday month</Label>
                  <select className="form-select" value={f.birthday} onChange={(e) => set('birthday', e.target.value)}>
                    <option value="">Optional</option>
                    {MONTHS.map((m) => <option key={m} value={m}>{m}</option>)}
                  </select>
                </div>
              </div>
              <div className="form-row full">
                <div>
                  <Label required>Preferred contact method</Label>
                  <div className="radio-group">
                    {CONTACT.map((g) =>
                    <Radio key={g} active={f.contact === g} onClick={() => set('contact', g)}>{g}</Radio>
                    )}
                  </div>
                </div>
              </div>
            </FormSection>

            <button type="submit" className="form-submit" disabled={!canSubmit || submitting}>
              {submitting ?
              <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ animation: 'spin 800ms linear infinite' }}><path d="M21 12a9 9 0 1 1-6.2-8.5" /></svg>
                  Sending your application…
                </> :

              <>Become an Ally <span style={{ fontSize: 22 }}>→</span></>
              }
            </button>
            <div className="signup-foot">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z" /></svg>
              By submitting, you accept the Casa Jaguar Allies program terms.
              We'll never spam you.
            </div>
          </form>
        </div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>);

}

window.SignupForm = SignupForm;