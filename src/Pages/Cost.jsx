import React, { useEffect } from 'react';
import fon from "../img/relaks_yoga.gif";
import cl from "../components/sliderFon/sliderFon.module.css"
import SliderFon from '../components/sliderFon/SliderFon';

const Cost = () => {

    useEffect(() => {
      document.documentElement.scrollIntoView(true);
    }, []);
    return (
      <div>
        <div className={cl.cbp_fbscroller}>
          <section
            style={{ backgroundImage: `url(${fon})` }}
            className={cl.fbsection1}
          >
            <div
              style={{ alignItems: "center" }}
              className={[cl.content_box, "content"].join(" ")}
            >
              <h2>СТОИМОСТЬ КУРСА</h2>
              <span>занятий в йога центре "Разумное тело"</span>

              <div className={cl.cost_box}>
                <div className={cl.cost_holder}>
                  <div className={cl.cost_holder_title}></div>
                  <div className={cl.cost_holder_body}></div>
                </div>

                <div className={cl.cost_holder}>
                  <div className={cl.cost_holder_title}></div>
                  <div className={cl.cost_holder_body}></div>
                </div>

                <div className={cl.cost_holder}>
                  <div className={cl.cost_holder_title}></div>
                  <div className={cl.cost_holder_body}></div>
                </div>

                <div className={cl.cost_holder}>
                  <div className={cl.cost_holder_title}></div>
                  <div className={cl.cost_holder_body}></div>
                </div>

                                <div className={cl.cost_holder}>
                  <div className={cl.cost_holder_title}></div>
                  <div className={cl.cost_holder_body}></div>
                </div>
              </div>
            </div>
            
          </section>
        </div>
      </div>
    );
};

export default Cost;