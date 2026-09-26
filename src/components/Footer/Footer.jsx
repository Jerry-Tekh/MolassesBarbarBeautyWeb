import { business } from '../../data/business';
import { navLinks } from '../../data/navigation';
import Reveal from '../Reveal/Reveal.jsx';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Reveal className={styles.brandBlock} direction="left">
          <a href="#home" className={styles.name}>{business.name}</a>
          <p className={styles.tagline}>{business.tagline}</p>
          <a href={business.ctaLinks.call} className={styles.phoneLink}>
            <span className="material-symbols-outlined" aria-hidden="true">call</span>
            {business.phone.display}
          </a>
        </Reveal>

        <Reveal className={styles.footerColumn} direction="right" delay={0.06}>
          <h3 className={styles.columnTitle}>Explore</h3>
          <nav className={styles.footerNav} aria-label="Footer navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={styles.footerLink}>{link.label}</a>
            ))}
          </nav>
        </Reveal>

        <Reveal className={styles.footerColumn} direction="left" delay={0.12}>
          <h3 className={styles.columnTitle}>Visit the shop</h3>
          <p className={styles.detailRow}>
            <span className="material-symbols-outlined" aria-hidden="true">location_on</span>
            <span>{business.fullAddress}</span>
          </p>
          <p className={styles.detailRow}>
            <span className="material-symbols-outlined" aria-hidden="true">schedule</span>
            <span>{business.hours.note}</span>
          </p>
        </Reveal>

        <Reveal className={styles.footerColumn} direction="right" delay={0.18}>
          <h3 className={styles.columnTitle}>Come through</h3>
          <p className={styles.visitCopy}>Walk ins are welcome. Call ahead to check chair availability.</p>
          <a href={business.ctaLinks.directions} target="_blank" rel="noopener noreferrer" className={styles.directionsLink}>
            Get directions
            <span className="material-symbols-outlined" aria-hidden="true">arrow_outward</span>
          </a>
        </Reveal>

        <div className={styles.bottomRow}>
          <p>&copy; {year} {business.shortName}. {business.neighborhood}, {business.city}.</p>
          <a href="#home" className={styles.backToTop}>Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </div>
    </footer>
  );
}