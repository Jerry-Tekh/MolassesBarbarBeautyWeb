import { business } from '../../data/business';
import { testimonials } from '../../data/testimonials';
import styles from './Testimonials.module.css';
import Reveal from '../Reveal/Reveal.jsx';

export default function Testimonials() {
  return (
    <section id="reviews" className={styles.section}>
      <Reveal className={styles.intro} direction="left">
        <h2 className={styles.heading}>From people who have sat in the chair</h2>
        <p className={styles.subheading}>
          Representative feedback only. See the link below for verified reviews.
        </p>
      </Reveal>

      <Reveal as="ul" className={styles.grid} direction="right" delay={0.08}>
        {testimonials.map((testimonial) => (
          <li key={testimonial.id} className={styles.card}>
            <p className={styles.quote}>{testimonial.quote}</p>
            <div className={styles.attribution}>
              <span className={styles.role}>{testimonial.role}</span>
              <span className={styles.context}>{testimonial.context}</span>
            </div>
          </li>
        ))}
      </Reveal>

      <a
        href={business.ctaLinks.directions}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.profileLink}
      >
        View the Google Business Profile for verified reviews
        <span className="material-symbols-outlined" aria-hidden="true">
          open_in_new
        </span>
      </a>
    </section>
  );
}
