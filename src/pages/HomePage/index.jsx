import React from "react";

import superheroImage1 from "../../assets/superhero-id1.webp";
import superheroImage2 from "../../assets/superhero-id8.webp";
import superheroImage3 from "../../assets/superhero-id20.webp";
import superheroImage4 from "../../assets/superhero-id28.webp";
import superheroImage5 from "../../assets/superhero-id45.webp";
import superheroImage6 from "../../assets/superhero-id60.webp";

export default function HomePage() {
  return (
    <>
      <div className="welcome">
        <h1>Welcome to HeroVerse</h1>
        <p>
          Discover new superheros or search for your favourites and explore
          their amazing powers. Then, play the ultimate superhero battle!
        </p>
      </div>
      <div className="carousel-layout">
        <div className="carousel-side-controls">
          <button
            className="btn-icon btn-sm btn-subtle theme-secondary"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            &lt;
          </button>
        </div>

        <div
          id="carouselExample"
          className="carousel carousel-overlay slide"
          data-bs-ride="carousel"
          data-bs-interval="4000"
        >
          <div className="carousel-inner rounded-5">
            <div className="carousel-item active">
              <img
                src={superheroImage1}
                className="d-block w-100"
                alt="First slide"
              />
            </div>

            <div className="carousel-item">
              <img
                src={superheroImage2}
                className="d-block w-100"
                alt="Second slide"
              />
            </div>

            <div className="carousel-item">
              <img
                src={superheroImage3}
                className="d-block w-100"
                alt="Third slide"
              />
            </div>

            <div className="carousel-item">
              <img
                src={superheroImage4}
                className="d-block w-100"
                alt="Fourth slide"
              />
            </div>

            <div className="carousel-item">
              <img
                src={superheroImage5}
                className="d-block w-100"
                alt="Fifth slide"
              />
            </div>

            <div className="carousel-item">
              <img
                src={superheroImage6}
                className="d-block w-100"
                alt="Sixth slide"
              />
            </div>
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

            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>

            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>

            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button>
          </div>
        </div>

        <div className="carousel-side-controls">
          <button
            className="btn-icon btn-sm btn-subtle theme-secondary"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            &gt;
          </button>
        </div>
      </div>
    </>
  );
}
