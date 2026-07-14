import { useLanguage } from '../../../context/LanguageContext';
import styles from './FeaturesSection.module.css';

export default function FeaturesSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: '◆',
      title: t('features.brands.title'),
      description: t('features.brands.desc'),
    },
    {
      icon: '✓',
      title: t('features.genuine.title'),
      description: t('features.genuine.desc'),
    },
    {
      icon: '◎',
      title: t('features.pricing.title'),
      description: t('features.pricing.desc'),
    },
    {
      icon: '✦',
      title: t('features.consultation.title'),
      description: t('features.consultation.desc'),
    },
  ];

  return (
    <section className={`section ${styles.features}`} aria-labelledby="features-heading">
      <div className="container">
        {/* Header */}
        <div className={`reveal ${styles.header}`}>
          <span className="section-label">{t('features.eyebrow')}</span>
          <h2 id="features-heading" className={`text-headline-lg ${styles.heading}`}>
            {t('features.heading')}
          </h2>
          <p className={`text-body-lg ${styles.subtext}`}>
            {t('features.subtext')}
          </p>
        </div>

        {/* Feature cards grid */}
        <div className={styles.grid}>
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`reveal reveal-delay-${i + 1} ${styles.card}`}
            >
              <div className={styles.iconWrapper} aria-hidden="true">
                <span className={styles.icon}>{feature.icon}</span>
              </div>
              <h3 className={`text-headline-sm ${styles.cardTitle}`}>{feature.title}</h3>
              <p className={`text-body-md ${styles.cardDesc}`}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
