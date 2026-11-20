import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <div id="carouselExample" className="carousel carousel-overlay slide">

      <div className="carousel-inner rounded-5">

        <div className="carousel-item active">
          <img src="image1.jpg" className="d-block w-100" alt="First slide" />
        </div>

        <div className="carousel-item">
          <img src="image2.jpg" className="d-block w-100" alt="Second slide" />
        </div>

        <div className="carousel-item">
          <img src="image3.jpg" className="d-block w-100" alt="Third slide" />
        </div>

      </div>

      <div className="carousel-overlay-controls">

        <div>
          <button
            className="btn-icon btn-sm btn-subtle theme-secondary"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-icon-prev" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="btn-icon btn-sm btn-subtle theme-secondary"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-icon-next" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

      </div>
    </div>
    </>
  );
}