import React from "react";
import Form from "../components/Form";

function Contact() {
    return (
        <div>
            <Form/>
            <h2>Контакты</h2>
            <img src="/images/orig.png" alt=""/>
            <p>Адрес:
                г. Москва, ул. Примерная д. 10

                Телефон:
                8 (999) 177-17-17

                Электронная почта:
                info@architecturecomfort.ru)

                Часы работы:
                Пн - Пт: 10:00 - 19:00
                Сб: 10:00 - 16:00
                Вс: выходной</p>
        </div>
    );
}

export default Contact;
