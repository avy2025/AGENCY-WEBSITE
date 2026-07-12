import Button from '../../../components/Button/Button';
import styles from './CtaBanner.module.css';

export default function CtaBanner() {
  return (
    <section className={styles.cta} aria-labelledby="cta-heading">
      <div className={`container ${styles.inner}`}>
        <div className={`reveal ${styles.content}`}>
          <span className="section-label" style={{ color: 'rgba(150,206,235,0.9)' }}>
            Experience the Difference
          </span>
          <h2 id="cta-heading" className={`text-headline-lg ${styles.heading}`}>
            Visit Our Luxury Showroom
          </h2>
          <p className={`text-body-lg ${styles.subtext}`}>
            Step into a curated world of premium tiles, fittings, and architectural luxury.
            Our expert team is ready to bring your vision to life.
          </p>
          <div className={styles.actions}>
            <Button as="link" to="/showroom" variant="glass" size="lg">
              Book a Consultation
            </Button>
            <Button as="link" to="/gallery" variant="secondary" size="lg">
              Browse Gallery
            </Button>
          </div>
        </div>
        {/* Decorative grid pattern */}
        <div className={styles.pattern} aria-hidden="true">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className={styles.patternTile} />
          ))}
        </div>
      </div>
    </section>
  );
}
