import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Code, AppWindow, Database, Lightning, Heart } from "@phosphor-icons/react";

const Skills = () => {
  useEffect(() => { AOS.init({ duration: 900, once: true }); }, []);

  return (
    <>
      <style>{`
        .bento-card {
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.025);
          backdrop-filter: blur(12px);
          border-radius: 4px;
          transition: border-color 0.3s ease, transform 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .bento-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: var(--accent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .bento-card:hover::before { opacity: 1; }
        .bento-card:hover {
          border-color: rgba(255,255,255,0.1);
          transform: translateY(-2px);
        }
        .skill-tag {
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          font-family: monospace;
          font-size: 11px;
          color: rgba(255,255,255,0.6);
          padding: 4px 10px;
          border-radius: 2px;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .skill-tag:hover {
          border-color: var(--accent-30);
          color: var(--accent);
          background: var(--accent-08);
        }
        .bento-icon-wrap {
          width: 40px; height: 40px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 4px;
          margin-bottom: 12px;
        }
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }
        @media (max-width: 1024px) { .bento-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .bento-grid { grid-template-columns: 1fr; } }
        .span-1 { grid-column: span 1; }
        .span-2 { grid-column: span 2; }
      `}</style>

      <div id="skills" className="py-28 px-8 md:px-16 bg-cyber-black">
        <div className="max-w-7xl mx-auto">

          <div data-aos="fade-up" className="flex items-center gap-4 mb-16">
            <div className="h-px w-14 bg-white/5" />
            <span className="text-cyber-yellow font-mono text-xs uppercase tracking-[0.3em]">02 // Skills</span>
            <div className="h-px flex-1 bg-white/5" />
          </div>

          <div className="flex flex-col lg:flex-row gap-10 items-start mb-12" data-aos="fade-up" data-aos-delay="50">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-tight flex-shrink-0">
              What I work<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-yellow to-cyber-red">with.</span>
            </h2>
            <p className="text-white/40 text-sm leading-relaxed max-w-md mt-2">
              A mix of enterprise-grade backend work, modern frontend stacks, and specialized simulation tooling.
              Updated to reflect actual day-to-day at TCE and personal projects.
            </p>
          </div>

          <div className="bento-grid">

            {/* Languages — span 1 */}
            <div data-aos="zoom-in" data-aos-delay="0" className="bento-card span-1 p-6"
              style={{ "--accent": "#F7BB2E", "--accent-30": "rgba(247,187,46,0.3)", "--accent-08": "rgba(247,187,46,0.08)" }}>
              <div className="bento-icon-wrap" style={{ background: "rgba(247,187,46,0.1)" }}>
                <Code size={20} style={{ color: "#F7BB2E" }} />
              </div>
              <h3 className="font-black text-white text-sm uppercase tracking-widest mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["C#", "JavaScript", "TypeScript", "Python", "C++"].map((s, i) => (
                  <span key={i} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>

            {/* Frameworks — span 2 */}
            <div data-aos="zoom-in" data-aos-delay="60" className="bento-card span-2 p-6"
              style={{ "--accent": "#E14842", "--accent-30": "rgba(225,72,66,0.3)", "--accent-08": "rgba(225,72,66,0.08)" }}>
              <div className="bento-icon-wrap" style={{ background: "rgba(225,72,66,0.1)" }}>
                <AppWindow size={20} style={{ color: "#E14842" }} />
              </div>
              <h3 className="font-black text-white text-sm uppercase tracking-widest mb-4">Frameworks & UI</h3>
              <div className="flex flex-wrap gap-2">
                {["ASP.NET Core MVC", "React", "Next.js", "Blazor", "Radzen", "Express.js", "Tailwind CSS", "Shadcn UI", "Framer Motion"].map((s, i) => (
                  <span key={i} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>

            {/* Sim & Tools — span 1 */}
            <div data-aos="zoom-in" data-aos-delay="120" className="bento-card span-1 p-6"
              style={{ "--accent": "#76b900", "--accent-30": "rgba(118,185,0,0.3)", "--accent-08": "rgba(118,185,0,0.08)" }}>
              <div className="bento-icon-wrap" style={{ background: "rgba(118,185,0,0.1)" }}>
                <Lightning size={20} style={{ color: "#76b900" }} />
              </div>
              <h3 className="font-black text-white text-sm uppercase tracking-widest mb-4">Sim & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["NVIDIA Isaac Sim", "Git / GitHub", "Docker", "Vercel", "Render", "Postman"].map((s, i) => (
                  <span key={i} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>

            {/* Data & Cloud — span 2 */}
            <div data-aos="zoom-in" data-aos-delay="80" className="bento-card span-2 p-6"
              style={{ "--accent": "#00f0ff", "--accent-30": "rgba(0,240,255,0.3)", "--accent-08": "rgba(0,240,255,0.08)" }}>
              <div className="bento-icon-wrap" style={{ background: "rgba(0,240,255,0.08)" }}>
                <Database size={20} style={{ color: "#00f0ff" }} />
              </div>
              <h3 className="font-black text-white text-sm uppercase tracking-widest mb-4">Data & Cloud</h3>
              <div className="flex flex-wrap gap-2">
                {["SQL Server", "Azure", "MongoDB", "Entity Framework", "Prisma", "OpenRouter API", "Gemini API"].map((s, i) => (
                  <span key={i} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>

            {/* Interests — span 2 */}
            <div data-aos="zoom-in" data-aos-delay="140" className="bento-card span-2 p-6"
              style={{ "--accent": "#ff6b9d", "--accent-30": "rgba(255,107,157,0.3)", "--accent-08": "rgba(255,107,157,0.08)" }}>
              <div className="bento-icon-wrap" style={{ background: "rgba(255,107,157,0.1)" }}>
                <Heart size={20} style={{ color: "#ff6b9d" }} />
              </div>
              <h3 className="font-black text-white text-sm uppercase tracking-widest mb-4">Beyond Code</h3>
              <div className="flex flex-wrap gap-2">
                {["AI / LLMs", "Digital Twins", "Space & Cosmos", "Formula 1", "Photography", "Fitness", "Product Design"].map((s, i) => (
                  <span key={i} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;