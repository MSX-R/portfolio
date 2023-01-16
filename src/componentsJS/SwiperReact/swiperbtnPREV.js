import { React } from "react";
import { useSwiper } from "swiper/react";

export default function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <button className="projet-btn-prev" onClick={() => swiper.slidePrev()}>
      {" << "}
    </button>
  );
}
