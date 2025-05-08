import React, { useState } from "react";
import "./vyborVkusy.css";

const flavors = [
    {
        id: 1,
        name: "Шоколад, банан",
        description: "Сезонный вкус: молочный шоколад, отборные свежие бананы",
        image: "chocolate-banana.png",
    },
    {
        id: 2,
        name: "Облепиха, розмарин",
        description: "Сезонный вкус: белый шоколад, свежие ягоды облепихи, немного розмарина",
        image: "sea-buckthorn.png",
    },
    {
        id: 3,
        name: "Чёрный трюфель",
        description: "Белый шоколад, сливки и паста из летнего чёрного итальянского трюфеля.",
        image: "black-truffle.png",
    },
    {
        id: 4,
        name: "Голубой сыр",
        description: "Наш самый пикантный и один из самых популярных вкусов. Это нужно попробовать!",
        image: "blue-cheese.png",
    },
    {
        id: 5,
        name: "Пармезан",
        description: "Пикантный сладко-солёный вкус. Начинка из настоящего итальянского сыра.",
        image: "parmesan.png",
    },
    {
        id: 6,
        name: "Песто",
        description: "Ингредиенты классического песто + ганаш на белом шоколаде.",
        image: "pesto.png",
    },
];

const VyborVkusy = () => {
    const [selected, setSelected] = useState({});

    const handleChange = (id, delta) => {
        setSelected((prev) => {
            const newCount = (prev[id] || 0) + delta;
            if (newCount < 0) return prev;
            return { ...prev, [id]: newCount };
        });
    };

    const total = Object.values(selected).reduce((a, b) => a + b, 0);

    return (
        <div className="picker-container container-app">
            <div className="breadcrumb">Главная &gt; Собрать набор &gt; Выбрать количество &gt; <span>Выбрать вкусы</span></div>
            <h1>Выберите вкусы</h1>
            <div className="main-content">
                <div className="flavors-grid">
                    {flavors.map((flavor) => (
                        <div key={flavor.id} className="flavor-card">
                            <img src={flavor.image} alt={flavor.name} />
                            <h3>{flavor.name}</h3>
                            <p>{flavor.description}</p>
                            <div className="counter">
                                <button onClick={() => handleChange(flavor.id, -1)}>-</button>
                                <span>{selected[flavor.id] || 0}</span>
                                <button onClick={() => handleChange(flavor.id, 1)}>+</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="sidebar">
                    <div className="summary">
                        <p>
                            {total} из 12 шт. <span className={total === 12 ? "ok" : "error"}>700 руб.</span>
                        </p>
                        <ul>
                            {Object.entries(selected).map(([id, count]) => {
                                const flavor = flavors.find((f) => f.id === parseInt(id));
                                return (
                                    <li key={id}>
                                        {flavor.name}
                                        <div className="counter">
                                            <button onClick={() => handleChange(id, -1)}>-</button>
                                            <span>{count}</span>
                                            <button onClick={() => handleChange(id, 1)}>+</button>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                        <p className="notice">Для продолжения количество макарун должно равняться 12 шт.</p>
                        <button className="primary-btn" disabled={total !== 12}>Оформить заказ</button>
                        <button className="secondary-btn">Собрать еще набор</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VyborVkusy;