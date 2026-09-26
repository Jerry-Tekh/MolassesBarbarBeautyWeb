import { business } from '../../data/business';
import styles from './Experience.module.css';

const steps = [
  {
    number: '01',
    title: 'Pull up',
    detail: `Walk in whenever the shop is open, or call ${business.phone.display} to check chair availability.`,
  },
  {
    number: '02',
    title: 'Get in the chair',
    detail:
      'Talk through your goals with your barber or stylist, share a reference if you have one, and relax while they work.',
  },
  {
    number: '03',
    title: 'Leave fresh',
    detail: 'Check your finished look, grab styling tips, and step back out feeling renewed.',
  },
];

export default function Experience() {
  return (
    <section className={styles.section}>
      <div className={styles.intro}>
        <h2 className={styles.heading}>How it works</h2>
      </div>

      <ol className={styles.grid}>
        {steps.map((step) => (
          <li key={step.number} className={styles.card}>
            <span className={styles.number}>{step.number}</span>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.detail}>{step.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
