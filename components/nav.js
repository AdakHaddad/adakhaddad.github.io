import Link from "next/link";
import { useState } from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const socialLinks = [
    { href: "https://www.instagram.com/alhaddadmuqtada", icon: FaInstagram, label: "Instagram" },
    { href: "https://www.linkedin.com/in/muhammad-muqtada-alhaddad-b02b44195/", icon: FaLinkedin, label: "LinkedIn" },
    { href: "https://github.com/AdakHaddad", icon: FaGithub, label: "GitHub" },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-card border-x-0 border-t-0 rounded-none py-4 px-4 md:px-8">
      <div className="section-container flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <span className="text-2xl md:text-3xl font-bold">
              <span className="text-accent-400">Adak</span>
              <span className="text-white">Haddad</span>
            </span>
            <span className="text-2xl md:text-3xl font-bold gradient-text-primary group-hover:scale-110 transition-transform duration-300">
              &lt;/&gt;
            </span>
          </div>
        </Link>

        {/* Desktop Social Links */}
        <ul className="hidden md:flex items-center space-x-4">
          {socialLinks.map((social, index) => (
            <li key={index}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-primary-500/20 hover:border-primary-500/50 hover:glow-primary transition-all duration-300"
              >
                <social.icon className="text-lg" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white transition-all duration-300"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-white/10">
          <ul className="flex justify-center space-x-4">
            {socialLinks.map((social, index) => (
              <li key={index}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-primary-500/20 hover:border-primary-500/50 transition-all duration-300"
                >
                  <social.icon className="text-xl" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
