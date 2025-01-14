import React from "react";
import Carousel from "../components/Carousel";

function Home() {
    return (
        <div>
            <Carousel />
            <h2>Строительство домов под ключ</h2>
            <p>
                Мы предлагаем полный цикл услуг по строительству жилых домов, включая:
                Фундамент: Проектирование и возведение различных типов фундаментов (ленточный, плитный, столбчатый) в зависимости от особенностей участка и типа строения.
                Стены: Строительство стен из различных материалов (кирпич, газобетон, дерево) с учетом тепло- и звукоизоляции.
                Крыша: Монтаж кровли, включая выбор материалов (металлочерепица, черепица, профнастил) и конструктивных решений (скатная, плоская).
                Отделка: Внутренняя и внешняя отделка, включая штукатурку, покраску, укладку плитки и другие работы.</p>
            <h2>Проектирование</h2>
            <p>
                Наша команда профессиональных архитекторов и дизайнеров предлагает услуги по проектированию:
                Индивидуальные проекты: Разработка уникальных проектов домов с учетом пожеланий клиента и особенностей участка.
                Готовые проекты: Предоставление готовых проектов, которые можно адаптировать под ваши нужды.
                Ландшафтный дизайн: Проектирование благоустройства территории вокруг дома, включая озеленение, дорожки, освещение и другие элементы.
            </p>
            <h2>Отделка и ремонт</h2>
            <p>
                Мы предлагаем услуги по отделке и ремонту как новых, так и существующих объектов:
                Внутренняя отделка: Штукатурка, покраска, укладка плитки, установка потолков и перегородок, а также монтаж сантехники и электрики.
                Внешняя отделка: Фасадные работы, включая утепление, облицовку, покраску и другие виды отделки.
                Капитальный и косметический ремонт: Полный спектр услуг по ремонту, включая замену коммуникаций, перепланировку и обновление интерьеров.
            </p>
        </div>
    );
}

export default Home;
