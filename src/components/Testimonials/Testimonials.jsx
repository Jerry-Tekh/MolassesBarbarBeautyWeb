import { business } from '../../data/business';
import styles from './Testimonials.module.css';
import Reveal from '../Reveal/Reveal.jsx';

const testimonials = [
  {
    id: 'review-1',
    quote: 'First timer made to feel welcomed.',
    name: 'Customer review',
    detail: 'Posted December 2023',
  },
  {
    id: 'review-2',
    quote: 'The shape up was perfect.',
    name: 'Customer review',
    detail: 'Posted December 2023',
  },
  {
    id: 'review-3',
    quote: 'Loved, loved her work.',
    name: 'Customer review',
    detail: 'Posted October 2022',
  },
];

const reviewSource = 'https://www.bestprosintown.com/ga/atlanta/molasses-barber-and-beauty-/';

export default function Testimonials() {
  return (
    <section id="reviews" className={styles.section}>
      <Reveal className={styles.intro} direction="left">
        <h2 className={styles.heading}>Good words from the community</h2>
        <p className={styles.subheading}>
          A few notes from customers about the welcome, the cuts, and the styling.
        </p>
      </Reveal>

      <Reveal as="ul" className={styles.grid} direction="right" delay={0.08}>
        {testimonials.map((testimonial) => (
          <li key={testimonial.id} className={styles.card}>
            <p className={styles.quote}>&ldquo;{testimonial.quote}&rdquo;</p>
            <div className={styles.attribution}>
              <span className={styles.role}>{testimonial.name}</span>
              <span className={styles.context}>{testimonial.detail}</span>
            </div>
          </li>
        ))}
      </Reveal>

      <a href={reviewSource} target="_blank" rel="noopener noreferrer" className={styles.profileLink}>
        Read more customer reviews
        <span className="material-symbols-outlined" aria-hidden="true">open_in_new</span>
      </a>
      <a href={business.ctaLinks.call} className={styles.profileLink}>
        Call {business.phone.display}
        <span className="material-symbols-outlined" aria-hidden="true">call</span>
      </a>
    </section>
  );
}
