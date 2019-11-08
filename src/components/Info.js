import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Info = () => {
  return (
    <section className="my-2 container mx-auto px-1">
      <h1 className="text-2xl text-center">12 meses sin intereses</h1>
      <ul className="payment-list">
        <li className="compropago payment-icons">
          <i>
            <img
              className=""
              alt=""
              src="//www.xcaret.com//img/bancos/american.png"
            />
          </i>
        </li>
        <li className="compropago payment-icons">
          <i>
            <img
              className=""
              alt=""
              src="//www.xcaret.com//img/bancos/visa.png"
            />
          </i>
        </li>
        <li className="compropago payment-icons">
          <i>
            <img
              className=""
              alt=""
              src="//www.xcaret.com//img/bancos/mastercard.png"
            />
          </i>
        </li>
        <li className="compropago payment-icons">
          <i>
            <img
              className=""
              alt=""
              src="//www.xcaret.com//img/bancos/discover.png"
            />
          </i>
        </li>
        <li className="compropago payment-icons">
          <i>
            <img
              className=""
              alt=""
              src="//www.xcaret.com//img/bancos/diners.png"
            />
          </i>
        </li>
        <li className="compropago payment-icons">
          <i>
            <img
              className=""
              alt=""
              src="//www.xcaret.com//img/bancos/paypal.png"
            />
          </i>
        </li>
      </ul>

      <p>Con los principio bancos y tarjetas emitidas en Mexico.</p>
      <p>
        **No aplica Paypal <b>Mas informacion</b>.
      </p>
      <div className="text-center my-2">
        <FontAwesomeIcon icon="envelope-open" size="6x" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisi
          nulla, tincidunt quis elementum a, aliquet euismod enim.
        </p>
        <div className="flex">
          <button className="btn btn--dark">Subcribirse</button>
        </div>
      </div>
      <div className="flex my-2">
      <FontAwesomeIcon icon="mobile-alt" size="6x" className="icon-brand"/>
        <div className="sm:ml-3">
           
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            nisi nulla, tincidunt quis elementum a, aliquet euismod enim.
          </p>
          <p className="flex items-center theme--dark my-2 p-1 max-w-sm">
          
            <FontAwesomeIcon icon={["fab", "google-play"]} size="3x"  className="icon-brand" />
            <span className="text-lg">Disponible<br/> <b>Google play</b></span>
          </p>
          <p className="flex items-center theme--dark my-2 p-1 max-w-sm">
            <FontAwesomeIcon icon={["fab", "apple"]} size="3x" className="icon-brand"/>
            <span className="text-lg">Disponible<br/> <b> apple</b></span>
          </p>
        </div>
      </div>
    </section>
  );
};
export default Info;
