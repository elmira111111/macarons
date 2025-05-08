import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import './Entrance.css';

const Entrance = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="entrance-container">
            <button className="close-button" type="button">×</button>
            <h2 className="custom-font">Вход</h2>
            <form>
                <div className="input-group">
                    <label>E-mail</label>
                    <input type="email" placeholder="E-mail"/>
                </div>
                <div className="input-group password-group">
                    <label>Пароль</label>
                    <div className="password-input-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Пароль"
                        />
                        <button
                            type="button"
                            className="toggle-password"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <FiEyeOff/> : <FiEye/>}
                        </button>
                    </div>
                </div>
                <Link to="/forgot" className="forgot-password">Забыли пароль?</Link>
                <button type="submit" className="entrance-button">Вход</button>
            </form>
        </div>
    );
};

export default Entrance;