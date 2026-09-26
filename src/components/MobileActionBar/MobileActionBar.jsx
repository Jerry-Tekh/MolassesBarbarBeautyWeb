import { business } from '../../data/business';
import styles from './MobileActionBar.module.css';

export default function MobileActionBar() {
  return (
    <nav className={styles.bar} aria-label="Quick actions">
      <a href={business.ctaLinks.call} className={styles.call}>
        <span className="material-symbols-outlined" aria-hidden="true">
          call
        </span>
        <span>Call {business.phone.display}</span>
      </a>
      <a
        href={business.ctaLinks.directions}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.directions}
      >
        <span className="material-symbols-outlined" aria-hidden="true">
          near_me
        </span>
        <span>Directions</span>
      </a>
    </nav>
  );
}
