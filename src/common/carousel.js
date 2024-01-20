import React from "react";
import Carousel from "react-grid-carousel";
import img1 from "../assets/images/user-img-1.png";
import img2 from "../assets/images/user-img-2.png";
import stars from "../assets/images/stars.png";

export const Gallery = () => {
  return (
    <Carousel showDots={true} hideArrow={true} cols={2} rows={1} gap={40} loop>
      <Carousel.Item>
        <div className="bg-[#fff] p-[42px] mb-[42px]">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img className="mr-[15px]" src={img1} />
              <p className="text-[20px] font-ArialB">Chi R. Quinlan</p>
            </div>

            <div>
              <img src={stars} />
            </div>
          </div>

          <div>
            <p className="text-[17px] mt-[22px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="bg-[#fff] p-[42px] mb-[42px]">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img className="mr-[15px]" src={img2} />
              <p className="text-[20px] font-ArialB">Chi R. Quinlan</p>
            </div>

            <div>
              <img src={stars} />
            </div>
          </div>

          <div>
            <p className="text-[17px] mt-[22px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="bg-[#fff] p-[42px] mb-[42px]">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img className="mr-[15px]" src={img1} />
              <p className="text-[20px] font-ArialB">Chi R. Quinlan</p>
            </div>

            <div>
              <img src={stars} />
            </div>
          </div>

          <div>
            <p className="text-[17px] mt-[22px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="bg-[#fff] p-[42px] mb-[42px]">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img className="mr-[15px]" src={img2} />
              <p className="text-[20px] font-ArialB">Chi R. Quinlan</p>
            </div>

            <div>
              <img src={stars} />
            </div>
          </div>

          <div>
            <p className="text-[17px] mt-[22px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="bg-[#fff] p-[42px] mb-[42px]">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img className="mr-[15px]" src={img1} />
              <p className="text-[20px] font-ArialB">Chi R. Quinlan</p>
            </div>

            <div>
              <img src={stars} />
            </div>
          </div>

          <div>
            <p className="text-[17px] mt-[22px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="bg-[#fff] p-[42px] mb-[42px]">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img className="mr-[15px]" src={img2} />
              <p className="text-[20px] font-ArialB">Chi R. Quinlan</p>
            </div>

            <div>
              <img src={stars} />
            </div>
          </div>

          <div>
            <p className="text-[17px] mt-[22px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};
