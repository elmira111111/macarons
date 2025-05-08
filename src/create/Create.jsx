import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import './Create.css';

const CreatePassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="container">
            <div className="card">
                <h2>Создать Пароль</h2>
                <p className="password-instructions">
                    Выберите надёжный пароль!<br />
                    Минимальная длина пароля 8 символов.
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="input-field">
                        <label>Новый пароль</label>
                        <div className="password-wrapper">
                            <input
                                type={showNew ? 'text' : 'password'}
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                                minLength="8"
                            />
                            <span onClick={() => setShowNew(!showNew)}>
                                {showNew ? <FiEyeOff /> : <FiEye />}
                            </span>
                        </div>
                    </div>

                    <div className="input-field">
                        <label>Подтвердите новый пароль</label>
                        <div className="password-wrapper">
                            <input
                                type={showConfirm ? 'text' : 'password'}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                minLength="8"
                            />
                            <span onClick={() => setShowConfirm(!showConfirm)}>
                                {showConfirm ? <FiEyeOff /> : <FiEye />}
                            </span>
                        </div>
                    </div>

                    <div className="remember-container">
                        <label className="toggle-switch">
                            <input
                                type="checkbox"
                                checked={remember}
                                onChange={() => setRemember(!remember)}
                            />
                            <span className="slider"></span>
                        </label>
                        <span className="remember-label">Запомнить</span>
                    </div>

                    <button type="submit" className="submit-button">
                        Сменить пароль
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreatePassword;