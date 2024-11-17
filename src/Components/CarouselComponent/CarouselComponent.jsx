import { useState, useRef, useEffect, useCallback } from "react";
import PropTypes from 'prop-types';
import './CarouselComponent.css';

function useTilt(animationDuration = '150ms') {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const unify = (e) => (e.changedTouches ? e.changedTouches[0] : e);

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    let el = ref.current;

    const handleEnterEvent = () => {
      el.style.transition = `transform ${animationDuration} ease-out`;
    };

    const handleMoveEvent = (e) => {
      e.preventDefault();

      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = unify(e).clientX;
      state.mouseY = unify(e).clientY;

      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty('--px', px.toFixed(2));
      el.style.setProperty('--py', py.toFixed(2));
    };

    const handleEndEvent = () => {
      el.style.setProperty('--px', 0.5);
      el.style.setProperty('--py', 0.5);
      el.style.transition = `transform ${animationDuration} ease-in`;
    };

    el.addEventListener('mouseenter', handleEnterEvent);
    el.addEventListener('mousemove', handleMoveEvent);
    el.addEventListener('mouseleave', handleEndEvent);
    el.addEventListener('touchstart', handleEnterEvent);
    el.addEventListener('touchmove', handleMoveEvent);
    el.addEventListener('touchend', handleEndEvent);

    return () => {
      el.removeEventListener('mouseenter', handleEnterEvent);
      el.removeEventListener('mousemove', handleMoveEvent);
      el.removeEventListener('mouseleave', handleEndEvent);
      el.removeEventListener('touchstart', handleEnterEvent);
      el.removeEventListener('touchmove', handleMoveEvent);
      el.removeEventListener('touchend', handleEndEvent);
    };
  }, [animationDuration]);

  return ref;
}

const Slide = ({ image, title, subtitle, description, offset }) => {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        '--offset': offset,
        '--dir': offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      <div
        className="slideContent"
        style={{
          backgroundImage: `url('${image}')`,
        }}
      >
        <div className="slideContentInner">
          {title && (
            <h2 className="slideTitle" dir="auto">
              {title}
            </h2>
          )}
          {subtitle && (
            <h3 className="slideSubtitle" dir="auto">
              {subtitle}
            </h3>
          )}
          {description && (
            <p className="slideDescription" dir="auto">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

Slide.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  offset: PropTypes.number.isRequired,
  isPageBackground: PropTypes.bool,
};

const Carousel = ({ slides, isPageBackground }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handlePrevSlide = useCallback(() => {
    setSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  // const handleNextSlide = () => {
  //   setSlideIndex((prev) => (prev + 1) % slides.length);
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      handlePrevSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [handlePrevSlide]);

  return (
    <div className="slide-div">
      <h3>FEATURED EVENTS</h3>
      <section className="slidesWrapper">
        <div className="slides">

          {[...slides, ...slides, ...slides].map((slide, i) => {
            let offset = slides.length + (slideIndex - i);

            if (typeof slide === 'string') {
              return (
                <Slide image={slide} offset={offset} isPageBackground={isPageBackground} key={i} />
              );
            } else {
              return (
                <Slide
                  image={slide.image}
                  title={slide.title}
                  subtitle={slide.subtitle}
                  description={slide.description}
                  offset={offset}
                  isPageBackground={isPageBackground}
                  key={i}
                />
              );
            }
          })}
        </div>
      </section>
    </div>




  );
};

Carousel.propTypes = {
  slides: PropTypes.array.isRequired,
  isPageBackground: PropTypes.bool,
};

const slides = [
  {
    id: 1,
    title: 'TACTICAL TAKEOVER',
    subtitle: '(BGMI)',
    image: 'Bgmi.jpg',
  },
  {
    id: 2,
    title: 'RUN RIOT',
    subtitle: '(GULLY CRICKET)',
    image: 'gullycricket.webp',
  },
  {
    id: 3,
    title: 'SAKURA SQUARE',
    subtitle: '(LUDO)',
    image: 'https://w0.peakpx.com/wallpaper/669/783/HD-wallpaper-love-ludo-game-naseeb.jpg',
  },
  {
    id: 4,
    title: 'YAKSHA VISMAYA',
    subtitle: '(YAKSHAGANA)',
    image: 'yakshagana.jpg',
  },
  {
    id: 5,
    title: 'HIKARI MATSURI',
    subtitle: '(ANIME QUIZ)',
    image: 'anime.png',
  },
  {
    id: 6,
    title: 'GLOW HUNT',
    subtitle: '(TREASURE HUNT)',
    image: 'treasurehunt.jpg',
  },
  {
    id: 7,
    title: 'EYES OF, CODE ON!',
    subtitle: '(BLIND CODING)',
    image: 'https://cdn.pixabay.com/video/2023/07/21/172655-847860558_tiny.jpg',
  },
  {
    id: 8,
    title: 'FLAUNT AND FLOW',
    subtitle: '(FASHION WALK)',
    image: 'fashionwalk.webp',
  },
];

const CarouselComponent = () => <Carousel slides={slides} isPageBackground />;

export default CarouselComponent;