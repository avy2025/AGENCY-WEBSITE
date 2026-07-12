import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const productLinks = [
  { label: 'Kitchen Sinks', to: '/collections' },
  { label: 'Wall Tiles', to: '/collections' },
  { label: 'Bathroom Tiles', to: '/collections' },
  { label: 'Designer Taps', to: '/collections' },
];

const legalLinks = [
  { label: 'Privacy Policy', to: '#' },
  { label: 'Terms of Service', to: '#' },
];

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        {/* Brand Column */}
        <div className={styles.brandCol}>
          <div className={styles.logo}>
            <span className={styles.logoMark}>✦</span>
            <span className={styles.logoText}>MAA BHAWANI</span>
          </div>
          <p className={styles.tagline}>
            Architectural Luxury Defined. The premier destination for premium tiles,
            sanitary ware, and bathroom solutions.
          </p>
          <div className={styles.contact}>
            <a href="tel:6299468583" className={styles.contactLink}>
              📞 +91 6299468583
            </a>
            <a href="mailto:pankajraj140397@gmail.com" className={styles.contactLink}>
              ✉ pankajraj140397@gmail.com
            </a>
          </div>
        </div>

        {/* Products Column */}
        <div className={styles.linksCol}>
          <h3 className={styles.colHeading}>Products</h3>
          <ul className={styles.linkList}>
            {productLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className={styles.footerLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links Column */}
        <div className={styles.linksCol}>
          <h3 className={styles.colHeading}>Explore</h3>
          <ul className={styles.linkList}>
            <li><Link to="/" className={styles.footerLink}>Home</Link></li>
            <li><Link to="/collections" className={styles.footerLink}>Collections</Link></li>
            <li><Link to="/gallery" className={styles.footerLink}>Gallery</Link></li>
            <li><Link to="/showroom" className={styles.footerLink}>Visit Showroom</Link></li>
          </ul>
        </div>

        {/* Legal Column */}
        <div className={styles.linksCol}>
          <h3 className={styles.colHeading}>Legal</h3>
          <ul className={styles.linkList}>
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className={styles.footerLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className="container">
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Maa Bhawani Agencies. Architectural Luxury Defined.
          </p>
        </div>
      </div>
    </footer>
  );
}
