import { Link } from 'react-router-dom';
import styles from './CategoriesSection.module.css';

const categories = [
  {
    id: 'kitchen-sinks',
    title: 'Kitchen Sinks',
    subtitle: 'Sculptural precision for culinary spaces',
    tag: 'Premium',
    bg: 'url("https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=800&q=80")',
    span: 'wide',
  },
  {
    id: 'wall-tiles',
    title: 'Wall Tiles',
    subtitle: 'Large format porcelain & ceramic',
    tag: 'Trending',
    bg: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80")',
    span: 'normal',
  },
  {
    id: 'designer-taps',
    title: 'Designer Taps',
    subtitle: 'Sculptural water controls',
    tag: 'Luxury',
    bg: 'url("https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80")',
    span: 'normal',
  },
  {
    id: 'bathroom-tiles',
    title: 'Bathroom Tiles',
    subtitle: 'Artisan ceramic & stone finishes',
    tag: 'New',
    bg: 'url("https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80")',
    span: 'normal',
  },
  {
    id: 'wash-basins',
    title: 'Wash Basins',
    subtitle: 'Organic forms for serene sanctuaries',
    tag: 'Exclusive',
    bg: 'url("https://images.unsplash.com/photo-1620626011160-9927f1370b55?auto=format&fit=crop&w=800&q=80")',
    span: 'normal',
  },
];

export default function CategoriesSection() {
  return (
    <section className={`section ${styles.categories}`} aria-labelledby="categories-heading">
      <div className="container">
        <div className={`reveal ${styles.header}`}>
          <span className="section-label">Product Categories</span>
          <h2 id="categories-heading" className={`text-headline-lg ${styles.heading}`}>
            Curated for the Discerning Eye
          </h2>
        </div>

        <div className={styles.grid}>
          {categories.map((cat, i) => (
            <Link
              key={cat.id}
              to="/collections"
              className={`reveal reveal-delay-${(i % 4) + 1} ${styles.card} ${cat.span === 'wide' ? styles.wide : ''}`}
              aria-label={`Browse ${cat.title}`}
              style={{ '--card-bg': cat.bg } as React.CSSProperties}
            >
              <div className={styles.cardBg} />
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
