import React, { useEffect, useRef, useState } from 'react';
import cl from './blockImage.module.css'

const BlocKImage = (props) => {
    const [active, setActive] = useState('')
    const firstEllement = useRef()
    const observer = useRef()

    useEffect(() => {
        var callback = function (entries, observer) {
            if (entries[0].isIntersecting) {
                setActive("pops_up_box")
            }
        }
        observer.current = new IntersectionObserver(callback)
        observer.current.observe(firstEllement.current)},[])
        

    useEffect(() => {
        console.log(active);
    }, [active])

    return (
        
        <div ref={firstEllement} style={{ justifyContent: props.jusCont }} className={[cl.block_image_item, active ].join(" ")}>
            {props.image.map(element=>
                <img key={element} src={element} alt="Фото" />
               )
             }          
        </div>
      
        
    );
};

export default BlocKImage;

