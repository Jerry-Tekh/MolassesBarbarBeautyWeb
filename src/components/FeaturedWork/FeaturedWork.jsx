import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { galleryImages } from '../../data/media';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import styles from './FeaturedWork.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedWork() {
  const rootRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    const ctx = gsap.context(() => {
      ScrollTrigger.batch('[data-gallery-item]', {
        start: 'top 85%',
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            stagger: 0.12,
          }),
      });
    }, rootRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section id="work" ref={rootRef} className={styles.section}>
      <div className={styles.intro}>
        <h2 className={styles.heading}>Let the work speak</h2>
        <p className={styles.subheading}>
          Real cuts, sharp lines, and hair artistry from our {`Kirkwood`} chairs.
        </p>
      </div>

      <ul className={styles.grid}>
        {galleryImages.map((image) => (
          <li
            key={image.id}
            data-gallery-item
            className={styles.item}
            style={prefersReducedMotion ? undefined : { opacity: 0, transform: 'translateY(24px)' }}
          >
            <div className={styles.imageWrap}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </div>
            <div className={styles.caption}>
              <span className={styles.captionTitle}>{image.caption}</span>
              <span className={styles.captionDetail}>{image.detail}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
