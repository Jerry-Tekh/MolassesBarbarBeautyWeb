import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { business } from '../../data/business';
import { serviceCategories, services } from '../../data/services';
import styles from './Services.module.css';
import Reveal from '../Reveal/Reveal.jsx';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');

  const visibleServices = useMemo(
    () =>
      activeCategory === 'all'
        ? services
        : services.filter((service) => service.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="services" className={styles.section}>
      <Reveal className={styles.intro} direction="left">
        <h2 className={styles.heading}>What's in the chair</h2>
        <p className={styles.subheading}>
          Precision cutting and dedicated beauty styling, delivered with neighborhood care.
        </p>
      </Reveal>

      <div className={styles.filterBar} role="tablist" aria-label="Filter services">
        {serviceCategories.map((category) => {
          const isActive = category.id === activeCategory;
          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={styles.filterButton}
              onClick={() => setActiveCategory(category.id)}
            >
              {isActive && (
                <motion.span
                  layoutId="service-filter-pill"
                  className={styles.filterPill}
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className={styles.filterLabel}>{category.label}</span>
            </button>
          );
        })}
      </div>

      <Reveal as="ul" className={styles.grid} direction="right" delay={0.08}>
        {visibleServices.map((service) => (
          <li key={service.id} className={styles.card}>
            <div className={styles.cardHead}>
              <span className={styles.iconWrap} aria-hidden="true">
                <span className="material-symbols-outlined">{service.icon}</span>
              </span>
              <span className={styles.categoryTag}>
                {service.category === 'barber' ? 'Barber' : 'Beauty'}
              </span>
            </div>
            <h3 className={styles.cardTitle}>{service.name}</h3>
            <p className={styles.cardDetail}>{service.description}</p>
            <a href={business.ctaLinks.call} className={styles.cardLink}>
              Ask about this service
            </a>
          </li>
        ))}
      </Reveal>

      <div className={styles.notice}>
        <span className="material-symbols-outlined" aria-hidden="true">
          info
        </span>
        <p>
          Offerings and walk in availability vary day to day. Call {business.phone.display} for
          consultations or questions.
        </p>
      </div>
    </section>
  );
}
