import { motion, useReducedMotion } from 'framer-motion';

export default function Reveal({ as = 'div', direction = 'left', delay = 0, children, ...props }) {
  const shouldReduceMotion = useReducedMotion();
  const MotionElement = motion[as] || motion.div;

  if (shouldReduceMotion) {
    return <MotionElement {...props}>{children}</MotionElement>;
  }

  const offset = direction === 'right' ? 32 : -32;

  return (
    <MotionElement
      {...props}
      initial={{ opacity: 0, x: offset }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionElement>
  );
}