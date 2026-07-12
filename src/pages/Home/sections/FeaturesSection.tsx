import styles from './FeaturesSection.module.css';

const features = [
  {
    icon: '◆',
    title: 'Premium Brands',
    description: 'Access to the world\'s most sought-after architectural fixtures and finishes, curated for discerning tastes.',
  },
  {
    icon: '✓',
    title: 'Genuine Products',
    description: 'Guaranteed authenticity across all our luxury tile and sanitary ware lines. Every product is certified.',
  },
  {
    icon: '◎',
    title: 'Competitive Pricing',
    description: 'Exceptional value without compromising on the high-end showroom experience.',
  },
  {
    icon: '✦',
    title: 'Expert Consultation',
    description: 'Professional guidance tailored for interior designers and architects. Your vision, expertly realised.',
  },
];

export default function FeaturesSection() {
  return (
    <section className={`section ${styles.features}`} aria-labelledby="features-heading">
      <div className="container">
        {/* Header */}
        <div className={`reveal ${styles.header}`}>
          <span className="section-label">Why Choose Us</span>
          <h2 id="features-heading" className={`text-headline-lg ${styles.heading}`}>
            Elevating spaces through uncompromising quality
          </h2>
          <p className={`text-body-lg ${styles.subtext}`}>
            For decades, Maa Bhawani Agencies has been the premier destination for
            high-end homeowners and elite architects. We curate only the finest materials,
            bridging the gap between clinical precision and lifestyle elegance.
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
