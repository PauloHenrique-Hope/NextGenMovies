import { useSeries } from "@/context/PopularSeriesContext";
import Slider from "react-slick";
const IMG = `${import.meta.env.VITE_IMG}`;
export function PopularSeriesSlider() {
  const { popularSeries } = useSeries();

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
      {popularSeries.map((serie, index) => (
        <div key={index + 1} className="h-[700px] p-2">
          <div className="flex flex-col justify-center items-center ">
            <img
              className="h-[450px] "
              src={`${IMG}${serie.poster_path}`}
              alt={serie.name}
            />
            <span>{serie.original_name}</span>
          </div>
        </div>
      ))}
    </Slider>
  );
}
