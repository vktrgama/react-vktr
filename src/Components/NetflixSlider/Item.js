import React from 'react';
import cx from 'classnames';
import SliderContext from './context'
import Mark from './Mark'
import './Item.scss'

//TODO: move to config file 
const IMAGE_URI = "https://www.themoviedb.org/t/p/w220_and_h330_face/";

const Item = ({ movie }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === movie.id;

      return (
        <div
          ref={elementRef}
          className={cx('item', {
            'item--open': isActive,
          })}
        >
          <button
            type="button"
            className="item__poster-button"
            onClick={() => onSelectSlide(movie)}
          >
            <img src={IMAGE_URI + movie.poster_path} alt={movie.original_title || ''} />
          </button>
          {isActive && <Mark />}
        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;
