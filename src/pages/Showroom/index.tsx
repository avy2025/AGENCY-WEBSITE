import { type FormEvent, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import Button from '../../components/Button/Button';
import styles from './Showroom.module.css';

interface FormState {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  interest: '',
  message: '',
};

const interests = [
  'Kitchen Sinks',
  'Wall Tiles',
  'Bathroom Tiles',
  'Designer Taps',
  'Wash Basins',
  'Complete Bathroom Renovation',
  'General Enquiry',
];

const infoItems = [
  {
    icon: '📍',
    title: 'Visit Our Showroom',
    lines: ['Maa Bhawani Agencies', 'Ranchi, Jharkhand, India'],
  },
  {
    icon: '📞',
    title: 'Call Us',
    lines: ['+91 6299468583'],
    href: 'tel:6299468583',
  },
  {
    icon: '✉',
    title: 'Email Us',
    lines: ['pankajraj140397@gmail.com'],
    href: 'mailto:pankajraj140397@gmail.com',
  },
  {
    icon: '🕐',
    title: 'Opening Hours',
    lines: ['Mon – Sat: 9:00 AM – 7:00 PM', 'Sunday: By Appointment'],
  },
];

export default function Showroom() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <div className={styles.pageHeaderContent}>
            <span className="section-label">Get In Touch</span>
            <h1 className={`text-display ${styles.pageTitle}`}>Visit Our Showroom</h1>
            <p className={`text-body-lg ${styles.pageSubtitle}`}>
              Visit our showroom to experience the tactile quality of premium architectural
              fixtures, or reach out to our team for dedicated consultation.
            </p>
          </div>
        </div>
        <div className={styles.headerBlob} aria-hidden="true" />
      </section>

      {/* Main content */}
      <section className={`section ${styles.mainSection}`}>
        <div className="container">
          <div className={styles.layout}>
            {/* Info Column */}
            <aside className={styles.infoColumn}>
              <div className={`reveal ${styles.infoHeader}`}>
                <h2 className={`text-headline-sm ${styles.infoTitle}`}>
                  Experience Architectural Luxury
                </h2>
                <p className={`text-body-md ${styles.infoDesc}`}>
                  Curating architectural luxury through premium sinks, tiles, and
                  fittings for refined spaces. Schedule a visit or reach out directly.
                </p>
              </div>

              <div className={styles.infoItems}>
                {infoItems.map((item, i) => (
                  <div
                    key={item.title}
                    className={`reveal reveal-delay-${i + 1} ${styles.infoItem}`}
                  >
                    <span className={styles.infoIcon} aria-hidden="true">{item.icon}</span>
                    <div>
                      <p className={styles.infoItemLabel}>{item.title}</p>
                      {item.lines.map((line) =>
                        item.href ? (
                          <a key={line} href={item.href} className={styles.infoItemLink}>
                            {line}
                          </a>
                        ) : (
                          <p key={line} className={styles.infoItemText}>{line}</p>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className={`reveal ${styles.mapCard}`}>
                <div className={styles.mapPlaceholder}>
                  <div className={styles.mapPin} aria-hidden="true">📍</div>
                  <p className={styles.mapLabel}>Ranchi, Jharkhand</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.mapLink}
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </aside>

            {/* Form Column */}
            <div className={`reveal ${styles.formColumn}`}>
              <div className={styles.formCard}>
                <h2 className={`text-headline-sm ${styles.formTitle}`}>
                  Book a Consultation
                </h2>
                <p className={`text-body-md ${styles.formSubtitle}`}>
                  Fill in your details and we'll get back to you within 24 hours.
                </p>

                {submitted ? (
                  <div className={styles.successState}>
                    <div className={styles.successIcon} aria-hidden="true">✓</div>
                    <h3 className={styles.successTitle}>Message Received!</h3>
                    <p className={styles.successText}>
                      Thank you for reaching out. Our team will contact you within 24 hours.
                    </p>
                    <Button
                      variant="primary"
                      size="md"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.form} noValidate>
                    <div className={styles.formRow}>
                      <div className={styles.fieldGroup}>
                        <label htmlFor="name" className={styles.fieldLabel}>
                          Full Name <span aria-hidden="true">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          className={styles.field}
                          placeholder="Your full name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          autoComplete="name"
                        />
                      </div>
                      <div className={styles.fieldGroup}>
                        <label htmlFor="phone" className={styles.fieldLabel}>
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          className={styles.field}
                          placeholder="+91 XXXXX XXXXX"
                          value={form.phone}
                          onChange={handleChange}
                          autoComplete="tel"
                        />
                      </div>
                    </div>

                    <div className={styles.fieldGroup}>
                      <label htmlFor="email" className={styles.fieldLabel}>
                        Email Address <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className={styles.field}
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                      />
                    </div>

                    <div className={styles.fieldGroup}>
                      <label htmlFor="interest" className={styles.fieldLabel}>
                        I'm Interested In
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        className={styles.field}
                        value={form.interest}
                        onChange={handleChange}
                      >
                        <option value="">Select a category</option>
                        {interests.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div className={styles.fieldGroup}>
                      <label htmlFor="message" className={styles.fieldLabel}>
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className={`${styles.field} ${styles.textarea}`}
                        placeholder="Tell us about your project requirements..."
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      icon={loading ? undefined : '→'}
                      className={styles.submitBtn}
                      disabled={loading}
                    >
                      {loading ? 'Sending…' : 'Send Enquiry'}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
