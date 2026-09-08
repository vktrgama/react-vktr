import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Splash.scss';

const SLIDE_INTERVAL_MS = 5000;

const slides = [
  {
    image: 'images/index_slide01.jpg',
    title: 'Victor Gama',
    subtitle: 'Staff Software Engineer',
  },
  {
    image: 'images/index_slide02.jpg',
    title: 'Full Stack',
    subtitle: 'Engineering',
  },
];

function Splash() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div class="hdr-wrap">
      <div class="hero">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            class={`hero__slide${index === activeIndex ? ' hero__slide--active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div class="hero__caption">
              <div class="hero__caption-inner">
                <embed class="hero__logo" src="images/logo.svg" />
                <h2 class="hero__title">{slide.title}</h2>
                <p class="hero__subtitle">{slide.subtitle}</p>
                <div class="hero__cta">
                  <NavLink class="btn1" to="/about">more info</NavLink>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Splash;
