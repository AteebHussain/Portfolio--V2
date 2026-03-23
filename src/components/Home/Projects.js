import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { GithubLogo, ArrowSquareOut } from "@phosphor-icons/react";

const PROJECTS = [
  {
    id: "01",
    title: "ParallelAI",
    subtitle: "AI Model Comparison Dashboard",
    desc: "Side-by-side LLM comparison with real-time SSE streaming. Built with Next.js, OpenRouter, and Tailwind v4. Intentional dark charcoal design system with amber as a single accent — no vibe-coded chaos.",
    tags: ["Next.js", "TypeScript", "OpenRouter", "Framer Motion", "Tailwind v4"],
    accent: "#F7BB2E",
    github: "https://github.com/AteebHussain/Parallel-AI",
    live: "https://parallel-ai-theta.vercel.app/",
    featured: true,
  },
  {
    id: "02",
    title: "SkimIt",
    subtitle: "URL → Visual Brief Converter",
    desc: "Paste a URL, get a structured visual brief in seconds. Streaming Gemini API responses, content-type theming, bias detection, and a DM Sans/Syne font system. Deployed on Vercel.",
    tags: ["Next.js", "Gemini API", "Streaming", "Vercel"],
    accent: "#E14842",
    github: "https://github.com/AteebHussain/Skim-It",
    live: "https://skim-it.vercel.app/",
    featured: true,
  },
  {
    id: "03",
    title: "SchemaLens",
    subtitle: "DB Schema Visualizer & Query Optimizer",
    desc: "D3 force-directed graph for database schemas with query optimization hints. CodeMirror 6 editor, Zustand state, node-sql-parser, and Gemini API under the hood.",
    tags: ["React", "D3.js", "Gemini API", "Zustand", "CodeMirror 6"],
    accent: "#00f0ff",
    github: "https://github.com/AteebHussain/Schema-Lens",
    live: "https://schemalens-omega.vercel.app/",
    featured: true,
  },
  {
    id: "04",
    title: "IronWatch",
    subtitle: "Real-Time Industrial Yard Monitor",
    desc: "Three.js 3D yard visualization with Socket.io telemetry, a simulation engine, RBAC, and historical playback. Next.js 14 + Azure SQL + Prisma. Hard constraint: everything free.",
    tags: ["Next.js 14", "Three.js", "Socket.io", "Prisma", "Azure SQL"],
    accent: "#76b900",
    github: "https://github.com/AteebHussain/Iron-Watch",
    live: null,
    featured: false,
  },
];

const Projects = () => {
  useEffect(() => { AOS.init({ duration: 900, once: true }); }, []);

  const featured = PROJECTS.filter(p => p.featured);
  const others = PROJECTS.filter(p => !p.featured);

  return (
    <>
      <style>{`
        .project-card {
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.02);
          backdrop-filter: blur(8px);
          transition: all 0.35s ease;
          position: relative;
          overflow: hidden;
        }
        .project-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1px;
          background: var(--accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }
        .project-card:hover::after { transform: scaleX(1); }
        .project-card:hover {
          border-color: rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.03);
          transform: translateY(-3px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.4);
        }
        .project-number {
          font-size: 5rem;
          font-weight: 900;
          font-family: monospace;
          line-height: 1;
          opacity: 0.04;
          position: absolute;
          bottom: 1rem; right: 1.5rem;
          pointer-events: none;
          user-select: none;
          transition: opacity 0.3s ease;
        }
        .project-card:hover .project-number { opacity: 0.08; }
        .tag-chip {
          font-family: monospace;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 3px 8px;
          border-radius: 2px;
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.45);
          background: rgba(255,255,255,0.04);
          white-space: nowrap;
        }
        .icon-btn {
          width: 36px; height: 36px;
          border-radius: 4px;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.4);
          transition: all 0.2s ease;
        }
        .icon-btn:hover {
          border-color: var(--accent);
          color: var(--accent);
        }
        .mini-card {
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.02);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .mini-card:hover {
          border-color: rgba(255,255,255,0.1);
          transform: translateY(-2px);
        }
        .mini-accent-line {
          width: 2px;
          position: absolute;
          left: 0; top: 0; bottom: 0;
          background: var(--accent);
        }
      `}</style>

      <div id="projects" className="py-28 px-8 md:px-16 bg-cyber-black">
        <div className="max-w-7xl mx-auto">

          <div data-aos="fade-up" className="flex items-center gap-4 mb-16">
            <div className="h-px w-14 bg-white/5" />
            <span className="text-cyber-red font-mono text-xs uppercase tracking-[0.3em]">03 // Projects</span>
            <div className="h-px flex-1 bg-white/5" />
          </div>

          <div className="flex flex-col lg:flex-row gap-10 items-start mb-14" data-aos="fade-up" data-aos-delay="50">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-tight flex-shrink-0">
              Things I've<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-red to-cyber-yellow">shipped.</span>
            </h2>
            <p className="text-white/40 text-sm leading-relaxed max-w-md mt-2">
              Personal projects built for real problems — not tutorials. Each one explores a different part of the stack
              or a technology I wanted to understand from the inside out.
            </p>
          </div>

          {/* Featured 3-col */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            {featured.map((p, i) => (
              <div
                key={p.id}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className="project-card rounded-sm p-7 group"
                style={{ "--accent": p.accent }}
              >
                <div className="project-number">{p.id}</div>
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest mb-1 block" style={{ color: p.accent }}>
                      {p.subtitle}
                    </span>
                    <h3 className="text-xl font-black tracking-tighter text-white">{p.title}</h3>
                  </div>
                  <div className="flex gap-2">
                    <a href={p.github} target="_blank" rel="noreferrer" className="icon-btn" title="GitHub"><GithubLogo size={16} /></a>
                    {p.live ? (
                      <a href={p.live} target="_blank" rel="noreferrer" className="icon-btn" title="Live"><ArrowSquareOut size={16} /></a>
                    ) : (
                      <span className="font-mono text-[9px] uppercase tracking-widest px-2 py-1 rounded-sm border border-white/10 text-white/30">WIP</span>
                    )}
                  </div>
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t, j) => <span key={j} className="tag-chip">{t}</span>)}
                </div>
              </div>
            ))}
          </div>

          {/* Others — compact */}
          {others.map((p, i) => (
            <div
              key={p.id}
              data-aos="fade-up"
              data-aos-delay={i * 60}
              className="mini-card rounded-sm p-5 mb-3"
              style={{ "--accent": p.accent }}
            >
              <div className="mini-accent-line" />
              <div className="pl-4 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: p.accent }}>{p.id}</span>
                    <h3 className="text-base font-black tracking-tighter text-white">{p.title}</h3>
<span className="text-white/30 font-mono text-[10px] hidden md:block">{"// "}{p.subtitle}</span>
                  </div>
                  <p className="text-white/40 text-xs leading-relaxed line-clamp-1">{p.desc}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 flex-shrink-0">
                  {p.tags.slice(0, 3).map((t, j) => <span key={j} className="tag-chip">{t}</span>)}
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <a href={p.github} target="_blank" rel="noreferrer" className="icon-btn"><GithubLogo size={15} /></a>
                  {p.live ? (
                    <a href={p.live} target="_blank" rel="noreferrer" className="icon-btn"><ArrowSquareOut size={15} /></a>
                  ) : (
                    <span className="font-mono text-[9px] uppercase tracking-widest px-2 py-1 rounded-sm border border-white/10 text-white/30">WIP</span>
                  )}
                </div>
              </div>
            </div>
          ))}



        </div>
      </div>
    </>
  );
};

export default Projects;