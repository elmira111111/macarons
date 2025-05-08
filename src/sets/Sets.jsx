import React from 'react';
import './Sets.css';

import Set1 from '../assets/macarons6shtuk.png';
import Set2 from '../assets/macarons12shtuk.png';
import Set3 from '../assets/macarons8shtuk.png';

const popularSets = [
    {
        id: 1,
        name: 'Нежный микс',
        description: '6 макарунов с ванилью, клубникой и фисташкой',
        price: '800 ₽',
        image: Set1,
    },
    {
        id: 2,
        name: 'Шоколадный рай',
        description: '12 макарунов с бельгийским шоколадом и карамелью',
        price: '1500 ₽',
        image: Set2,
    },
    {
        id: 3,
        name: 'Фруктовый взрыв',
        description: '8 макарунов с манго, малиной и черникой',
        price: '1100 ₽',
        image: Set3,
    },
];

const Sets = () => {
    return (
        <div className="sets-container">
            <div className="sets-header">
                <button className="add-button">Добавить</button>
            </div>
            <h2 className="sets-title">Популярные наборы</h2>
            <div className="sets-list">
                {popularSets.map((set) => (
                    <div key={set.id} className="set-card">
                        <img src={set.image} alt={set.name} className="set-image" />
                        <div className="set-info">
                            <h3>{set.name}</h3>
                            <p>{set.description}</p>
                            <span className="set-price">{set.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sets;
