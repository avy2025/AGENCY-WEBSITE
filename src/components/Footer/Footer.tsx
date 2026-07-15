import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useLanguage();

  const productLinks = [
    { label: t('brand.links.sinks'), to: '/collections' },
    { label: t('brand.links.wallTiles'), to: '/collections' },
    { label: t('brand.links.bathTiles'), to: '/collections' },
    { label: t('brand.links.taps'), to: '/collections' },
  ];

  const legalLinks = [
    { label: t('brand.links.privacy'), to: '#' },
    { label: t('brand.links.terms'), to: '#' },
  ];

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        {/* Brand Column */}
        <div className={styles.brandCol}>
          <div className={styles.logo}>
            <span className={styles.logoMark}>✦</span>
            <span className={styles.logoText}>{t('brand.name')}</span>
          </div>
          <p className={styles.tagline}>
            {t('brand.tagline')}
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
          <h3 className={styles.colHeading}>{t('brand.columns.products')}</h3>
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
          <h3 className={styles.colHeading}>{t('brand.columns.explore')}</h3>
          <ul className={styles.linkList}>
            <li><Link to="/" className={styles.footerLink}>{t('nav.home')}</Link></li>
            <li><Link to="/collections" className={styles.footerLink}>{t('nav.collections')}</Link></li>
            <li><Link to="/gallery" className={styles.footerLink}>{t('nav.gallery')}</Link></li>
            <li><Link to="/showroom" className={styles.footerLink}>{t('nav.contact')}</Link></li>
          </ul>
        </div>

        {/* Newsletter / Legal Column */}
        <div className={styles.linksCol}>
          <h3 className={styles.colHeading}>Newsletter</h3>
          <p className={styles.newsletterText}>Subscribe to get the latest updates and exclusive offers.</p>
          <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email address" className={styles.newsletterInput} required />
            <button type="submit" className={styles.newsletterBtn}>→</button>
          </form>
          <ul className={styles.linkList} style={{ marginTop: '20px' }}>
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
            © {new Date().getFullYear()} {t('brand.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
