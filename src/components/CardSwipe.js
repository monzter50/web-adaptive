import React, { Component } from "react";
import Swiper from "swiper";
class CardSwipe extends Component {
  componentDidMount() {
    new Swiper(".swiper-card", {
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 10,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }
  render() {
    return (
      <section className="my-2 container mx-auto px-1">
      <div className="swiper-container swiper-card">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="card">
                <img src='https://via.placeholder.com/412X243' alt="Me waving hello" className='object-cover  h-full w-full'/>
            </div>
        </div>
          <div className="swiper-slide">
          <div className="card">
                <img src='https://via.placeholder.com/412X243' alt="Me waving hello" className='object-cover h-full w-full'/>
            </div>
            </div>
          <div className="swiper-slide">
          <div className="card">
                <img  className="object-cover  h-full w-full" src="https://via.placeholder.com/412X243" alt="Me waving hello"/>
            </div>
            </div>
        </div>
      </div>
      </section>

    );
  }
}
export default CardSwipe;
