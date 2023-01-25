import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";
import "swiper/css/bundle";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import "./index.scss";

const FirstSection = () => {
  return (
    <div className="firstSection">
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          //   pagination={{
          //     clickable: true,
          //   }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="firstSec">
              <div className="imgDiv">
                <img
                  src="https://preview.colorlib.com/theme/course/images/slider_background.jpg"
                  alt=""
                />
              </div>
              <div id="container">
                <div className="educationTextBox">
                  <p>Get your</p>
                  <span>
                    <p>Education</p>
                  </span>
                  <p>today</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="firstSec">
              <img
                src="https://preview.colorlib.com/theme/course/images/slider_background.jpg"
                alt=""
              />
              <div id="container">
                <div className="educationTextBox">
                  <p>Get your</p>
                  <span>
                    <p>Education</p>
                  </span>
                  <p>today</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="firstSec">
              <img
                src="https://preview.colorlib.com/theme/course/images/slider_background.jpg"
                alt=""
              />
              <div id="container">
                <div className="educationTextBox">
                  <p>Get your</p>
                  <span>
                    <p>Education</p>
                  </span>
                  <p>today</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="firstSec">
              <img
                src="https://preview.colorlib.com/theme/course/images/slider_background.jpg"
                alt=""
              />
              <div id="container">
                <div className="educationTextBox">
                  <p>Get your</p>
                  <span>
                    <p>Education</p>
                  </span>
                  <p>today</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default FirstSection;
