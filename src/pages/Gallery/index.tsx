import { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Gallery.module.css';

interface GalleryItem {
  id: string;
  itemKey: keyof typeof import('../../translations/translations').translations.en.gallery.items;
  bg: string;
  span: 'wide' | 'tall' | 'normal';
}

const galleryItems: GalleryItem[] = [
  { id: 'g1', itemKey: 'serene', bg: 'url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80")', span: 'wide' },
  { id: 'g2', itemKey: 'noirCol', bg: 'url("https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=800&q=80")', span: 'tall' },
  { id: 'g3', itemKey: 'culinaryPrec', bg: 'url("https://images.unsplash.com/photo-1556911220-e15b29be888e?auto=format&fit=crop&w=800&q=80")', span: 'normal' },
  { id: 'g4', itemKey: 'organicForms', bg: 'url("https://images.unsplash.com/photo-1620626011160-9927f1370b55?auto=format&fit=crop&w=800&q=80")', span: 'normal' },
  { id: 'g5', itemKey: 'calacattaGold', bg: 'url("https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1000&q=80")', span: 'wide' },
  { id: 'g6', itemKey: 'spaSanctuary', bg: 'url("https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80")', span: 'tall' },
  { id: 'g7', itemKey: 'brushedCopper', bg: 'url("https://images.unsplash.com/photo-1613214149874-4f5c57e522f1?auto=format&fit=crop&w=800&q=80")', span: 'normal' },
  { id: 'g8', itemKey: 'arcticWhite', bg: 'url("https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80")', span: 'normal' },
  { id: 'g9', itemKey: 'darkMarble', bg: 'url("https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80")', span: 'normal' },
];

export default function Gallery() {
  const { t } = useLanguage();
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  return (
    <Layout>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <div className={styles.pageHeaderContent}>
            <span className="section-label">{t('gallery.eyebrow')}</span>
            <h1 className={`text-display ${styles.pageTitle}`}>{t('gallery.title')}</h1>
            <p className={`text-body-lg ${styles.pageSubtitle}`}>
              {t('gallery.subtitle')}
            </p>
          </div>
        </div>
        <div className={styles.headerBlob} aria-hidden="true" />
      </section>

      {/* Gallery Grid */}
      <section className={`section ${styles.gallerySection}`} aria-labelledby="gallery-heading">
        <h2 id="gallery-heading" className="sr-only">{t('gallery.title')}</h2>
        <div className="container">
          <div className={styles.masonryGrid}>
            {galleryItems.map((item, i) => {
              const itemTitle = t(`gallery.items.${item.itemKey}.title`);
              const itemSubtitle = t(`gallery.items.${item.itemKey}.subtitle`);
              return (
                <button
                  key={item.id}
                  className={`reveal reveal-delay-${(i % 5) + 1} ${styles.galleryItem} ${styles[item.span]}`}
                  style={{ background: item.bg }}
                  onClick={() => setLightboxItem(item)}
                  aria-label={`${t('gallery.view')} ${itemTitle}: ${itemSubtitle}`}
                >
                  <div className={styles.itemOverlay} />
                  <div className={styles.itemContent}>
                    <p className={styles.itemSubtitle}>{itemSubtitle}</p>
                    <h3 className={styles.itemTitle}>{itemTitle}</h3>
                    <div className={styles.itemArrow} aria-hidden="true">
                      <span>{t('gallery.view')}</span> →
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxItem && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`${t('gallery.view')}: ${t(`gallery.items.${lightboxItem.itemKey}.title`)}`}
          onClick={() => setLightboxItem(null)}
        >
          <div
            className={styles.lightboxContent}
            style={{ background: lightboxItem.bg }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.lightboxClose}
              onClick={() => setLightboxItem(null)}
              aria-label={t('gallery.ariaClose')}
            >
              {t('gallery.close')}
            </button>
            <div className={styles.lightboxInfo}>
              <p className={styles.lightboxSubtitle}>{t(`gallery.items.${lightboxItem.itemKey}.subtitle`)}</p>
              <h2 className={styles.lightboxTitle}>{t(`gallery.items.${lightboxItem.itemKey}.title`)}</h2>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
