import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { business } from '../../data/business';
import { heroImage } from '../../data/media';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import styles from './Hero.module.css';

export default function Hero() {
  const rootRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
      });

      tl.from('[data-hero="badge"]', { opacity: 0, y: 12, duration: 0.5 })
        .from(
          '[data-hero="headline"]',
          { opacity: 0, y: 28, duration: 0.7 },
          '-=0.25'
        )
        .from(
          '[data-hero="copy"]',
          { opacity: 0, y: 20, duration: 0.6 },
          '-=0.4'
        )
        .from(
          '[data-hero="ctas"]',
          { opacity: 0, y: 16, duration: 0.5 },
          '-=0.35'
        )
        .from(
          '[data-hero="image"]',
          { opacity: 0, scale: 1.04, duration: 0.9, ease: 'power2.out' },
          '-=0.6'
        );
    }, rootRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section id="home" ref={rootRef} className={styles.hero}>
      <div className={styles.badgeRow} data-hero="badge">
        <span className={styles.badge}>
          <span className={styles.badgeDot} aria-hidden="true" />
          {business.neighborhood}, {business.city}
        </span>
        <span className={styles.badgeSecondary}>Walk ins welcome</span>
        <span className={styles.badgeSecondary}>Kid friendly</span>
      </div>

      <h1 className={styles.headline} data-hero="headline">
        Come through.
        <br />
        <span className={styles.headlineAccent}>Leave fresh.</span>
      </h1>

      <p className={styles.copy} data-hero="copy">
        {business.tagline} Pull up, get in a chair, and get dialed in.
      </p>

      <div className={styles.ctas} data-hero="ctas">
        <a href={business.ctaLinks.call} className={styles.primaryCta}>
          <span className="material-symbols-outlined" aria-hidden="true">
            call
          </span>
          Call the shop {business.phone.display}
        </a>
        <a
          href={business.ctaLinks.directions}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.secondaryCta}
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            near_me
          </span>
          Get directions
        </a>
      </div>

      <div className={styles.imageFrame} data-hero="image">
        <img
          src={heroImage.src}
          alt={heroImage.alt}
          className={styles.image}
          fetchpriority="high"
        />
        <div className={styles.imageCaption}>
          <span className={styles.imageCaptionEyebrow}>{business.address.line1}</span>
          <p>Master craft and genuine greetings in the heart of {business.neighborhood}.</p>
        </div>
      </div>
    </section>
  );
}
