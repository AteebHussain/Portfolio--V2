import { motion } from "framer-motion";
import { Terminal, ArrowRight, Download } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
const ROLES = ["Software Engineer", "Digital Twin Dev", "AI Builder", "Full-Stack Dev"];

const GlitchText = ({ text }) => {
  return (
    <span className="glitch-wrapper" data-text={text}>
      {text}
    </span>
  );
};

const Sec1 = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 60);
    } else if (!deleting && charIndex > current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, 35);
    } else {
      setDeleting(false);
      setRoleIndex((r) => (r + 1) % ROLES.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <>
      <style>{`
        .glitch-wrapper {
          position: relative;
          color: #F7BB2E;
        }
        .glitch-wrapper::before,
        .glitch-wrapper::after {
          content: attr(data-text);
          position: absolute;
          top: 0; left: 0;
          width: 100%;
          height: 100%;
        }
        .glitch-wrapper::before {
          color: #E14842;
          animation: glitch1 3s infinite;
          clip-path: polygon(0 30%, 100% 30%, 100% 55%, 0 55%);
        }
        .glitch-wrapper::after {
          color: #00f0ff;
          animation: glitch2 3s infinite;
          clip-path: polygon(0 65%, 100% 65%, 100% 80%, 0 80%);
        }
        @keyframes glitch1 {
          0%, 90%, 100% { transform: translate(0); opacity: 0; }
          92% { transform: translate(-3px, 1px); opacity: 1; }
          94% { transform: translate(3px, -1px); opacity: 1; }
          96% { transform: translate(0); opacity: 0; }
        }
        @keyframes glitch2 {
          0%, 90%, 100% { transform: translate(0); opacity: 0; }
          93% { transform: translate(3px, 2px); opacity: 1; }
          95% { transform: translate(-3px, -1px); opacity: 1; }
          97% { transform: translate(0); opacity: 0; }
        }
        .scanline {
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.08) 2px,
            rgba(0,0,0,0.08) 4px
          );
          pointer-events: none;
        }
        .cyber-grid {
          background-image:
            linear-gradient(rgba(225,72,66,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(225,72,66,0.12) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .stat-card {
          border: 1px solid rgba(225,72,66,0.2);
          background: rgba(11,14,22,0.8);
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
        }
        .stat-card:hover {
          border-color: rgba(247,187,46,0.5);
          box-shadow: 0 0 24px rgba(247,187,46,0.1);
        }
        .terminal-badge {
          border: 1px solid rgba(247,187,46,0.3);
          background: rgba(247,187,46,0.06);
          animation: badge-pulse 3s ease-in-out infinite;
        }
        @keyframes badge-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(247,187,46,0.2); }
          50% { box-shadow: 0 0 0 6px rgba(247,187,46,0); }
        }
        .cursor-blink {
          display: inline-block;
          width: 2px;
          height: 1em;
          background: #F7BB2E;
          margin-left: 2px;
          vertical-align: middle;
          animation: blink 0.9s step-end infinite;
        }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .avatar-ring {
          animation: ring-rotate 8s linear infinite;
        }
        @keyframes ring-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .btn-primary {
          background: #F7BB2E;
          color: #0B0E16;
          font-weight: 800;
          border: 2px solid #F7BB2E;
          letter-spacing: 0.08em;
          transition: all 0.25s ease;
        }
        .btn-primary:hover {
          background: transparent;
          color: #F7BB2E;
          box-shadow: 0 0 24px rgba(247,187,46,0.4);
        }
        .btn-outline {
          background: transparent;
          color: #E14842;
          font-weight: 800;
          border: 2px solid #E14842;
          letter-spacing: 0.08em;
          transition: all 0.25s ease;
        }
        .btn-outline:hover {
          background: rgba(225,72,66,0.1);
          box-shadow: 0 0 24px rgba(225,72,66,0.3);
        }
        .hero-line {
          width: 3px;
          background: linear-gradient(to bottom, #E14842, transparent);
        }
        .float-tag {
          position: absolute;
          padding: 5px 10px;
          border-radius: 2px;
          font-family: monospace;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: rgba(255,255,255,0.75);
          background: rgba(11,14,22,0.92);
          border: 1px solid rgba(255,255,255,0.08);
          white-space: nowrap;
        }
      `}</style>

      <div className="relative min-h-screen flex items-center bg-cyber-black overflow-hidden pt-20">
        <div className="absolute inset-0 cyber-grid opacity-40 z-0" />
        <div className="absolute inset-0 scanline z-0" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-cyber-black to-transparent z-0" />
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-cyber-black to-transparent z-0" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-red/5 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyber-yellow/5 rounded-full blur-3xl z-0" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-center">

            {/* LEFT */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="terminal-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-sm text-cyber-yellow text-xs font-mono uppercase tracking-widest mb-8"
              >
                <Terminal size={12} weight="bold" />
                <span>System Online // v2.0</span>
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-white/40 font-mono text-sm uppercase tracking-[0.3em] mb-3"
              >
                Hello, World. I'm
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-2 leading-none"
              >
                <GlitchText text="SYED" />
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-none"
              >
                ATEEB
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="hero-line h-8 flex-shrink-0" />
                <div className="font-mono text-lg md:text-xl text-white/70 tracking-wide min-h-[1.75rem]">
                  <span className="text-cyber-red">&gt;</span>{" "}
                  <span>{displayed}</span>
                  <span className="cursor-blink" />
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 }}
                className="text-white/50 max-w-lg leading-relaxed mb-10 text-sm md:text-base"
              >
                Building digital-twin systems, AI dashboards, and modern full-stack products at{" "}
                <span className="text-white/80 font-semibold">Tata Consulting Engineers</span>.
                Based in India. Shipping things that matter.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-wrap gap-4 mb-14"
              >
                <a href="#projects" className="btn-primary px-7 py-3 text-sm font-mono flex items-center gap-2 rounded-sm">
                  VIEW PROJECTS <ArrowRight size={16} weight="bold" />
                </a>
                <a href="/Resume.pdf" target="_blank" className="btn-outline px-7 py-3 text-sm font-mono flex items-center gap-2 rounded-sm">
                  <Download size={16} weight="bold" /> RESUME
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.05 }}
                className="grid grid-cols-3 gap-3 max-w-md"
              >
                {[
                  { val: "2+", label: "Yrs Experience" },
                  { val: "3+", label: "Live Projects" },
                  { val: "TCE", label: "Current Employer" },
                ].map((s, i) => (
                  <div key={i} className="stat-card p-4 rounded-sm">
                    <div className="text-2xl font-black text-cyber-yellow font-mono">{s.val}</div>
                    <div className="text-[10px] text-white/40 uppercase tracking-widest font-mono mt-1">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative hidden lg:flex items-center justify-center"
              style={{ width: 340, height: 340 }}
            >
              <svg className="absolute avatar-ring" width="340" height="340" viewBox="0 0 340 340">
                <circle cx="170" cy="170" r="160" fill="none" stroke="#E14842" strokeWidth="1" strokeDasharray="8 12" opacity="0.4" />
              </svg>

              <div className="absolute top-6 left-6 w-6 h-6 border-t-2 border-l-2 border-cyber-yellow/60" />
              <div className="absolute bottom-6 right-6 w-6 h-6 border-b-2 border-r-2 border-cyber-yellow/60" />
              <div className="absolute top-6 right-6 w-6 h-6 border-t-2 border-r-2 border-cyber-red/60" />
              <div className="absolute bottom-6 left-6 w-6 h-6 border-b-2 border-l-2 border-cyber-red/60" />

              <div className="relative w-56 h-56 rounded-full overflow-hidden border-2 border-cyber-yellow/30 shadow-[0_0_60px_rgba(247,187,46,0.15)]">
                <img
                  src="/img/20220810_213711.jpg"
                  alt="Syed Ateeb"
                  className="w-full h-full object-cover"
                  style={{ filter: "grayscale(60%) contrast(1.1)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/60 via-transparent to-transparent" />
              </div>

              {/* Floating tags */}
              <div className="float-tag" style={{ top: "8%", left: "-30%" }}>
                <span style={{ color: "#76b900" }}>▸ </span>NVIDIA Isaac Sim
              </div>
              <div className="float-tag" style={{ top: "58%", left: "-26%" }}>
                <span style={{ color: "#fff" }}>▸ </span>Next.js
              </div>
              <div className="float-tag" style={{ top: "20%", right: "-22%" }}>
                <span style={{ color: "#512BD4" }}>▸ </span>.NET / C#
              </div>
              <div className="float-tag" style={{ top: "70%", right: "-16%" }}>
                <span style={{ color: "#F7BB2E" }}>▸ </span>Digital Twins
              </div>
            </motion.div>

          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 text-[10px] font-mono uppercase tracking-widest"
        >
          <span>Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent animate-bounce" />
        </motion.div>
      </div>
    </>
  );
};

export default Sec1;