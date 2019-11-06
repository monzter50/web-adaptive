import React, { Component } from "react";
import Swiper from "swiper";
class Slider extends Component {
  componentDidMount() {
    new Swiper(".swiper-container", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
  render() {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
                <picture className="object-cover h-48 w-full">
                    <source media="(max-width: 767px)"  srcSet="https://via.placeholder.com/412X243"/>
                    <source media="(min-width: 768px)" srcSet="https://via.placeholder.com/412X243"/>
                    <img src="https://via.placeholder.com/412X243" alt="Caribbean Dreams" className="object-cover h-48 w-full"/>
                </picture>
            </div>
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    );
  }
}
export default Slider