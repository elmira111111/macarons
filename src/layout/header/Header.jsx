import React from 'react';
import { useNavigate } from 'react-router-dom';
import avatar from '../../../../macarons1/src/assets/img.png';
import './Header.css';
import Group from '../../assets/Group.png';

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className="header-container">
            <h1
                className="header-logo"
                onClick={() => navigate('/')}
                style={{ cursor: 'pointer' }}
            >
                <img src={Group} alt="Group" className="header-icon" />
            </h1>


            <div className="header-user">
                <div className="user-info">
                    <span className="user-name">Бекенова Сабина</span>
                    <span className="user-location">Бишкек, Кыргызстан</span>
                </div>
                <img src={avatar} alt="User Avatar" className="user-avatar" />
            </div>
        </div>
    );
};

export default Header;
