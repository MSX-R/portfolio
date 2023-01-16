import { React } from "react";
import { useSwiper } from "swiper/react";

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button className="projet-btn-next" onClick={() => swiper.slideNext()}>
      {" >> "}
    </button>
  );
}
