import { business } from '../../data/business';
import styles from './Location.module.css';
import Reveal from '../Reveal/Reveal.jsx';

export default function Location() {
  return (
    <section id="visit" className={styles.section}>
      <Reveal className={styles.panel} direction="right">
        <div className={styles.intro}>
          <h2 className={styles.heading}>Find {business.shortName}</h2>
          <p className={styles.subheading}>
            On {business.address.line1} in {business.neighborhood}, with street and local
            parking.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.details}>
            <div className={styles.detailRow}>
              <span className="material-symbols-outlined" aria-hidden="true">
                location_on
              </span>
              <div>
                <span className={styles.detailLabel}>{business.name}</span>
                <span className={styles.detailValue}>{business.address.line1}</span>
                <span className={styles.detailValue}>
                  {business.address.city}, {business.address.state} {business.address.zip}
                </span>
              </div>
            </div>

            <div className={styles.detailRow}>
              <span className="material-symbols-outlined" aria-hidden="true">
                phone_in_talk
              </span>
              <div>
                <span className={styles.detailLabel}>Direct shop phone</span>
                <a href={business.ctaLinks.call} className={styles.phoneLink}>
                  {business.phone.display}
                </a>
              </div>
            </div>

            <div className={styles.hoursNotice}>
              <span className={styles.hoursTitle}>Hours</span>
              <p>{business.hours.note}</p>
            </div>

            <div className={styles.ctas}>
              <a href={business.ctaLinks.call} className={styles.primaryCta}>
                <span className="material-symbols-outlined" aria-hidden="true">
                  call
                </span>
                Call the shop
              </a>
              <a
                href={business.ctaLinks.directions}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryCta}
              >
                <span className="material-symbols-outlined" aria-hidden="true">
                  map
                </span>
                Open in Google Maps
              </a>
            </div>
          </div>

          <a
            href={business.ctaLinks.directions}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapPlaceholder}
            aria-label={`Open directions to ${business.fullAddress} in Google Maps`}
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              pin_drop
            </span>
            <span className={styles.mapTitle}>{business.address.line1}</span>
            <span className={styles.mapSubtitle}>
              {business.city}, {business.address.state} &middot; {business.neighborhood}
            </span>
            <span className={styles.mapCta}>Launch navigation</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
