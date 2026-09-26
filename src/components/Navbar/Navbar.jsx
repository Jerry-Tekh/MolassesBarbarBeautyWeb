import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { business } from '../../data/business';
import { navLinks } from '../../data/navigation';
import MobileDrawer from './MobileDrawer.jsx';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!headerRef.current) return;
    gsap.to(headerRef.current, {
      duration: 0.35,
      ease: 'power2.out',
      boxShadow: isScrolled
        ? '0 1px 16px rgba(44,30,23,0.1)'
        : '0 1px 16px rgba(44,30,23,0)',
    });
  }, [isScrolled]);

  return (
    <>
      <header ref={headerRef} className={styles.header}>
        <div className={styles.announcement}>
          <span className={styles.dot} aria-hidden="true" />
          <span>{business.neighborhood}, {business.city}</span>
          <span className={styles.announcementSecondary}>Walk ins welcome</span>
        </div>
        <div className={styles.bar}>
          <a href="#home" className={styles.brand}>
            <span className={styles.brandMark}>M</span>
            <span className={styles.brandName}>{business.shortName}</span>
          </a>

          <nav className={styles.navDesktop} aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className={styles.actions}>
            <a href={business.ctaLinks.call} className={styles.callButton}>
              <span className="material-symbols-outlined" aria-hidden="true">
                call
              </span>
              <span className={styles.callButtonLabel}>Call the shop</span>
            </a>
            <button
              type="button"
              className={styles.menuToggle}
              aria-label="Open navigation menu"
              aria-expanded={isDrawerOpen}
              aria-controls="mobile-drawer"
              onClick={() => setIsDrawerOpen(true)}
            >
              <span className="material-symbols-outlined" aria-hidden="true">
                menu
              </span>
            </button>
          </div>
        </div>
      </header>

      <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}
