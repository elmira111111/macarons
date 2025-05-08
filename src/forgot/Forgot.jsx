import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Forgot.css';

const Forgot = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/password');
    };

    return (
        <div className="forgot-container">
            <button className="close-button" type="button">&times;</button>
            <h2>Забыли пароль?</h2>
            <p className="instruction">
                Enter the email address you used when you joined and<br />
                we'll send you instructions to reset your password.
            </p>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" placeholder="E-mail" />
                </div>
                <button type="submit" className="forgot-button">Продолжить</button>
            </form>
        </div>
    );
};

export default Forgot;
