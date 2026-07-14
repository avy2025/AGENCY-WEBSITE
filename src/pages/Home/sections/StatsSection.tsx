import { useLanguage } from '../../../context/LanguageContext';
import styles from './StatsSection.module.css';

export default function StatsSection() {
  const { t } = useLanguage();

  const stats = [
    { value: '25+', label: t('stats.experience.label'), desc: t('stats.experience.desc') },
    { value: '100%', label: t('stats.genuine.label'), desc: t('stats.genuine.desc') },
    { value: '500+', label: t('stats.products.label'), desc: t('stats.products.desc') },
    { value: '10K+', label: t('stats.clients.label'), desc: t('stats.clients.desc') },
  ];

  return (
    <section className={`section ${styles.stats}`} aria-label={t('hero.yearsTrust')}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal reveal-delay-${i + 1} ${styles.card}`}
            >
              <p className={styles.value}>{stat.value}</p>
              <p className={styles.label}>{stat.label}</p>
              <p className={styles.desc}>{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
