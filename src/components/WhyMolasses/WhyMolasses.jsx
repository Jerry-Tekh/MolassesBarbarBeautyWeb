import styles from './WhyMolasses.module.css';

const pillars = [
  {
    icon: 'sentiment_satisfied',
    title: 'Welcoming atmosphere',
    detail:
      'Visitors describe an easy, comfortable shop. Whether it is your first visit or your twentieth, you are greeted like a regular.',
  },
  {
    icon: 'architecture',
    title: 'Attention to detail',
    detail:
      'Clean fades, crisp shape ups, and care given to lines and proportions without a rushed technique.',
  },
  {
    icon: 'timer',
    title: 'Efficient chair time',
    detail: 'A steady chair pace that respects your schedule without cutting corners.',
  },
  {
    icon: 'groups',
    title: 'Community oriented',
    detail:
      'A Kirkwood spot where neighbors connect, families bring their kids, and barbering and beauty care thrive side by side.',
  },
];

export default function WhyMolasses() {
  return (
    <section className={styles.section}>
      <div className={styles.intro}>
        <h2 className={styles.heading}>Why people come back</h2>
        <p className={styles.subheading}>
          The standards that guide every appointment and walk in.
        </p>
      </div>

      <ul className={styles.grid}>
        {pillars.map((pillar) => (
          <li key={pillar.title} className={styles.card}>
            <span className={styles.iconWrap} aria-hidden="true">
              <span className="material-symbols-outlined">{pillar.icon}</span>
            </span>
            <h3 className={styles.cardTitle}>{pillar.title}</h3>
            <p className={styles.cardDetail}>{pillar.detail}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
