import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Macarons.css';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import Macaron1 from '../assets/image.png';
import Macaron2 from '../assets/macarons.png';
import Macaron3 from '../assets/macarons3.png';

const Macarons = ({ promotions = [], setPromotions }) => {
    const navigate = useNavigate();
    const [newPromotion, setNewPromotion] = useState({
        name: '',
        quantity: '',
        weight: '',
        price: '',
    });
    const [editMode, setEditMode] = useState(false);
    const [editId, setEditId] = useState(null);
    const nameInputRef = useRef(null);

    useEffect(() => {
        if (editMode && nameInputRef.current) {
            nameInputRef.current.focus();
        }
    }, [editMode]);

    const handleAddPromotion = () => {
        if (newPromotion.name && newPromotion.quantity && newPromotion.weight && newPromotion.price) {
            setPromotions([...promotions, { ...newPromotion, id: Date.now() }]);
            setNewPromotion({ name: '', quantity: '', weight: '', price: '' });
            navigate('/');
        }
    };

    const handleDeletePromotion = (id) => {
        setPromotions(promotions.filter((promo) => promo.id !== id));
        if (editId === id) {
            setEditMode(false);
            setEditId(null);
            setNewPromotion({ name: '', quantity: '', weight: '', price: '' });
        }
    };

    const handleEditPromotion = (id) => {
        const promo = promotions.find((p) => p.id === id);
        if (promo) {
            setNewPromotion({ ...promo });
            setEditMode(true);
            setEditId(id);
        }
    };

    const handleUpdatePromotion = () => {
        if (newPromotion.name && newPromotion.quantity && newPromotion.weight && newPromotion.price) {
            setPromotions(
                promotions.map((promo) =>
                    promo.id === editId ? { ...newPromotion, id: promo.id } : promo
                )
            );
            setNewPromotion({ name: '', quantity: '', weight: '', price: '' });
            setEditMode(false);
            setEditId(null);
            navigate('Glavhiy');
        }
    };

    const placeholderImages = [Macaron1, Macaron2, Macaron3];

    return (
        <div className="promotions-container">
            <div className="promotions-header">
                <h2>Акции</h2>
                <button
                    className="add-button"
                    onClick={editMode ? handleUpdatePromotion : handleAddPromotion}
                >
                    {editMode ? 'Обновить' : 'Добавить'}
                </button>
            </div>


            <div className="promotions-list">
                {promotions.length === 0 ? (
                    <div className="placeholder-images">
                        {placeholderImages.map((img, index) => (
                            <div key={index} className="promotion-item placeholder-item">
                                <img src={img} alt={`Macaron ${index + 1}`} className="promotion-image" />
                                <div className="promotion-details">
                                    <span className="promotion-name">
                                        Набор макарон 'Шоколадный', 12 шт.
                                    </span>
                                    <span className="promotion-weight">Вес: 300 г</span>
                                    <span className="promotion-price">Цена: 1200 ₽</span>
                                </div>
                                <div className="promotion-actions">
                                    <button
                                        className="action-button"
                                        onClick={() => handleEditPromotion(0)}
                                        aria-label="Edit promotion"
                                    >
                                        <CiEdit />
                                    </button>
                                    <button
                                        className="action-button"
                                        onClick={() => handleDeletePromotion(0)}
                                        aria-label="Delete promotion"
                                    >
                                        <MdDelete />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    promotions.map((promo) => (
                        <div key={promo.id} className="promotion-item">
                            <img src={Macaron1} alt="Macaron" className="promotion-image" />
                            <div className="promotion-details">
                                <span className="promotion-name">
                                    Набор макарон '{promo.name}', {promo.quantity}
                                </span>
                                <span className="promotion-weight">Вес: {promo.weight}</span>
                                <span className="promotion-price">Цена: {promo.price}</span>
                            </div>
                            <div className="promotion-actions">
                                <button
                                    className="action-button"
                                    onClick={() => handleEditPromotion(promo.id)}
                                    aria-label="Edit promotion"
                                >
                                    <CiEdit />
                                </button>
                                <button
                                    className="action-button"
                                    onClick={() => handleDeletePromotion(promo.id)}
                                    aria-label="Delete promotion"
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

export default Macarons;
