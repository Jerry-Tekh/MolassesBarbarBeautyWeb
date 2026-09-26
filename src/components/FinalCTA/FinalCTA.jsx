import { business } from '../../data/business';
import styles from './FinalCTA.module.css';
import Reveal from '../Reveal/Reveal.jsx';

export default function FinalCTA() {
  return (
    <section className={styles.section}>
      <Reveal className={styles.panel} direction="right">
        <span className={styles.iconWrap} aria-hidden="true">
          <span className="material-symbols-outlined">content_cut</span>
        </span>
        <div className={styles.copyWrap}>
          <h2 className={styles.heading}>Your next cut is right here.</h2>
          <p className={styles.copy}>
            Pull up, call ahead, or make your way to {business.address.line1} in{' '}
            {business.neighborhood}. Welcoming chairs are ready for you.
          </p>
        </div>
        <div className={styles.ctas}>
          <a href={business.ctaLinks.call} className={styles.primaryCta}>
            <span className="material-symbols-outlined" aria-hidden="true">
              call
            </span>
            Call {business.phone.display}
          </a>
          <a
            href={business.ctaLinks.directions}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryCta}
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              directions
            </span>
            Get directions
          </a>
        </div>
      </Reveal>
    </section>
  );
}
