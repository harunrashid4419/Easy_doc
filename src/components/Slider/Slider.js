import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";
import quote from "../../assets/right-quote.png";

import { EffectCoverflow, Pagination } from "swiper";

const Slider = () => {
  const datas = [
    {
      name: "alison",
      time: 2,
      rating: 4.5,
      description:
        " In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available ",
    },
    {
      name: "ederson",
      time: 3,
      rating: 5.0,
      description:
        " In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available ",
    },
    {
      name: "ederson",
      time: 3,
      rating: 5.0,
      description:
        " In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available ",
    },
    {
      name: "ederson",
      time: 3,
      rating: 5.0,
      description:
        " In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available ",
    },
    {
      name: "ederson",
      time: 3,
      rating: 5.0,
      description:
        " In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available ",
    },
    {
      name: "ederson",
      time: 3,
      rating: 5.0,
      description:
        " In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available ",
    },
    {
      name: "paolo",
      time: "11.30",
      rating: 5,
      description:
        " In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available ",
    },
    {
      name: "paolo",
      time: "11.30",
      rating: 5,
      description:
        " In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available ",
    },
    {
      name: "paolo",
      time: "11.30",
      rating: 5,
      description:
        " In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available ",
    },
    {
      name: "paolo",
      time: "11.30",
      rating: 5,
      description:
        " In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available ",
    },
  ];
  return (
    <div>
      <div className="container flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold pt-4">What people say</h2>
        <h4 className="text-gray-600 p-2">We care about your opinion</h4>
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 5,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {datas.map((data, i) => (
          <SwiperSlide key={i}>
            <div className="container flex flex-col-reverse shadow-2xl shadow-indigo-500/50 w-full max-w-lg p-6 mx-auto  rounded-xl   bg-white text-gray-800">
              <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                  <div>
                    <img
                      src="https://source.unsplash.com/100x100/?portrait"
                      alt=""
                      className="object-cover w-12 h-12 rounded-full bg-gray-300"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-600">{data.name}</h4>
                    <span className="text-xs text-gray-700">
                      {" "}
                      {data.time} days ago
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-blue-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                  </svg>
                  <span className="text-xl font-bold">{data.rating}</span>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm text-gray-400">
                <p>{data.description}</p>
              </div>
              <div className="flex justify-end p-2">
                {" "}
                <img src={quote} alt="" />{" "}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
