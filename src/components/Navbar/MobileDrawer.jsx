import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { business } from '../../data/business';
import { navLinks } from '../../data/navigation';
import styles from './Navbar.module.css';

export default function MobileDrawer({ isOpen, onClose }) {
  const panelRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll(
        'a[href], button:not([disabled])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.drawerBackdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            id="mobile-drawer"
            ref={panelRef}
            className={styles.drawerPanel}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.drawerHeader}>
              <span className={styles.drawerTitle}>Menu</span>
              <button
                type="button"
                ref={closeButtonRef}
                className={styles.drawerClose}
                aria-label="Close navigation menu"
                onClick={onClose}
              >
                <span className="material-symbols-outlined" aria-hidden="true">
                  close
                </span>
              </button>
            </div>

            <nav className={styles.drawerNav} aria-label="Mobile primary">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={styles.drawerLink}
                  onClick={onClose}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className={styles.drawerFooter}>
              <p className={styles.drawerFooterName}>{business.name}</p>
              <p>{business.fullAddress}</p>
              <a href={business.ctaLinks.call} className={styles.drawerFooterPhone}>
                {business.phone.display}
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
