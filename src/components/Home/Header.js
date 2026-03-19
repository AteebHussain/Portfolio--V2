import { useState, useEffect } from "react";
import { GithubLogo, LinkedinLogo, List, X } from "@phosphor-icons/react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["about", "skills", "projects", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        .header-root { transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease; }
        .header-root.scrolled {
          background: rgba(11,14,22,0.92);
          border-bottom: 1px solid rgba(225,72,66,0.15);
          box-shadow: 0 4px 32px rgba(0,0,0,0.5);
          backdrop-filter: blur(16px);
        }
        .nav-link {
          font-family: monospace;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.4);
          padding: 6px 0;
          position: relative;
          transition: color 0.2s ease;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1px;
          background: #F7BB2E;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }
        .nav-link:hover, .nav-link.active { color: rgba(255,255,255,0.9); }
        .nav-link.active::after, .nav-link:hover::after { transform: scaleX(1); }
        .resume-btn {
          font-family: monospace;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          border: 1px solid #F7BB2E;
          color: #F7BB2E;
          padding: 7px 16px;
          border-radius: 2px;
          transition: all 0.25s ease;
        }
        .resume-btn:hover {
          background: #F7BB2E;
          color: #0B0E16;
          box-shadow: 0 0 20px rgba(247,187,46,0.3);
        }
        .social-icon { color: rgba(255,255,255,0.35); transition: color 0.2s ease, transform 0.2s ease; }
        .social-icon:hover { color: rgba(255,255,255,0.8); transform: scale(1.1); }
        .logo-dot {
          display: inline-block;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #E14842;
          margin-left: 3px;
          animation: dot-pulse 2s ease-in-out infinite;
          vertical-align: middle;
          margin-bottom: 2px;
        }
        @keyframes dot-pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(225,72,66,0.4); }
          50% { opacity: 0.7; box-shadow: 0 0 0 5px rgba(225,72,66,0); }
        }
        .mobile-menu {
          position: fixed; inset: 0;
          background: rgba(11,14,22,0.98);
          backdrop-filter: blur(20px);
          z-index: 40;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 32px;
        }
        .mobile-nav-link {
          font-family: monospace;
          font-size: 2rem; font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: rgba(255,255,255,0.5);
          transition: color 0.2s ease;
        }
        .mobile-nav-link:hover { color: #F7BB2E; }
      `}</style>

      {menuOpen && (
        <div className="mobile-menu">
          <button onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-8 text-white/50 hover:text-white">
            <X size={28} />
          </button>
          {NAV_ITEMS.map((item, i) => (
            <a key={i} href={item.href} className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
              <span className="text-cyber-red text-base mr-2 font-mono">0{i + 1}.</span>
              {item.label}
            </a>
          ))}
          <a href="/Resume.pdf" target="_blank" className="resume-btn mt-4">Resume</a>
        </div>
      )}

      <header className={`header-root sticky top-0 z-50 w-full px-8 md:px-16 py-5 flex items-center justify-between ${scrolled ? "scrolled" : ""}`}>
<a href="/" className="flex items-center gap-3">
          <img src="/img/A-removebg-preview.png" alt="Logo" className="h-9 w-9 object-contain filter brightness-110" />
          <span className="font-black text-lg tracking-tighter text-white hidden sm:block">
            ATEEB<span className="logo-dot" />
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item, i) => (
            <a key={i} href={item.href} className={`nav-link ${active === item.href ? "active" : ""}`}>
              <span className="text-cyber-red text-[9px] mr-1">0{i + 1}.</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon">
              <GithubLogo size={20} weight="fill" />
            </a>
            <a href="https://www.linkedin.com/in/syed-ateeb-359867225/" target="_blank" rel="noreferrer" className="social-icon">
              <LinkedinLogo size={20} weight="fill" />
            </a>
          </div>
          <a href="/Resume.pdf" target="_blank" className="resume-btn hidden md:block">Resume</a>
          <button className="md:hidden text-white/50 hover:text-white" onClick={() => setMenuOpen(true)}>
            <List size={24} />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;