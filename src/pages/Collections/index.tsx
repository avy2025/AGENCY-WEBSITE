import { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import Button from '../../components/Button/Button';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Collections.module.css';

// Internal category keys for filtering (language-independent)
type CategoryKey = 'all' | 'sinks' | 'wallTiles' | 'taps' | 'basins' | 'bathTiles';

interface ProductItem {
  id: string;
  titleKey: keyof typeof import('../../translations/translations').translations.en.collections.products;
  categoryKey: Exclude<CategoryKey, 'all'>;
  tag: 'premium' | 'trending' | 'luxury' | 'new' | 'exclusive';
  bg: string;
}

const products: ProductItem[] = [
  // Kitchen Sinks
  { id: 'ks1', titleKey: 'roma', categoryKey: 'sinks', tag: 'premium', bg: 'url("https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=600&q=80")' },
  { id: 'ks2', titleKey: 'nero', categoryKey: 'sinks', tag: 'trending', bg: 'url("https://images.unsplash.com/photo-1556911220-e15b29be888e?auto=format&fit=crop&w=600&q=80")' },
  { id: 'ks3', titleKey: 'culinary', categoryKey: 'sinks', tag: 'new', bg: 'url("https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80")' },
  // Wall Tiles
  { id: 'wt1', titleKey: 'calacatta', categoryKey: 'wallTiles', tag: 'exclusive', bg: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80")' },
  { id: 'wt2', titleKey: 'bianco', categoryKey: 'wallTiles', tag: 'premium', bg: 'url("https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80")' },
  { id: 'wt3', titleKey: 'slate', categoryKey: 'wallTiles', tag: 'new', bg: 'url("https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80")' },
  // Designer Taps
  { id: 'dt1', titleKey: 'cascade', categoryKey: 'taps', tag: 'luxury', bg: 'url("https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80")' },
  { id: 'dt2', titleKey: 'noirBrushed', categoryKey: 'taps', tag: 'exclusive', bg: 'url("https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80")' },
  { id: 'dt3', titleKey: 'goldArch', categoryKey: 'taps', tag: 'trending', bg: 'url("https://images.unsplash.com/photo-1613214149874-4f5c57e522f1?auto=format&fit=crop&w=600&q=80")' },
  // Wash Basins
  { id: 'wb1', titleKey: 'organicBowl', categoryKey: 'basins', tag: 'premium', bg: 'url("https://images.unsplash.com/photo-1620626011160-9927f1370b55?auto=format&fit=crop&w=600&q=80")' },
  { id: 'wb2', titleKey: 'countertopCube', categoryKey: 'basins', tag: 'new', bg: 'url("https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=600&q=80")' },
  { id: 'wb3', titleKey: 'vesselStone', categoryKey: 'basins', tag: 'exclusive', bg: 'url("https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80")' },
  // Bathroom Tiles
  { id: 'bt1', titleKey: 'travertineLook', categoryKey: 'bathTiles', tag: 'premium', bg: 'url("https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80")' },
  { id: 'bt2', titleKey: 'travertineLook', categoryKey: 'bathTiles', tag: 'trending', bg: 'url("https://images.unsplash.com/photo-1552321554-5fecd8c7856a?auto=format&fit=crop&w=600&q=80")' },
  { id: 'bt3', titleKey: 'hexModern', categoryKey: 'bathTiles', tag: 'new', bg: 'url("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80")' },
];

export default function Collections() {
  const { t } = useLanguage();
  const [activeCategoryKey, setActiveCategoryKey] = useState<CategoryKey>('all');

  const categoryTabs: { key: CategoryKey; label: string }[] = [
    { key: 'all', label: t('collections.cat.all') },
    { key: 'sinks', label: t('collections.cat.sinks') },
    { key: 'wallTiles', label: t('collections.cat.wallTiles') },
    { key: 'taps', label: t('collections.cat.taps') },
    { key: 'basins', label: t('collections.cat.basins') },
    { key: 'bathTiles', label: t('collections.cat.bathTiles') },
  ];

  const filtered = activeCategoryKey === 'all'
    ? products
    : products.filter((p) => p.categoryKey === activeCategoryKey);

  return (
    <Layout>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className={`container ${styles.pageHeaderInner}`}>
          <div className={styles.pageHeaderContent}>
            <span className="section-label">{t('collections.ourRange')}</span>
            <h1 className={`text-display ${styles.pageTitle}`}>{t('collections.title')}</h1>
            <p className={`text-body-lg ${styles.pageSubtitle}`}>
              {t('collections.subtitle')}
            </p>
          </div>
        </div>
        <div className={styles.headerBlob} aria-hidden="true" />
      </section>

      {/* Filter Tabs */}
      <section className={styles.filterSection}>
        <div className="container">
          <div className={styles.filterBar} role="tablist" aria-label={t('collections.ourRange')}>
            {categoryTabs.map((cat) => (
              <button
                key={cat.key}
                role="tab"
                aria-selected={activeCategoryKey === cat.key}
                className={`${styles.filterTab} ${activeCategoryKey === cat.key ? styles.filterTabActive : ''}`}
                onClick={() => setActiveCategoryKey(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className={`section ${styles.productsSection}`}>
        <div className="container">
          <div className={styles.productsGrid}>
            {filtered.map((product, i) => {
              const title = t(`collections.products.${product.titleKey}.title`);
              const subtitle = t(`collections.products.${product.titleKey}.subtitle`);
              const categoryLabel = t(`collections.cat.${product.categoryKey}`);
              const tagLabel = t(`categories.tags.${product.tag}`);

              return (
                <article
                  key={product.id}
                  className={`reveal reveal-delay-${(i % 4) + 1} ${styles.productCard}`}
                  aria-label={`${title} - ${subtitle}`}
                >
                  {/* Image area */}
                  <div className={styles.cardImage} style={{ background: product.bg }}>
                    <span className={styles.cardTag}>{tagLabel}</span>
                    <div className={styles.cardImageOverlay} />
                  </div>

                  {/* Content */}
                  <div className={styles.cardBody}>
                    <p className={styles.cardCategory}>{categoryLabel}</p>
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <p className={styles.cardSubtitle}>{subtitle}</p>
                    <div className={styles.cardFooter}>
                      <span className={styles.cardPrice}>{t('collections.priceOnRequest')}</span>
                      <Button as="link" to="/showroom" variant="secondary" size="sm">
                        {t('collections.btnEnquire')}
                      </Button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className={styles.emptyState}>
              <p>{t('collections.noProducts')}</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className={`section ${styles.collectionsCtaSection}`}>
        <div className="container">
          <div className={`reveal ${styles.collectionsCtaInner}`}>
            <h2 className={`text-headline-lg ${styles.ctaHeading}`}>
              {t('collections.ctaHeading')}
            </h2>
            <p className={`text-body-lg ${styles.ctaText}`}>
              {t('collections.ctaText')}
            </p>
            <Button as="link" to="/showroom" variant="primary" size="lg" icon="→">
              {t('collections.btnConsultation')}
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
