import { Link } from 'react-router-dom';
import { useLanguage } from '../../../context/LanguageContext';
import styles from './CategoriesSection.module.css';

export default function CategoriesSection() {
  const { t } = useLanguage();

  const categories = [
    {
      id: 'kitchen-sinks',
      title: t('categories.sinks.title'),
      subtitle: t('categories.sinks.subtitle'),
      tag: t('categories.tags.premium'),
      bg: 'url("https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=800&q=80")',
      span: 'wide',
    },
    {
      id: 'wall-tiles',
      title: t('categories.wallTiles.title'),
      subtitle: t('categories.wallTiles.subtitle'),
      tag: t('categories.tags.trending'),
      bg: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80")',
      span: 'normal',
    },
    {
      id: 'designer-taps',
      title: t('categories.taps.title'),
      subtitle: t('categories.taps.subtitle'),
      tag: t('categories.tags.luxury'),
      bg: 'url("https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80")',
      span: 'normal',
    },
    {
      id: 'bathroom-tiles',
      title: t('categories.bathTiles.title'),
      subtitle: t('categories.bathTiles.subtitle'),
      tag: t('categories.tags.new'),
      bg: 'url("https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80")',
      span: 'normal',
    },
    {
      id: 'wash-basins',
      title: t('categories.basins.title'),
      subtitle: t('categories.basins.subtitle'),
      tag: t('categories.tags.exclusive'),
      bg: 'url("https://images.unsplash.com/photo-1620626011160-9927f1370b55?auto=format&fit=crop&w=800&q=80")',
      span: 'normal',
    },
  ];

  return (
    <section className={`section ${styles.categories}`} aria-labelledby="categories-heading">
      <div className="container">
        <div className={`reveal ${styles.header}`}>
          <span className="section-label">{t('categories.eyebrow')}</span>
          <h2 id="categories-heading" className={`text-headline-lg ${styles.heading}`}>
            {t('categories.heading')}
          </h2>
        </div>

        <div className={styles.grid}>
          {categories.map((cat, i) => (
            <Link
              key={cat.id}
              to="/collections"
              className={`reveal reveal-delay-${(i % 4) + 1} ${styles.card} ${cat.span === 'wide' ? styles.wide : ''}`}
              aria-label={`Browse ${cat.title}`}
            >
              <div className={styles.cardBg} style={{ backgroundImage: cat.bg }} />
              <div className={styles.cardContent}>
                <span className={styles.tag}>{cat.tag}</span>
                <div className={styles.cardBottom}>
                  <h3 className={styles.cardTitle}>{cat.title}</h3>
                  <p className={styles.cardSubtitle}>{cat.subtitle}</p>
                  <div className={styles.arrow} aria-hidden="true">→</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
