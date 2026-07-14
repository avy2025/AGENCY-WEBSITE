import Button from '../../../components/Button/Button';
import { useLanguage } from '../../../context/LanguageContext';
import styles from './CtaBanner.module.css';

export default function CtaBanner() {
  const { t } = useLanguage();

  return (
    <section className={styles.cta} aria-labelledby="cta-heading">
      <div className={`container ${styles.inner}`}>
        <div className={`reveal ${styles.content}`}>
          <span className="section-label" style={{ color: 'rgba(150,206,235,0.9)' }}>
            {t('cta.eyebrow')}
          </span>
          <h2 id="cta-heading" className={`text-headline-lg ${styles.heading}`}>
            {t('cta.heading')}
          </h2>
          <p className={`text-body-lg ${styles.subtext}`}>
            {t('cta.subtext')}
          </p>
          <div className={styles.actions}>
            <Button as="link" to="/showroom" variant="glass" size="lg">
              {t('cta.btnConsultation')}
            </Button>
            <Button as="link" to="/gallery" variant="secondary" size="lg">
              {t('cta.btnGallery')}
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
