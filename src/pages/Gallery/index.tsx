import { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import styles from './Gallery.module.css';

interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  bg: string;
  span: 'wide' | 'tall' | 'normal';
}

const galleryItems: GalleryItem[] = [
  { id: 'g1', title: 'Serene Minimalism', subtitle: 'Premium Matte Fixtures & Marble', bg: 'url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80")', span: 'wide' },
  { id: 'g2', title: 'Noir Collection', subtitle: 'Architectural Brassware', bg: 'url("https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=800&q=80")', span: 'tall' },
  { id: 'g3', title: 'Culinary Precision', subtitle: 'Professional Grade Sinks', bg: 'url("https://images.unsplash.com/photo-1556911220-e15b29be888e?auto=format&fit=crop&w=800&q=80")', span: 'normal' },
  { id: 'g4', title: 'Organic Forms', subtitle: 'Artisan Ceramic Basins', bg: 'url("https://images.unsplash.com/photo-1620626011160-9927f1370b55?auto=format&fit=crop&w=800&q=80")', span: 'normal' },
  { id: 'g5', title: 'Calacatta Gold Series', subtitle: 'Large Format Porcelain', bg: 'url("https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1000&q=80")', span: 'wide' },
  { id: 'g6', title: 'Spa Sanctuary', subtitle: 'Rainfall Shower Systems', bg: 'url("https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80")', span: 'tall' },
  { id: 'g7', title: 'Brushed Copper', subtitle: 'Heritage Tap Collection', bg: 'url("https://images.unsplash.com/photo-1613214149874-4f5c57e522f1?auto=format&fit=crop&w=800&q=80")', span: 'normal' },
  { id: 'g8', title: 'Arctic White', subtitle: 'Minimalist Basin Range', bg: 'url("https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80")', span: 'normal' },
  { id: 'g9', title: 'Dark Marble', subtitle: 'Dramatic Stone Finishes', bg: 'url("https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80")', span: 'normal' },
];

export default function Gallery() {
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  return (
    <Layout>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <div className={styles.pageHeaderContent}>
            <span className="section-label">Showroom Gallery</span>
            <h1 className={`text-display ${styles.pageTitle}`}>Architectural Elegance</h1>
            <p className={`text-body-lg ${styles.pageSubtitle}`}>
              A curated showcase of luxury fixtures, premium ceramics, and bespoke installations
              designed for spaces that breathe.
            </p>
          </div>
        </div>
        <div className={styles.headerBlob} aria-hidden="true" />
      </section>

      {/* Gallery Grid */}
      <section className={`section ${styles.gallerySection}`} aria-labelledby="gallery-heading">
        <h2 id="gallery-heading" className="sr-only">Gallery Collection</h2>
        <div className="container">
          <div className={styles.masonryGrid}>
            {galleryItems.map((item, i) => (
              <button
                key={item.id}
                className={`reveal reveal-delay-${(i % 5) + 1} ${styles.galleryItem} ${styles[item.span]}`}
                style={{ background: item.bg }}
                onClick={() => setLightboxItem(item)}
                aria-label={`View ${item.title}: ${item.subtitle}`}
              >
                <div className={styles.itemOverlay} />
                <div className={styles.itemContent}>
                  <p className={styles.itemSubtitle}>{item.subtitle}</p>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <div className={styles.itemArrow} aria-hidden="true">
                    <span>View</span> →
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxItem && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`Lightbox: ${lightboxItem.title}`}
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
              aria-label="Close lightbox"
            >
              ✕
            </button>
            <div className={styles.lightboxInfo}>
              <p className={styles.lightboxSubtitle}>{lightboxItem.subtitle}</p>
              <h2 className={styles.lightboxTitle}>{lightboxItem.title}</h2>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
