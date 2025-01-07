import { useMovies } from "@/context/MoviesContext";
import Slider from "react-slick";
const IMG = `${import.meta.env.VITE_IMG}`;
export function MoviesSlider() {
  const { topRatedMovies } = useMovies();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const arrNumbers = Array.from({ length: 5 }, (_, i) => i + 1);

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
