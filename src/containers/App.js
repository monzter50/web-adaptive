import React from 'react';
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faPhone, faShoppingCart,faGlobe } from '@fortawesome/free-solid-svg-icons'

library.add(faGlobe, faUser, faPhone, faShoppingCart)
function App() {
  return (
    <>
      <Navbar/>
      <Slider/>
    </>
  );
}

export default App;
