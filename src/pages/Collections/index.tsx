import { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import Button from '../../components/Button/Button';
import styles from './Collections.module.css';

const categories = ['All', 'Kitchen Sinks', 'Wall Tiles', 'Designer Taps', 'Wash Basins', 'Bathroom Tiles'];

interface ProductItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tag?: string;
  bg: string;
  price?: string;
}

const products: ProductItem[] = [
  // Kitchen Sinks
  { id: 'ks1', title: 'Roma Series', subtitle: 'Undermount Stainless Steel', category: 'Kitchen Sinks', tag: 'Premium', price: 'On Request', bg: 'url("https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=600&q=80")' },
  { id: 'ks2', title: 'Nero Matt', subtitle: 'Composite Granite Black', category: 'Kitchen Sinks', tag: 'Trending', price: 'On Request', bg: 'url("https://images.unsplash.com/photo-1556911220-e15b29be888e?auto=format&fit=crop&w=600&q=80")' },
  { id: 'ks3', title: 'Culinary Pro', subtitle: 'Professional Grade Double Bowl', category: 'Kitchen Sinks', tag: 'New', price: 'On Request', bg: 'url("https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80")' },
  // Wall Tiles
  { id: 'wt1', title: 'Calacatta Gold', subtitle: '600×1200mm Large Format Porcelain', category: 'Wall Tiles', tag: 'Exclusive', price: 'On Request', bg: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80")' },
  { id: 'wt2', title: 'Bianco Marble', subtitle: '800×800mm Polished Surface', category: 'Wall Tiles', tag: 'Premium', price: 'On Request', bg: 'url("https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80")' },
  { id: 'wt3', title: 'Slate Noir', subtitle: '600×600mm Matt Finish', category: 'Wall Tiles', tag: 'New', price: 'On Request', bg: 'url("https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80")' },
  // Designer Taps
  { id: 'dt1', title: 'Cascade Chrome', subtitle: 'Single Lever Precision Control', category: 'Designer Taps', tag: 'Luxury', price: 'On Request', bg: 'url("https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80")' },
  { id: 'dt2', title: 'Noir Brushed', subtitle: 'Matte Black Contemporary', category: 'Designer Taps', tag: 'Exclusive', price: 'On Request', bg: 'url("https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80")' },
  { id: 'dt3', title: 'Gold Arch', subtitle: 'Brass Plated Heritage Style', category: 'Designer Taps', tag: 'Trending', price: 'On Request', bg: 'url("https://images.unsplash.com/photo-1613214149874-4f5c57e522f1?auto=format&fit=crop&w=600&q=80")' },
  // Wash Basins
  { id: 'wb1', title: 'Organic Bowl', subtitle: 'Handcrafted Artisan Ceramic', category: 'Wash Basins', tag: 'Premium', price: 'On Request', bg: 'url("https://images.unsplash.com/photo-1620626011160-9927f1370b55?auto=format&fit=crop&w=600&q=80")' },
  { id: 'wb2', title: 'Countertop Cube', subtitle: 'Minimalist Square Form', category: 'Wash Basins', tag: 'New', price: 'On Request', bg: 'url("https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=600&q=80")' },
  { id: 'wb3', title: 'Vessel Stone', subtitle: 'Natural Stone Semi-Recessed', category: 'Wash Basins', tag: 'Exclusive', price: 'On Request', bg: 'url("https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80")' },
  // Bathroom Tiles
  { id: 'bt1', title: 'Travertine Look', subtitle: '600×300mm Floor & Wall', category: 'Bathroom Tiles', tag: 'Premium', price: 'On Request', bg: 'url("https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80")' },
  { id: 'bt2', title: 'Travertine Look', subtitle: '600×300mm Floor & Wall', category: 'Bathroom Tiles', tag: 'Trending', price: 'On Request', bg: 'url("https://images.unsplash.com/photo-1552321554-5fecd8c7856a?auto=format&fit=crop&w=600&q=80")' },
  { id: 'bt3', title: 'Hex Modern', subtitle: 'Hexagonal Mosaic Mix', category: 'Bathroom Tiles', tag: 'New', price: 'On Request', bg: 'url("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80")' },
];

export default function Collections() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className={`container ${styles.pageHeaderInner}`}>
          <div className={styles.pageHeaderContent}>
            <span className="section-label">Our Range</span>
            <h1 className={`text-display ${styles.pageTitle}`}>Curated Collections</h1>
            <p className={`text-body-lg ${styles.pageSubtitle}`}>
              Discover our meticulously selected range of premium fixtures and finishes.
              Architectural luxury defined through precision engineering and timeless design.
            </p>
          </div>
        </div>
        <div className={styles.headerBlob} aria-hidden="true" />
      </section>

      {/* Filter Tabs */}
      <section className={styles.filterSection}>
        <div className="container">
          <div className={styles.filterBar} role="tablist" aria-label="Product categories">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`${styles.filterTab} ${activeCategory === cat ? styles.filterTabActive : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className={`section ${styles.productsSection}`}>
        <div className="container">
          <div className={styles.productsGrid}>
            {filtered.map((product, i) => (
              <article
                key={product.id}
                className={`reveal reveal-delay-${(i % 4) + 1} ${styles.productCard}`}
                aria-label={`${product.title} - ${product.subtitle}`}
              >
                {/* Image area */}
                <div className={styles.cardImage} style={{ background: product.bg }}>
                  {product.tag && (
                    <span className={styles.cardTag}>{product.tag}</span>
                  )}
                  <div className={styles.cardImageOverlay} />
                </div>

                {/* Content */}
                <div className={styles.cardBody}>
                  <p className={styles.cardCategory}>{product.category}</p>
                  <h3 className={styles.cardTitle}>{product.title}</h3>
                  <p className={styles.cardSubtitle}>{product.subtitle}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.cardPrice}>{product.price}</span>
                    <Button as="link" to="/showroom" variant="secondary" size="sm">
                      Enquire
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className={styles.emptyState}>
              <p>No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className={`section ${styles.collectionsCtaSection}`}>
        <div className="container">
          <div className={`reveal ${styles.collectionsCtaInner}`}>
            <h2 className={`text-headline-lg ${styles.ctaHeading}`}>
              Not finding what you need?
            </h2>
            <p className={`text-body-lg ${styles.ctaText}`}>
              Our experts can source any premium product for your project. Schedule a personal consultation.
            </p>
            <Button as="link" to="/showroom" variant="primary" size="lg" icon="→">
              Book a Consultation
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
