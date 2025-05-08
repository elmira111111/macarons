import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header/Header.jsx';
import HomeIcon from '../assets/home.svg';
import ProfileIcon from '../assets/profile.svg';
import { Outlet } from 'react-router-dom';
import './Layout.css'

const Layout = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <div className="layout-container">
                <div className="sidebar">
                    <nav className="nav">
                        <div
                            className="nav-item"
                            role="button"
                            onClick={() => navigate('/')}
                        >
                            <img src={HomeIcon} alt="Home" className="nav-icon" />
                            <span className="nav-text">Главная</span>
                        </div>
                        <div
                            className="nav-item"
                            role="button"
                            onClick={() => navigate('profile')}
                        >
                            <img src={ProfileIcon} alt="Profile" className="nav-icon" />
                            <span className="nav-text">Профиль</span>
                        </div>
                    </nav>
                </div>
                <div className="main-content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;
