import { useState, useEffect, useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Collections', to: '/collections' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/showroom' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <>
      <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`} role="banner">
        <div className={`container ${styles.inner}`}>
          {/* Logo */}
          <Link to="/" className={styles.logo} aria-label="Maa Bhawani - Home">
            <span className={styles.logoMark}>✦</span>
            <span className={styles.logoText}>MAA BHAWANI</span>
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav} aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className={styles.actions}>
            <Link to="/showroom" className={styles.ctaBtn}>
              Enquire Now
            </Link>
            <button
              className={styles.hamburger}
              onClick={() => setIsMenuOpen((o) => !o)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle mobile menu"
            >
              <span className={`${styles.bar} ${isMenuOpen ? styles.barOpen1 : ''}`} />
              <span className={`${styles.bar} ${isMenuOpen ? styles.barOpen2 : ''}`} />
              <span className={`${styles.bar} ${isMenuOpen ? styles.barOpen3 : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`${styles.mobileOverlay} ${isMenuOpen ? styles.mobileOverlayOpen : ''}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />
      <nav
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
      >
        <div className={styles.mobileMenuInner}>
          {navLinks.map((link, i) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`
              }
              style={{ transitionDelay: `${i * 0.07}s` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/showroom"
            className={styles.mobileCta}
            onClick={() => setIsMenuOpen(false)}
            style={{ transitionDelay: `${navLinks.length * 0.07}s` }}
          >
            Enquire Now
          </Link>
        </div>
      </nav>
    </>
  );
}
