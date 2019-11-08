import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Form from "../components/Form";
import Tab from "../components/Tab";
import CardSwipe from "../components/CardSwipe";
import Info from "../components/Info";
import Footer from "../components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGooglePlay,faApple } from '@fortawesome/free-brands-svg-icons';
import {
  faUser,
  faPhone,
  faShoppingCart,
  faGlobe,
  faBus,
  faUtensils,
  faCamera,
  faEnvelopeOpen,
  faMobileAlt,
  
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faGlobe,
  faUser,
  faPhone,
  faShoppingCart,
  faBus,
  faUtensils,
  faCamera,
  faEnvelopeOpen,
  faMobileAlt,
  faGooglePlay,
  faApple
);
function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <Tab />
      <section className="container mx-auto px-1 ">
        <Form />
      </section>
      <Tab />
      <section className="my-2 container mx-auto px-1">
        <article>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            nisi nulla, tincidunt quis elementum a, aliquet euismod enim. Ut
            feugiat eros non dapibus condimentum. Donec nibh risus, tincidunt
            vitae aliquam ut, hendrerit id diam. Suspendisse potenti. Nunc at
            odio sit amet neque ultricies euismod eget a odio. Maecenas id justo
            eros. Integer non dapibus diam. Aliquam vitae massa sit amet sem
            eleifend varius. Vivamus mollis ornare dolor, a ornare orci
            scelerisque id.
          </p>
          <p className="font-semibold my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            nisi nulla, tincidunt quis elementum a, aliquet euismod enim.
          </p>
        </article>
      </section>

     
        <CardSwipe />
      <Info/>
      <Footer/>

    </>
  );
}

export default App;
