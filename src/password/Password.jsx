import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Password.css'; // Import the CSS file

const Password = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/code');
    };

    return (
        <div className="password-modal-container">
            <h2>Забыли пароль?</h2>
            <p className="recovery-text">
                Инструкция по восстановлению пароля отправлена
                на ваш E-mail адрес. Пожалуйста, проверьте почту.
            </p>
            <button className="main-page-button" onClick={handleGoHome}>
                На главную
            </button>
        </div>
    );
};

export default Password;
