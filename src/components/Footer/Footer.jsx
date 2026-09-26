import { business } from '../../data/business';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <h2 className={styles.name}>{business.name}</h2>
        <p className={styles.tagline}>
          {business.neighborhood}&rsquo;s neighborhood home for barber craft, beauty styling, and
          intentional grooming hospitality.
        </p>

        <div className={styles.detailRow}>
          <span className="material-symbols-outlined" aria-hidden="true">
            pin_drop
          </span>
          <span>{business.fullAddress}</span>
        </div>
        <div className={styles.detailRow}>
          <span className="material-symbols-outlined" aria-hidden="true">
            schedule
          </span>
          <span>{business.hours.note}</span>
        </div>

        <div className={styles.bottomRow}>
          <p>&copy; {year} {business.shortName}. {business.neighborhood}, {business.city}.</p>
          <a href="#services" className={styles.footerLink}>
            View services
          </a>
        </div>
      </div>
    </footer>
  );
}
