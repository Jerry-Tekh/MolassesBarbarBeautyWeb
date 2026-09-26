import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { faqs } from '../../data/faq';
import styles from './FAQ.module.css';
import Reveal from '../Reveal/Reveal.jsx';

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  return (
    <section className={styles.section}>
      <Reveal className={styles.intro} direction="left">
        <h2 className={styles.heading}>Frequently asked questions</h2>
        <p className={styles.subheading}>
          Straightforward answers about the shop, walk ins, and services.
        </p>
      </Reveal>

      <Reveal as="ul" className={styles.list} direction="right" delay={0.08}>
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <li key={faq.id} className={styles.item}>
              <h3 className={styles.questionHeading}>
                <button
                  type="button"
                  className={styles.question}
                  aria-expanded={isOpen}
                  aria-controls={`${faq.id}-panel`}
                  id={`${faq.id}-trigger`}
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                >
                  <span>{faq.question}</span>
                  <motion.span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    expand_more
                  </motion.span>
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`${faq.id}-panel`}
                    role="region"
                    aria-labelledby={`${faq.id}-trigger`}
                    className={styles.answerWrap}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <p className={styles.answer}>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </Reveal>
    </section>
  );
}
