import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Form = () => {
  return (
    <form className="form my-2">
      <div className="form__container py-1 ">
        <h1 className="text-2xl text-center">
          12 meses
          <br /> sin intereses
        </h1>
        <div className="form__group">
          <p className="flex flex-col">
            <label className="text-center" for="">
              Adultos
              <br /> 90USD
            </label>
            <input className='form__input' type="text" />
          </p>
          <p className="flex flex-col">
            <label className="text-center" for="">
              Child
              <br /> 90USD
            </label>
            <input className='form__input' type="text" />
          </p>
        </div>
        <div class="flex flex-col my-2">
            <input type="date" className="form__input" data-icon="calendar"/>
        </div>
        <div className="flex flex-col my-2">
          <div className='layout-add'>
            <button className="btn btn--default">Agregar <FontAwesomeIcon icon="bus" /> transporte</button>
            <button className="btn btn--default">Info</button>
          </div>
          <div className='layout-add'>
            <button className="btn btn--default">Agregar <FontAwesomeIcon icon="utensils" /> alimentos y bebidas</button>
            <button className="btn btn--default">Info</button>
          </div>
          <div className='layout-add'>
            <button className="btn btn--default">Agregar <FontAwesomeIcon icon="camera" /> Fotopass</button>
            <button className="btn btn--default">Info</button>
          </div>
        </div>
        <div className='my-1'>
          <h1 className="text-2xl text-center">Total $900 USD</h1>
          <small className="block text-center">*Precios parecidos</small>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold btn">
            Agregar al carrito
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold btn">
            Pagar
          </button>
        </div>
        <div className='flex'>
            <button className="btn btn--default ">Ver descuentos y beneficios</button>

        </div>
      </div>
    </form>
  );
};
export default Form