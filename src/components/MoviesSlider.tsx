import { useMovies } from "@/context/MoviesContext";
import { useState } from "react";
import Slider from "react-slick";
const IMG = `${import.meta.env.VITE_IMG}`;
export function MoviesSlider() {
  const { topRatedMovies } = useMovies();

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="p-2">
      {topRatedMovies.map((movie, index) => (
        <div key={index + 1} className="h-[500px] p-2">
          <div className="flex flex-col justify-center items-center ">
            <img
              className="h-[450px] "
              src={`${IMG}${movie.poster_path}`}
              alt={movie.original_title}
            />
            <span>{movie.title}</span>
          </div>
        </div>
      ))}
    </Slider>
  );
}
