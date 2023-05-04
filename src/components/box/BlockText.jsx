import React, { useState } from 'react';
import cl from "./block.module.css";
import { CSSTransition } from 'react-transition-group';

const BlockText = () => {

    const[show, setShow] = useState(false)
 

    return (
        <div className={cl.conteiner_box}>
            <div className="content">
                <div className={[cl.conteiner_box_list, 'pops_up_box'].join(" ")}>
                    <h3>Здесь о том как появилась школа йоги</h3>
                    <span> О том сколько лет .... оседлое население Орды включало волжских булгар, мордовские народы, славян, греков и др. Среди кочевых народов были половцы, канглыи, татары, туркмены, киргизы и другие.</span>
                    <span>дипломы</span>
                    <span>И в заключении... Расширение государства на юг привело к столкновению с могущественной Хазарией, центр которой располагался на нижней Волге. Князь Святослав нанёс хазарам сокрушительный удар в 965 году. Его мать княгиня Ольга в частном порядке приняла христианство, а её внук Владимир окончательно закрепил христианство на Руси в 988 году.</span>

                </div>
            </div>
           
           <section>
            <h1 onClick={()=> setShow(!show)} >{show? "скрыть": "Показать" } время </h1>

            <CSSTransition in={show} classNames="alert" timeout={2300} unmountOnExit>
                    <span>дипломы</span>
            </CSSTransition>

           </section>
        </div>
    );
};

export default BlockText;