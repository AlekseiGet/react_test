import React, { useEffect } from 'react';
import cl from '../css/about.module.css'
import Block from '../components/box/Block';
import fon_1 from "../img/photo_2023-03-08_07-48-48.jpg"
import SliderFon from '../components/sliderFon/SliderFon';
import BlockText from '../components/box/BlockText';

const About = () => {

    useEffect(() => {
      document.documentElement.scrollIntoView(true);
    }, []);

    
    return (
        <div >
          <Block
                title={'Сейчас мы вам всё расскажем о себе :'}
                text={{
                    1: ''}}
          />

          <SliderFon
                image={fon_1}
                title={`Освойте древнейшие практики, верните молодость и энергию, занимаясь йогой`}
                text={`Опыт тысячелетий и научный подход в форме простых, доступных уроков и практических заданий`}
                position={'left'}  
          />

            <Block
                title={'Товарищи! реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации модели развития. '}
                text={{
                    1: ''
                }}
            />

            <BlockText/>
          
        </div>
    );
};

export default About;