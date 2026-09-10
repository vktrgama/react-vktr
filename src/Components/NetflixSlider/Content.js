import React from 'react';
import IconCross from './../Icons/IconCross';
import './Content.scss';

//TODO: move to config file 
const IMAGE_URI = "https://www.themoviedb.org/t/p/w220_and_h330_face/";

const Content = ({ movie, onClose }) => (
  <div className="content_nf">
    <div className="content_nf__background">
      <div className="content_nf__background__shadow" />
      <div
        className="content_nf__background__image"
        style={{ 'background-image': `url(${IMAGE_URI + movie.poster_path})` }}
      />
    </div>
    <div className="content_nf__area">
      <div className="content_nf__area__container">
        <div className="content_nf__title">{movie.original_title}</div>
        {movie.release_date && (
          <div className="content_nf__release-date">{movie.release_date}</div>
        )}
        <div className="content_nf__description">
          {movie.overview}
        </div>
      </div>
      <button className="content_nf__close" onClick={onClose}>
        <IconCross />
      </button>
    </div>
  </div>
);

export default Content;
