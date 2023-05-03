import React from 'react';
import cl from './blockImage.module.css'

const BlocKImage = (props) => {
    return (
        
        <div style={{ justifyContent: props.jusCont }} className={cl.block_image_item}>
            <img src={props.image} alt="депрессия" />
        </div>
      
        
    );
};

export default BlocKImage;