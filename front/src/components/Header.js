import React from "react";
import { Link } from "react-router-dom";
import EventForm from "../components/EventForm/EventForm";

function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo" >
                    <img src="images/lotop-dlya-stroitelnoy-kompanii-1024x576.jpg"  alt=""/>
                </div>
                <h1 className="header-title">Строительство домов</h1>
                <nav className="header-nav">
                    <ul className="header-menu">
                        <li><Link to="/" className="header-link">Главная</Link></li>
                        <li><Link to="/reviews" className="header-link">Отзывы</Link></li>
                        <li><Link to="/about" className="header-link">О нас</Link></li>
                        <li><Link to="/contact" className="header-link">Контакты</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
