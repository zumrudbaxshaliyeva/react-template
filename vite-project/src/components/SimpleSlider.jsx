import Slider from "react-slick";
import Image from "./Image";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const PrevArrow = ({ onClick }) => (
  <button className="custom-arrow prev-arrow button-carousel-left" onClick={onClick}>
    <FaArrowLeft />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button className="custom-arrow next-arrow button-carousel-right" onClick={onClick}>
    <FaArrowRight />
  </button>
);
function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="carousel">
          <img src={Image.carousel1} alt="" />
        </div>
        <div className="carousel">
          <img src={Image.carousel2} alt="" />
        </div>
        <div className="carousel">
          <img src={Image.carousel3} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
