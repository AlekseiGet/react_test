import React, { useState } from 'react';
import cl from "../css/galery.module.css"
import SliderGalery from '../components/sladerGalery/SliderGalery';


const Galery = () => {
    

    return (
        <div >
          <h1>Галерея</h1>
           <SliderGalery/>
        </div>
    );
};

export default Galery;