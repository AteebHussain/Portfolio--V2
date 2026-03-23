import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { InstagramLogo, LinkedinLogo, GithubLogo, ArrowRight } from "@phosphor-icons/react";

const SOCIALS = [
  { icon: <GithubLogo size={20} />, href: "https://github.com/AteebHussain", label: "GitHub" },
  { icon: <LinkedinLogo size={20} />, href: "https://www.linkedin.com/in/syed-ateeb-401358295/", label: "LinkedIn" },
  { icon: <InstagramLogo size={20} />, href: "https://www.instagram.com/ateeeeeeeb_/?hl=en", label: "Instagram" },
];

const Contact = () => {
  useEffect(() => { AOS.init({ duration: 900, once: true }); }, []);

  return (
    <>
      <style>{`
        .contact-section { position: relative; overflow: hidden; }
        .contact-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(225,72,66,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(225,72,66,0.06) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
          opacity: 0.4;
        }
        .contact-glow {
          position: absolute;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(225,72,66,0.06) 0%, transparent 70%);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
        .say-hello-btn {
          position: relative;
          display: inline-flex; align-items: center; gap: 10px;
          padding: 16px 40px;
          border: 2px solid #F7BB2E;
          color: #F7BB2E;
          font-weight: 900;
          font-family: monospace;
          font-size: 13px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          border-radius: 2px;
          background: transparent;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        .say-hello-btn::before {
          content: '';
          position: absolute; inset: 0;
          background: #F7BB2E;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
          z-index: 0;
        }
        .say-hello-btn:hover::before { transform: scaleX(1); }
        .say-hello-btn:hover { color: #0B0E16; box-shadow: 0 0 40px rgba(247,187,46,0.35); }
        .say-hello-btn span, .say-hello-btn svg { position: relative; z-index: 1; }
        .social-link {
          display: flex; flex-direction: column; align-items: center; gap: 6px;
          color: rgba(255,255,255,0.25);
          transition: all 0.25s ease;
          padding: 12px 16px;
          border-radius: 4px;
          border: 1px solid transparent;
        }
        .social-link:hover {
          color: #F7BB2E;
          border-color: rgba(247,187,46,0.2);
          background: rgba(247,187,46,0.05);
          transform: translateY(-3px);
        }
        .divider-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent);
        }
        .corner { position: absolute; width: 36px; height: 36px; }
        .corner-tl { top: 2rem; left: 2rem; border-top: 1px solid rgba(225,72,66,0.2); border-left: 1px solid rgba(225,72,66,0.2); }
        .corner-tr { top: 2rem; right: 2rem; border-top: 1px solid rgba(225,72,66,0.2); border-right: 1px solid rgba(225,72,66,0.2); }
        .corner-bl { bottom: 2rem; left: 2rem; border-bottom: 1px solid rgba(225,72,66,0.2); border-left: 1px solid rgba(225,72,66,0.2); }
        .corner-br { bottom: 2rem; right: 2rem; border-bottom: 1px solid rgba(225,72,66,0.2); border-right: 1px solid rgba(225,72,66,0.2); }
      `}</style>

      <div id="contact" className="contact-section py-32 px-8 md:px-16 bg-cyber-black border-t border-white/5">
        <div className="contact-grid" />
        <div className="contact-glow" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="corner corner-tl" />
          <div className="corner corner-tr" />
          <div className="corner corner-bl" />
          <div className="corner corner-br" />

          <div data-aos="fade-up" className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-white/10" />
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-cyber-red">04 // Contact</span>
            <div className="h-px w-12 bg-white/10" />
          </div>

          <div data-aos="fade-up" data-aos-delay="60" className="mb-6">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-none mb-2">
              Let's build
            </h2>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-red via-cyber-yellow to-cyber-red bg-[length:200%_100%] animate-[gradient-x_4s_ease_infinite]">
                something real.
              </span>
            </h2>
          </div>

          <p data-aos="fade-up" data-aos-delay="120"
            className="text-white/40 max-w-md mx-auto leading-relaxed mb-12 text-sm">
            Open to interesting projects, collaborations, and conversations. If you have something worth building — my inbox is open.
          </p>

          <div data-aos="fade-up" data-aos-delay="180" className="mb-16">
            <a href="mailto:syedateeb100@gmail.com" className="say-hello-btn">
              <span>SAY HELLO</span>
              <ArrowRight size={16} weight="bold" />
            </a>
          </div>

          <div data-aos="fade-up" data-aos-delay="240" className="divider-line mb-10" />

          <div data-aos="fade-up" data-aos-delay="300" className="flex items-center justify-center gap-2 flex-wrap">
            {SOCIALS.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noreferrer" className="social-link">
                {s.icon}
                <span className="font-mono text-[9px] uppercase tracking-[0.1em]">{s.label}</span>
              </a>
            ))}
          </div>

          <div data-aos="fade-up" data-aos-delay="360"
            className="mt-20 font-mono text-[10px] tracking-widest uppercase text-white/15">
            Designed & Built by Syed Ateeb © 2026
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;