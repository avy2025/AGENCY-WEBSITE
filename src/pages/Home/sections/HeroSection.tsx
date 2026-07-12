import Button from '../../../components/Button/Button';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero} aria-label="Hero">
      {/* Background gradient blob */}
      <div className={styles.blob1} aria-hidden="true" />
      <div className={styles.blob2} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        {/* Left Content */}
        <div className={styles.content}>
          <span className={`text-label-caps ${styles.eyebrow}`}>
            ✦ Premium Luxury Showroom
          </span>

          <h1 className={`text-display ${styles.headline}`}>
            Architectural
            <br />
            <em className={styles.headlineItalic}>Luxury</em>
            <br />
            Defined
          </h1>

          <p className={`text-body-lg ${styles.subtext}`}>
            Premium Tiles, Sanitary Ware &amp; Bathroom Solutions Under One Roof.
            Experience tactile quality and pristine elegance for your next architectural project.
          </p>

          <div className={styles.actions}>
            <Button as="link" to="/collections" variant="primary" size="lg" icon="→">
              Explore Products
            </Button>
            <Button as="link" to="/showroom" variant="secondary" size="lg">
              Visit Store
            </Button>
          </div>

          <div className={styles.trust}>
            <div className={styles.trustBadge}>
              <span className={styles.trustValue}>25+</span>
              <span className={styles.trustLabel}>Years of Trust</span>
            </div>
            <div className={styles.trustDivider} aria-hidden="true" />
            <div className={styles.trustBadge}>
              <span className={styles.trustValue}>100%</span>
              <span className={styles.trustLabel}>Genuine Products</span>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className={styles.visual} aria-hidden="true">
          <div className={styles.imageGrid}>
            <div className={`${styles.imageCard} ${styles.imageCardLarge}`}>
              <div className={styles.imagePlaceholder} style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1552321554-5fecd8c7856a?auto=format&fit=crop&w=800&q=80")' }}>
                <span className={styles.imageLabel}>Luxury Bathrooms</span>
              </div>
            </div>
            <div className={styles.imageColumn}>
              <div className={`${styles.imageCard} ${styles.imageCardSmall}`}>
                <div className={styles.imagePlaceholder} style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80")' }}>
                  <span className={styles.imageLabel}>Designer Taps</span>
                </div>
              </div>
              <div className={`${styles.imageCard} ${styles.imageCardSmall}`}>
                <div className={styles.imagePlaceholder} style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80")' }}>
                  <span className={styles.imageLabel}>Premium Tiles</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating glass card */}
          <div className={styles.glassCard}>
            <div className={styles.glassCardIcon}>✦</div>
            <div>
              <p className={styles.glassCardTitle}>5-Star Rated</p>
              <p className={styles.glassCardSub}>Premium Showroom</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollLine}></div>
        <span className={styles.scrollText}>Scroll to explore</span>
      </div>
    </section>
  );
}
