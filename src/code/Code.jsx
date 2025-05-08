import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Code.css';

const Code = () => {
    const [code, setCode] = useState(['', '', '', '']);
    const navigate = useNavigate();

    const handleCodeChange = (index, value) => {
        if (/^[0-9]?$/.test(value)) {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);

            if (value && index < 3) {
                document.getElementById(`code-input-${index + 1}`).focus();
            }
        }
    };

    const handleConfirm = () => {
        if (code.join('') === '1234') {
            navigate('/create');
        } else {
            alert('Неверный код!');
        }
    };

    return (
        <div className="code-modal-container">
            <h2>Введите 4-значный код</h2>
            <p>На адрес электронной почты, который вы указали, должен прийти четырехзначный код.</p>
            <div className="code-inputs">
                {code.map((digit, index) => (
                    <input
                        key={index}
                        id={`code-input-${index}`}
                        type="text"
                        maxLength="1"
                        value={digit}
                        onChange={(e) => handleCodeChange(index, e.target.value)}
                        className="code-input"
                    />
                ))}
            </div>
            <div className="resend-timer">
                <span className="resend-text">Отправить SMS ещё раз</span>
                <span className="countdown">00:30</span>
            </div>
            <div className="button-group">
                <button className="confirm-button" onClick={handleConfirm}>Отмена</button>
                <button className="cancel-button" onClick={() => navigate('/create')}>Подтвердить</button>
            </div>
        </div>
    );
};

export default Code;
