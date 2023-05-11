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
      <div className={cl.conteiner__tool}>
        <div className={cl.tool_bar}>
          <div className={cl.bar_icon}>
            <Logo />
          </div>
          <div onClick={barActive} className={burgerClass}></div>
          <div onClick={barActive} className={menuClass}>
            <Link onClick={barActive} to="/home">
              Главная
            </Link>
            <Link onClick={barActive} to="/galery">
              Галерея
            </Link>
            <Link onClick={barActive} to="/about">
              О школе
            </Link>
            <Link onClick={barActive} to="/application">
              Занятия
            </Link>
            <a onClick={barActive} href="#contacts">
              Контакты
            </a>
          </div>
        </div>
      </div>
    );
};

export default TopBar;