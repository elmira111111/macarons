import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './News.css';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import Macaron1 from '../assets/macarons113.png';
import Macaron2 from '../assets/macarons114.png';
import Macaron3 from '../assets/macarons115.png';

const News = ({ news = [], setNews = () => {} }) => {
    const navigate = useNavigate();
    const [newNewsItem, setNewNewsItem] = useState({
        title: '',
        description: '',
        date: '',
    });
    const [editMode, setEditMode] = useState(false);
    const [editId, setEditId] = useState(null);
    const titleInputRef = useRef(null);

    const placeholderImages = [Macaron1, Macaron2, Macaron3];

    useEffect(() => {
        if (editMode && titleInputRef.current) {
            titleInputRef.current.focus();
        }
    }, [editMode]);

    const getRandomImage = () => {
        const index = Math.floor(Math.random() * placeholderImages.length);
        return placeholderImages[index];
    };

    const handleAddNews = () => {
        if (newNewsItem.title && newNewsItem.description && newNewsItem.date) {
            setNews([...news, { ...newNewsItem, id: Date.now(), image: getRandomImage() }]);
            setNewNewsItem({ title: '', description: '', date: '' });
            navigate('stock');
        }
    };

    const handleDeleteNews = (id) => {
        setNews(news.filter((item) => item.id !== id));
        if (editId === id) {
            setEditMode(false);
            setEditId(null);
            setNewNewsItem({ title: '', description: '', date: '' });
        }
    };

    const handleEditNews = (id) => {
        const item = news.find((n) => n.id === id);
        if (item) {
            setNewNewsItem({ title: item.title, description: item.description, date: item.date });
            setEditMode(true);
            setEditId(id);
        }
    };

    const handleUpdateNews = () => {
        if (newNewsItem.title && newNewsItem.description && newNewsItem.date) {
            setNews(
                news.map((item) =>
                    item.id === editId ? { ...newNewsItem, id: item.id, image: item.image } : item
                )
            );
            setNewNewsItem({ title: '', description: '', date: '' });
            setEditMode(false);
            setEditId(null);
        }
    };

    return (
        <div className="news-container">
            <div className="news-header">
                <h2>Новости</h2>
                <button
                    className="add-button"
                    onClick={editMode ? handleUpdateNews : handleAddNews}
                >
                    {editMode ? 'Обновить' : 'Добавить'}
                </button>
            </div>

            <div className={`news-form ${editMode ? 'edit-mode' : ''}`}>
                <input
                    ref={titleInputRef}
                    type="text"
                    placeholder="Заголовок (например, 'Новое поступление макарон')"
                    value={newNewsItem.title}
                    onChange={(e) => setNewNewsItem({ ...newNewsItem, title: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Описание (например, 'Попробуйте новый вкус!')"
                    value={newNewsItem.description}
                    onChange={(e) => setNewNewsItem({ ...newNewsItem, description: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Дата (например, '22.04.2025')"
                    value={newNewsItem.date}
                    onChange={(e) => setNewNewsItem({ ...newNewsItem, date: e.target.value })}
                />
            </div>

            <div className="news-list">
                {news.length === 0 ? (
                    <div className="placeholder-images">
                        {placeholderImages.map((img, index) => (
                            <div key={index} className="news-item placeholder-item">
                                <img src={img} alt={`News ${index + 1}`} className="news-image" />
                                <div className="news-details">
                                    <span className="news-title">Новое поступление макарон</span>
                                    <span className="news-description">Попробуйте новый вкус!</span>
                                    <span className="news-date">22.04.2025</span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    news.map((item) => (
                        <div key={item.id} className="news-item">
                            <img src={item.image} alt="News" className="news-image" />
                            <div className="news-details">
                                <span className="news-title">{item.title}</span>
                                <span className="news-description">{item.description}</span>
                                <span className="news-date">{item.date}</span>
                            </div>
                            <div className="news-actions">
                                <button
                                    className="action-button"
                                    onClick={() => handleEditNews(item.id)}
                                    aria-label="Edit news"
                                >
                                    <CiEdit />
                                </button>
                                <button
                                    className="action-button"
                                    onClick={() => handleDeleteNews(item.id)}
                                    aria-label="Delete news"
                                >
                                    <MdDelete />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default News;
