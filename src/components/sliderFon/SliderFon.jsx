import React, { useEffect, useState } from 'react';
import cl from './sliderFon.module.css';
import background from "../../img/photo_2022-08-11_21-21-17.jpg";
import Aos from "aos";
import "aos/dist/aos.css"; 

const SliderFon = (props) => {
 
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])
    return (
        <div >
            <div className={cl.cbp_fbscroller}>
                <section  style={{ backgroundImage: `url(${props.image})` }} className={cl.fbsection1} >
                    <div style={{ alignItems: props.position }} className={[cl.content_box, 'content'].join(' ')}>
                        <h2 data-aos="fade-up" >{props.title}</h2>
                        <span data-aos="fade-up" >{props.text}</span>
                    </div>                    
                </section>
            </div>
        </div>
    );
};

export default SliderFon;