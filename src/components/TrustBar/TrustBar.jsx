import { business } from '../../data/business';
import styles from './TrustBar.module.css';

const facts = [
  {
    icon: 'content_cut',
    title: 'Barber + beauty',
    detail: 'Full craft under one community roof.',
  },
  {
    icon: 'door_front',
    title: 'Walk ins welcome',
    detail: 'Drop in or call ahead for chair flow.',
  },
  {
    icon: 'family_restroom',
    title: 'Kid friendly',
    detail: 'Patient, welcoming chairs for all ages.',
  },
  {
    icon: 'location_on',
    title: `${business.neighborhood} ATL`,
    detail: 'East Atlanta neighborhood fixture.',
  },
];

export default function TrustBar() {
  return (
    <section className={styles.section} aria-label="Why visit Molasses">
      <ul className={styles.grid}>
        {facts.map((fact) => (
          <li key={fact.title} className={styles.card}>
            <span className={styles.iconWrap} aria-hidden="true">
              <span className="material-symbols-outlined">{fact.icon}</span>
            </span>
            <span className={styles.title}>{fact.title}</span>
            <span className={styles.detail}>{fact.detail}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
