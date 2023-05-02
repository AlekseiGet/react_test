import React from 'react';
import cl from "./logo.module.css"

const Logo = () => {
    return (
        <div className={cl.logo}>
            <div className={cl.stryng_top}>
                <span className={cl.bar_icon_first}>Р</span><span className={cl.bar_icon_second}>азумное</span>
                </div>      
                
            <div className={cl.stryng_bottom}>
                <span className={cl.bar_icon_first}> Т</span><span className={cl.bar_icon_second}>ело</span>
            </div>
                
        
        </div>
    );
};

export default Logo;