import React from 'react';
import { Link } from 'react-router-dom';
import cl from "../button/myButtom.module.css"

const MyButtonBlue = (props) => {
    return (
        <div className={cl.container_btn}>
            <div className={[cl.btn, cl.btn_blue].join(' ')}><Link to={props.toBtn}>{props.textBtn}</Link></div>

        </div>
    );
};

export default MyButtonBlue;