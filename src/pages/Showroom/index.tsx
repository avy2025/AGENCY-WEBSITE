import { type FormEvent, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import Button from '../../components/Button/Button';
import { useLanguage } from '../../context/LanguageContext';
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

export default function Showroom() {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const interestKeys = [
    'sinks',
    'wall',
    'bathTiles',
    'taps',
    'basins',
    'renovation',
    'general',
  ];

  const infoItems = [
    {
      icon: '📍',
      title: t('showroom.locations.showroom'),
      lines: [t('showroom.locations.addressLine1'), t('showroom.locations.addressLine2')],
    },
    {
      icon: '📞',
      title: t('showroom.locations.call'),
      lines: ['+91 6299468583'],
      href: 'tel:6299468583',
    },
    {
      icon: '✉',
      title: t('showroom.locations.email'),
      lines: ['pankajraj140397@gmail.com'],
      href: 'mailto:pankajraj140397@gmail.com',
    },
    {
      icon: '🕐',
      title: t('showroom.locations.hours'),
      lines: [t('showroom.locations.days'), t('showroom.locations.sunday')],
    },
  ];

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
            <span className="section-label">{t('showroom.eyebrow')}</span>
            <h1 className={`text-display ${styles.pageTitle}`}>{t('showroom.title')}</h1>
            <p className={`text-body-lg ${styles.pageSubtitle}`}>
              {t('showroom.subtitle')}
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
                  {t('showroom.expTitle')}
                </h2>
                <p className={`text-body-md ${styles.infoDesc}`}>
                  {t('showroom.expDesc')}
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
                  <p className={styles.mapLabel}>{t('showroom.mapTitle')}</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.mapLink}
                  >
                    {t('showroom.directions')} →
                  </a>
                </div>
              </div>
            </aside>

            {/* Form Column */}
            <div className={`reveal ${styles.formColumn}`}>
              <div className={styles.formCard}>
                <h2 className={`text-headline-sm ${styles.formTitle}`}>
                  {t('showroom.form.title')}
                </h2>
                <p className={`text-body-md ${styles.formSubtitle}`}>
                  {t('showroom.form.subtitle')}
                </p>

                {submitted ? (
                  <div className={styles.successState}>
                    <div className={styles.successIcon} aria-hidden="true">✓</div>
                    <h3 className={styles.successTitle}>{t('showroom.form.successTitle')}</h3>
                    <p className={styles.successText}>
                      {t('showroom.form.successText')}
                    </p>
                    <Button
                      variant="primary"
                      size="md"
                      onClick={() => setSubmitted(false)}
                    >
                      {t('showroom.form.sendAnother')}
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.form} noValidate>
                    <div className={styles.formRow}>
                      <div className={styles.fieldGroup}>
                        <label htmlFor="name" className={styles.fieldLabel}>
                          {t('showroom.form.fullName')} <span aria-hidden="true">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          className={styles.field}
                          placeholder={t('showroom.form.fullNamePlaceholder')}
                          value={form.name}
                          onChange={handleChange}
                          required
                          autoComplete="name"
                        />
                      </div>
                      <div className={styles.fieldGroup}>
                        <label htmlFor="phone" className={styles.fieldLabel}>
                          {t('showroom.form.phone')}
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          className={styles.field}
                          placeholder={t('showroom.form.phonePlaceholder')}
                          value={form.phone}
                          onChange={handleChange}
                          autoComplete="tel"
                        />
                      </div>
                    </div>

                    <div className={styles.fieldGroup}>
                      <label htmlFor="email" className={styles.fieldLabel}>
                        {t('showroom.form.email')} <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className={styles.field}
                        placeholder={t('showroom.form.emailPlaceholder')}
                        value={form.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                      />
                    </div>

                    <div className={styles.fieldGroup}>
                      <label htmlFor="interest" className={styles.fieldLabel}>
                        {t('showroom.form.interest')}
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        className={styles.field}
                        value={form.interest}
                        onChange={handleChange}
                      >
                        <option value="">{t('showroom.form.selectCategory')}</option>
                        {interestKeys.map((opt) => (
                          <option key={opt} value={opt}>{t(`showroom.form.interests.${opt}`)}</option>
                        ))}
                      </select>
                    </div>

                    <div className={styles.fieldGroup}>
                      <label htmlFor="message" className={styles.fieldLabel}>
                        {t('showroom.form.message')}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className={`${styles.field} ${styles.textarea}`}
                        placeholder={t('showroom.form.messagePlaceholder')}
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
                      {loading ? t('showroom.form.sending') : t('showroom.form.sendEnquiry')}
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
