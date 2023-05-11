import React, { useEffect } from 'react';
import errrorImage from '../img/error.jpg'
import SliderFon from '../components/sliderFon/SliderFon';

const Error = () => {

    useEffect(() => {
      document.documentElement.scrollIntoView(true);
    }, []);
    return (
      <div>
        <SliderFon
          image={errrorImage}
        />
      </div>
    );
};

export default Error;