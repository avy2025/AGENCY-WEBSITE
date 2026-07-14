import Button from '../../../components/Button/Button';
import { useLanguage } from '../../../context/LanguageContext';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className={styles.hero} aria-label={t('hero.eyebrow')}>
      {/* Background gradient blob */}
      <div className={styles.blob1} aria-hidden="true" />
      <div className={styles.blob2} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        {/* Left Content */}
        <div className={styles.content}>
          <span className={`text-label-caps ${styles.eyebrow}`}>
            {t('hero.eyebrow')}
          </span>

          <h1 className={`text-display ${styles.headline}`}>
            {t('hero.headline')}
            <br />
            <em className={styles.headlineItalic}>{t('hero.headlineItalic')}</em>
            <br />
            {t('hero.headlineEnd')}
          </h1>

          <p className={`text-body-lg ${styles.subtext}`}>
            {t('hero.subtext')}
          </p>

          <div className={styles.actions}>
            <Button as="link" to="/collections" variant="primary" size="lg" icon="→">
              {t('hero.btnExplore')}
            </Button>
            <Button as="link" to="/showroom" variant="secondary" size="lg">
              {t('hero.btnVisit')}
            </Button>
          </div>

          <div className={styles.trust}>
            <div className={styles.trustBadge}>
              <span className={styles.trustValue}>25+</span>
              <span className={styles.trustLabel}>{t('hero.yearsTrust')}</span>
            </div>
            <div className={styles.trustDivider} aria-hidden="true" />
            <div className={styles.trustBadge}>
              <span className={styles.trustValue}>100%</span>
              <span className={styles.trustLabel}>{t('hero.genuineProd')}</span>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className={styles.visual} aria-hidden="true">
          <div className={styles.imageGrid}>
            <div className={`${styles.imageCard} ${styles.imageCardLarge}`}>
              <div className={styles.imagePlaceholder} style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1552321554-5fecd8c7856a?auto=format&fit=crop&w=800&q=80")' }}>
                <span className={styles.imageLabel}>{t('collections.cat.bathTiles')}</span>
              </div>
            </div>
            <div className={styles.imageColumn}>
              <div className={`${styles.imageCard} ${styles.imageCardSmall}`}>
                <div className={styles.imagePlaceholder} style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80")' }}>
                  <span className={styles.imageLabel}>{t('categories.taps.title')}</span>
                </div>
              </div>
              <div className={`${styles.imageCard} ${styles.imageCardSmall}`}>
                <div className={styles.imagePlaceholder} style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80")' }}>
                  <span className={styles.imageLabel}>{t('categories.wallTiles.title')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating glass card */}
          <div className={styles.glassCard}>
            <div className={styles.glassCardIcon}>✦</div>
            <div>
              <p className={styles.glassCardTitle}>{t('hero.fiveStar')}</p>
              <p className={styles.glassCardSub}>{t('hero.premiumShowroom')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollLine}></div>
        <span className={styles.scrollText}>{t('hero.scrollText')}</span>
      </div>
    </section>
  );
}
