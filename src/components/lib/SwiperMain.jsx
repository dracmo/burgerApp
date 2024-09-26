// @ts-nocheck
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRef } from "react";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

export default ({
  children,
  controls = false,
  className,
  swiperOptions = {},
  restProps,
}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [render, setRender] = useState(0);

  const handlePrevClick = (event) => {
    event.stopPropagation();
    setRender(render + 1);
  };

  const handleNextClick = (event) => {
    event.stopPropagation();
    setRender(render + 1);
  };
  return (
    <div className={`relative w-full h-full ${className}`}>
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log("swiper is", swiper)}
        {...swiperOptions}
        {...restProps}
        className="h-full"
      >
        {children}
      </Swiper>
      {controls && (
        <>
          <button
            ref={prevRef}
            onClick={handlePrevClick}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 rounded-lg bg-black bg-opacity-10 text-white p-4 z-10"
          >
            <ChevronLeftIcon className="size-6" />
          </button>
          <button
            ref={nextRef}
            onClick={handleNextClick}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-lg   bg-black bg-opacity-10 text-white p-4 z-10"
          >
            <ChevronRightIcon className="size-6" />
          </button>
        </>
      )}
    </div>
  );
};
