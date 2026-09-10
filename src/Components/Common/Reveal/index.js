import { useEffect, useState } from 'react';
import './reveal.css';

function Reveal({ as: Element = 'div', children, className = '', delay = 0, direction = 'left' }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setHasMounted(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <Element
      className={`reveal reveal--${direction} ${hasMounted ? 'reveal--visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </Element>
  );
}

export default Reveal;
