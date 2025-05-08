import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Stock.css';

const Stock = () => {
    const navigate = useNavigate();

    return (
        <div className="stock-container">
            <h1 className="stock-title">Акция</h1>
            <p className="stock-description">Здесь вы можете добавить новую акцию или объект недвижимости.</p>
            <button className="back-button" onClick={() => navigate('/')}>
                Назад
            </button>
        </div>
    );
};

export default Stock;
