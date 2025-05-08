import React from 'react';
import './Profile.css';
import Avatar from '../assets/img.png';

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-main">
                <div className="card">
                    <div className="profile-header">
                        <img src={Avatar} alt="avatar" className="avatar" />
                        <div className="profile-info">
                            <p className="name">Бекенова Сабина</p>
                            <span className="location">Бишкек, Кыргызстан</span>
                        </div>
                    </div>

                    <h2 className="section-title">Персональная информация</h2>

                    <form className="form">
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="***************" />
                        <input type="password" placeholder="Подтвердите пароль" />
                        <div className="row">
                            <input type="text" placeholder="Имя" defaultValue="Сабина" />
                            <input type="text" placeholder="Фамилия" defaultValue="Бекенова" />
                        </div>
                        <button className="save-btn">Сохранить изменения</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;