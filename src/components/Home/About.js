import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MapPin, Briefcase, GraduationCap, Sparkle } from "@phosphor-icons/react";

const FACTS = [
  { icon: <Briefcase size={14} />, label: "Senior SWE @ Tata Consulting Engineers" },
  { icon: <GraduationCap size={14} />, label: "B.Tech — NIT Jamshedpur" },
  { icon: <MapPin size={14} />, label: "Based in India" },
  { icon: <Sparkle size={14} />, label: "Interested in AI, Sim, Space & F1" },
];

const STACK = [
  { name: "C# / .NET", pct: 88 },
  { name: "React / Next.js", pct: 85 },
  { name: "Python", pct: 75 },
  { name: "NVIDIA Isaac Sim", pct: 72 },
  { name: "SQL Server / Azure", pct: 80 },
];

const About = () => {
  useEffect(() => { AOS.init({ duration: 900, once: true }); }, []);

  return (
    <>
      <style>{`
        .about-photo-frame {
          position: relative;
        }
        .about-photo-frame::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, #E14842, transparent 50%, #F7BB2E);
          border-radius: 4px;
          z-index: 0;
        }
        .about-photo-inner {
          position: relative;
          z-index: 1;
          border-radius: 3px;
          overflow: hidden;
        }
        .skill-bar-track {
          height: 2px;
          background: rgba(255,255,255,0.06);
          border-radius: 2px;
          overflow: hidden;
        }
        .skill-bar-fill {
          height: 100%;
          border-radius: 2px;
          background: linear-gradient(90deg, #E14842, #F7BB2E);
          transform-origin: left;
          animation: bar-in 1.2s ease forwards;
          transform: scaleX(0);
        }
        @keyframes bar-in { to { transform: scaleX(1); } }
        .fact-pill {
          border: 1px solid rgba(225,72,66,0.15);
          background: rgba(225,72,66,0.04);
          transition: all 0.25s ease;
        }
        .fact-pill:hover {
          border-color: rgba(247,187,46,0.3);
          background: rgba(247,187,46,0.05);
        }
      `}</style>

      <div id="about" className="py-28 px-8 md:px-16 bg-cyber-black">
        <div className="max-w-7xl mx-auto">

          <div data-aos="fade-up" className="flex items-center gap-4 mb-16">
            <div className="h-px w-14 bg-white/5" />
            <span className="text-cyber-red font-mono text-xs uppercase tracking-[0.3em]">01 // About Me</span>
            <div className="h-px flex-1 bg-white/5" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 items-start">

            {/* LEFT */}
            <div>
              <div data-aos="fade-up" data-aos-delay="50" className="mb-8">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-tight mb-4">
                  I build things that{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-red to-cyber-yellow">
                    live on machines.
                  </span>
                </h2>
                <p className="text-white/50 leading-relaxed max-w-xl text-sm md:text-base">
                  Started with web dev in 2021 out of curiosity. Ended up at a major engineering firm building
                  digital twin systems with NVIDIA Isaac Sim, enterprise dashboards, and modern full-stack products.
                  I care about design, performance, and not building things that already exist.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="100" className="flex flex-wrap gap-2 mb-12">
                {FACTS.map((f, i) => (
                  <div key={i} className="fact-pill flex items-center gap-2 px-3 py-2 rounded-sm">
                    <span className="text-cyber-red">{f.icon}</span>
                    <span className="text-white/60 font-mono text-xs">{f.label}</span>
                  </div>
                ))}
              </div>

              <div data-aos="fade-up" data-aos-delay="150">
                <p className="text-white/25 font-mono text-[10px] uppercase tracking-[0.3em] mb-6">Primary Stack</p>
                <div className="space-y-5">
                  {STACK.map((s, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="font-mono text-xs text-white/60">{s.name}</span>
                        <span className="font-mono text-[10px] text-white/25">{s.pct}%</span>
                      </div>
                      <div className="skill-bar-track">
                        <div
                          className="skill-bar-fill"
                          style={{ width: `${s.pct}%`, animationDelay: `${i * 0.1}s` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — Photo */}
            <div data-aos="fade-left" data-aos-delay="200" className="relative">
              <div className="absolute -top-3 -left-3 w-full h-full border border-cyber-red/15 rounded-sm pointer-events-none z-0" />
              <div className="about-photo-frame">
                <div className="about-photo-inner">
                  <img
                    src="/img/20220810_213711.jpg"
                    alt="Syed Ateeb"
                    className="w-full object-cover aspect-[3/4]"
                    style={{ filter: "grayscale(40%) contrast(1.05)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/80 via-transparent to-transparent" />
                </div>
              </div>
              <div className="absolute -right-4 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-cyber-yellow/30 to-transparent" />
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default About;