"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById("nav");
      if (!nav) return;
      if (window.scrollY > 80) {
        nav.style.transform = "translateY(-100%)";
      } else {
        nav.style.transform = "translateY(0)";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ background: "#0a0a0f", minHeight: "100vh", fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif", color: "#fff", overflowX: "hidden" }}>
      <style>{`
        :root {
          --glass-bg: rgba(255,255,255,0.08);
          --glass-border: rgba(255,255,255,0.15);
          --accent: #7c6af7;
          --accent2: #f06292;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .fade-up { animation: fadeUp 0.9s ease forwards; }
        .fade-up-2 { animation: fadeUp 0.9s 0.2s ease forwards; opacity: 0; }
        .fade-up-3 { animation: fadeUp 0.9s 0.4s ease forwards; opacity: 0; }
        .glass {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          backdrop-filter: blur(32px);
          -webkit-backdrop-filter: blur(32px);
          border-radius: 16px;
        }
        .btn-primary {
          background: linear-gradient(135deg, var(--accent), var(--accent2));
          border: none;
          border-radius: 50px;
          color: #fff;
          font-size: 1rem;
          font-weight: 600;
          padding: 14px 32px;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.2s;
          text-decoration: none;
          display: inline-block;
        }
        .btn-primary:hover { opacity: 0.85; transform: translateY(-2px); }
        .btn-secondary {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 50px;
          color: #fff;
          font-size: 1rem;
          font-weight: 500;
          padding: 14px 32px;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
          text-decoration: none;
          display: inline-block;
          backdrop-filter: blur(16px);
        }
        .btn-secondary:hover { background: rgba(255,255,255,0.14); transform: translateY(-2px); }
        .gradient-text {
          background: linear-gradient(135deg, #fff 30%, var(--accent) 70%, var(--accent2));
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .nav-link {
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          font-size: 0.95rem;
          transition: color 0.2s;
        }
        .nav-link:hover { color: #fff; }
        .feature-num {
          width: 36px; height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent), var(--accent2));
          display: flex; align-items: center; justify-content: center;
          font-size: 0.8rem; font-weight: 700; flex-shrink: 0;
        }
        .stat-card {
          padding: 28px 32px;
          display: flex; flex-direction: column; gap: 6px;
        }
        .stat-num {
          font-size: 2.4rem; font-weight: 700;
          background: linear-gradient(135deg, #fff, var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        section { padding: 100px 24px; max-width: 1100px; margin: 0 auto; }
        .divider {
          width: 600px; max-width: 100%; height: 2px;
          background: radial-gradient(circle, var(--accent) 0%, transparent 70%);
          margin: 60px auto;
        }
        @media (max-width: 768px) {
          section { padding: 60px 20px; }
          .hero-title { font-size: 2.8rem !important; }
          .showcase-grid { flex-direction: column !important; }
        }
      `}</style>

      {/* NAV */}
      <nav id="nav" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, transition: "transform 0.4s ease", padding: "16px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(10,10,15,0.6)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ fontSize: "1.4rem", fontWeight: 800, letterSpacing: "-0.5px" }}>
          <span className="gradient-text">NexPlay</span>
        </div>
        <div style={{ display: "flex", gap: 32 }}>
          <a href="#features" className="nav-link">Features</a>
          <a href="#player" className="nav-link">Player</a>
          <a href="#ecosystem" className="nav-link">Ecosystem</a>
        </div>
        <a href="#download" className="btn-primary" style={{ padding: "10px 24px", fontSize: "0.9rem" }}>Download</a>
      </nav>

      {/* HERO */}
      <div ref={heroRef} style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", paddingTop: 80 }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 60% 50%, rgba(124,106,247,0.18) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(240,98,146,0.12) 0%, transparent 50%)" }} />
        <div style={{ position: "absolute", top: "15%", right: "10%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,106,247,0.15), transparent)", filter: "blur(40px)" }} />

        <div style={{ textAlign: "center", maxWidth: 800, padding: "0 24px", position: "relative", zIndex: 1 }}>
          <div className="glass fade-up" style={{ display: "inline-block", padding: "8px 20px", borderRadius: 50, marginBottom: 32, fontSize: "0.85rem", color: "rgba(255,255,255,0.7)" }}>
            ✦ Next-generation music experience
          </div>
          <h1 className="hero-title fade-up-2" style={{ fontSize: "4.5rem", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-2px", marginBottom: 24 }}>
            <span className="gradient-text">Sound that moves</span>
            <br />with you
          </h1>
          <p className="fade-up-3" style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 40, maxWidth: 520, margin: "0 auto 40px" }}>
            Immersive audio, stunning visuals, and seamless sync across all your devices. Music redefined.
          </p>
          <div className="fade-up-3" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#download" className="btn-primary">Get NexPlay Free</a>
            <a href="#features" className="btn-secondary">See Features</a>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 48, left: "50%", transform: "translateX(-50%)", animation: "bounce 2s infinite", color: "rgba(255,255,255,0.4)", fontSize: "1.5rem" }}>↓</div>
      </div>

      {/* MANIFESTO */}
      <div style={{ textAlign: "center", padding: "80px 24px", maxWidth: 700, margin: "0 auto" }}>
        <h2 style={{ fontSize: "2.6rem", fontWeight: 700, letterSpacing: "-1px", marginBottom: 24 }}>
          Music is not just sound.<br />
          <span className="gradient-text">It's a feeling.</span>
        </h2>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.1rem", lineHeight: 1.8 }}>
          We built NexPlay for listeners who demand more — more depth, more clarity, more connection to the music they love. Every detail crafted, every note preserved.
        </p>
        <div className="divider" style={{ marginTop: 60 }} />
      </div>

      {/* INTERFACE SHOWCASE */}
      <section id="features">
        <div className="showcase-grid" style={{ display: "flex", gap: 64, alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <p style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>Interface</p>
            <h2 style={{ fontSize: "2.4rem", fontWeight: 700, letterSpacing: "-1px", marginBottom: 40, lineHeight: 1.2 }}>Designed for the way you listen</h2>
            {[
              { n: "01", title: "Adaptive UI", desc: "Interface shifts to your mood — dark, light, and everything between." },
              { n: "02", title: "Live Lyrics", desc: "Real-time lyrics perfectly synced to every beat and breath." },
              { n: "03", title: "Smart Queue", desc: "AI-powered suggestions that feel like a DJ who knows you." },
            ].map(f => (
              <div key={f.n} style={{ display: "flex", gap: 16, marginBottom: 28, alignItems: "flex-start" }}>
                <div className="feature-num">{f.n}</div>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: 4 }}>{f.title}</div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.95rem", lineHeight: 1.6 }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ flex: 1, position: "relative" }}>
            <div style={{ borderRadius: 24, overflow: "hidden", background: "linear-gradient(135deg, rgba(124,106,247,0.2), rgba(240,98,146,0.1))", padding: 3 }}>
              <div className="glass" style={{ borderRadius: 22, overflow: "hidden", height: 380, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ textAlign: "center", padding: 40 }}>
                  <div style={{ fontSize: "4rem", marginBottom: 16 }}>🎵</div>
                  <div style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 8 }}>NexPlay Interface</div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem" }}>Glassmorphic player UI</div>
                  <div style={{ marginTop: 24, height: 4, background: "linear-gradient(90deg, var(--accent), var(--accent2))", borderRadius: 2, width: "70%", margin: "24px auto 0" }} />
                  <div style={{ display: "flex", justifyContent: "center", gap: 20, marginTop: 20, fontSize: "1.4rem" }}>⏮ ⏸ ⏭</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* PLAYER SHOWCASE */}
      <section id="player">
        <div className="showcase-grid" style={{ display: "flex", gap: 64, alignItems: "center", flexDirection: "row-reverse" as const }}>
          <div style={{ flex: 1 }}>
            <p style={{ color: "var(--accent2)", fontSize: "0.85rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>Player</p>
            <h2 style={{ fontSize: "2.4rem", fontWeight: 700, letterSpacing: "-1px", marginBottom: 40, lineHeight: 1.2 }}>Audio that hits different</h2>
            {[
              { n: "01", title: "Spatial Audio", desc: "360° immersive sound that puts you inside the music." },
              { n: "02", title: "Lossless Quality", desc: "Studio-grade audio, streamed instantly to your ears." },
              { n: "03", title: "Offline Mode", desc: "Your library, always with you — no connection needed." },
            ].map(f => (
              <div key={f.n} style={{ display: "flex", gap: 16, marginBottom: 28, alignItems: "flex-start" }}>
                <div className="feature-num" style={{ background: "linear-gradient(135deg, var(--accent2), var(--accent))" }}>{f.n}</div>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: 4 }}>{f.title}</div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.95rem", lineHeight: 1.6 }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ borderRadius: 24, overflow: "hidden", background: "linear-gradient(135deg, rgba(240,98,146,0.2), rgba(124,106,247,0.1))", padding: 3 }}>
              <div className="glass" style={{ borderRadius: 22, overflow: "hidden", height: 380, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, padding: 32 }}>
                <div style={{ width: 100, height: 100, borderRadius: "50%", background: "linear-gradient(135deg, var(--accent), var(--accent2))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.5rem" }}>🎧</div>
                <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>Spatial Audio Active</div>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem" }}>24-bit / 192kHz Lossless</div>
                <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                  {[1,2,3,4,5,6,7,8].map(i => (
                    <div key={i} style={{ width: 4, background: `rgba(124,106,247,${0.3 + i*0.09})`, borderRadius: 2, height: 20 + (i % 3) * 14, transition: "height 0.3s" }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section id="ecosystem" style={{ padding: "100px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <div className="divider" style={{ margin: "0 auto 80px" }} />
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <p style={{ color: "var(--accent)", fontSize: "0.85rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>Ecosystem</p>
          <h2 style={{ fontSize: "2.6rem", fontWeight: 700, letterSpacing: "-1px" }}>One platform, every device</h2>
        </div>
        <div style={{ position: "relative", borderRadius: 28, overflow: "hidden", background: "linear-gradient(135deg, rgba(124,106,247,0.15), rgba(240,98,146,0.08))", padding: "60px 40px", textAlign: "center" }}>
          <div style={{ fontSize: "5rem", marginBottom: 20 }}>📱 💻 ⌚ 📺</div>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem" }}>iOS · Android · macOS · Windows · Apple Watch · Apple TV</p>
          <div style={{ display: "flex", gap: 24, marginTop: 48, justifyContent: "center", flexWrap: "wrap" as const }}>
            {[
              { num: "50M+", label: "Active listeners" },
              { num: "100M+", label: "Songs in library" },
              { num: "4.9★", label: "App Store rating" },
              { num: "150+", label: "Countries" },
            ].map(s => (
              <div key={s.num} className="glass stat-card" style={{ minWidth: 160, textAlign: "center" }}>
                <div className="stat-num">{s.num}</div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD CTA */}
      <div id="download" style={{ textAlign: "center", padding: "80px 24px 120px", background: "linear-gradient(180deg, transparent, rgba(124,106,247,0.08))" }}>
        <h2 style={{ fontSize: "3rem", fontWeight: 800, letterSpacing: "-1.5px", marginBottom: 16 }}>
          Ready to <span className="gradient-text">feel the music?</span>
        </h2>
        <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: 40, fontSize: "1.1rem" }}>Free forever. No credit card required.</p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#" className="btn-primary" style={{ fontSize: "1.05rem", padding: "16px 36px" }}>🍎 Download for iOS</a>
          <a href="#" className="btn-secondary" style={{ fontSize: "1.05rem", padding: "16px 36px" }}>🤖 Download for Android</a>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "32px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" as const, gap: 16 }}>
        <div style={{ fontWeight: 700, fontSize: "1.1rem" }}><span className="gradient-text">NexPlay</span></div>
        <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.85rem" }}>© 2026 NexPlay. All rights reserved.</div>
      </footer>
    </div>
  );
}
