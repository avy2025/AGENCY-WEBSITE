import styles from './StatsSection.module.css';

const stats = [
  { value: '25+', label: 'Years of Experience', desc: 'Trusted by homeowners & architects across the region.' },
  { value: '100%', label: 'Genuine Products', desc: 'Every item is authenticated from the original manufacturer.' },
  { value: '500+', label: 'Products Curated', desc: 'From the world\'s most sought-after brands.' },
  { value: '10K+', label: 'Happy Clients', desc: 'Spaces transformed through quality and dedication.' },
];

export default function StatsSection() {
  return (
    <section className={`section ${styles.stats}`} aria-label="Our achievements">
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
