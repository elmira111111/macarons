import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowSvg from '../assets/arrow.svg';
import MacaronsComponent from '../macarons/Macarons.jsx';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();
    const [selectedSection, setSelectedSection] = useState(null);
    const [promotions, setPromotions] = useState([]);

    const sections = ['Акции', 'Популярные наборы', 'Новости'];

    const handleSectionClick = useCallback((section) => {
        if (section === 'Акции') {
            setSelectedSection('Акции');
        } else if (section === 'Популярные наборы') {
            navigate('sets');
        } else if (section === 'Новости') {
            navigate('news');
        }
    }, [navigate]);

    const handleEditClick = useCallback((section) => {
        navigate(`/edit/${section.toLowerCase()}`);
    }, [navigate]);

    const handleBackClick = () => {
        setSelectedSection(null);
    };

    return (
        <div className="container">
            <div className="main">
                {!selectedSection && (
                    <div className="card-list">
                        {sections.map((section) => (
                            <div
                                key={section}
                                className="card"
                                onClick={() => handleSectionClick(section)}
                                role="button"
                                aria-label={`View ${section}`}
                            >
                                <span className="card-title">{section}</span>
                                <button
                                    type="button"
                                    className="edit-btn"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleEditClick(section);
                                    }}
                                    aria-label={`Edit ${section}`}
                                >
                                    Редактировать
                                    <img src={ArrowSvg} alt="Arrow icon" className="arrow-icon" />
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {selectedSection === 'Акции' && (
                    <div>
                        <button className="back-btn" onClick={handleBackClick}>
                            Назад
                        </button>
                        <MacaronsComponent
                            promotions={promotions}
                            setPromotions={setPromotions}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
