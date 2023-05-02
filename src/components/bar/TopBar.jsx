import React, { useState } from 'react';
import { Link } from "react-router-dom";
import cl from "./TopBar.module.css"
import Logo from '../ui/logo/Logo';

const TopBar = () => {
    const [burgerClass, setBurgerClass] = useState(cl.bar_tool_burger )
    const [menuClass, setMenuClass] = useState(cl.tool_bar_menu )

    const barActive = () => {
        if (burgerClass === cl.bar_tool_burger) {
            setBurgerClass(cl.bar_tool_active); 
            setMenuClass([cl.tool_bar_menu, cl.tool_bar_menu_active].join(' '))    
        } else {
            setBurgerClass(cl.bar_tool_burger); 
            setMenuClass(cl.tool_bar_menu)  
        }
    };


    return (
        <div className= {cl.conteiner__tool} >
            <div className={cl.tool_bar}>
                <div className={cl.bar_icon}>
                  <Logo/>
                </div> 
                <div onClick={barActive} className={burgerClass}></div>           
                <div className={menuClass}> 
                        <Link to="/home"> Главная</Link>                     
                        <Link to="/galery">Галерея</Link>
                        <Link to="/about">О школе</Link>
                        <Link to="/application">Бонус</Link>
                        <a href='#contacts'>Контакты</a>                                          
                </div>
            </div>
        </div>
    );
};

export default TopBar;