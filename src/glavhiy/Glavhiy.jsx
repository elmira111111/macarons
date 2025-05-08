import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdExitToApp } from "react-icons/md";
import './Glavhiy.css';

const Glavhiy = ({ photos, setPhotos }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        shortDesc: '',
        price: '',
        discountPrice: '',
        description: '',
        file: null,
    });

    const [preview, setPreview] = useState(null);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'file' && files[0]) {
            const reader = new FileReader();
            reader.onload = () => {
                setFormData((prev) => ({ ...prev, file: reader.result }));
                setPreview(reader.result);
            };
            reader.readAsDataURL(files[0]);
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.file) {
            const newPhoto = {
                src: formData.file,
                name: formData.name || 'Без названия',
            };
            setPhotos([...photos, newPhoto]);
        }
        alert('Продукт успешно сохранён!');
        navigate('/');
    };

    const handleLogout = () => {
        alert('Вы вышли!');
        navigate('/');
    };

    return (
        <div className="stock-container">
            <div className="header">
                <h2>Создать продукт</h2>
                <button className="save-btn" onClick={handleSubmit}>Сохранить</button>
                <button className="logout-btn" onClick={handleLogout}>
                    <MdExitToApp /> Выйти
                </button>
            </div>

            <form className="form">
                <div className="form-row">
                    <div className="form-group">
                        <label>Наименование товара*</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Краткое описание*</label>
                        <input type="text" name="shortDesc" value={formData.shortDesc} onChange={handleChange} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Цена*</label>
                        <input type="text" name="price" value={formData.price} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Цена скидки*</label>
                        <input type="text" name="discountPrice" value={formData.discountPrice} onChange={handleChange} />
                    </div>
                </div>

                <div className="form-group">
                    <label>Описание продукта*</label>
                    <textarea name="description" rows="4" value={formData.description} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Файл*</label>
                    <input type="file" name="file" onChange={handleChange} accept="image/*" />
                    {preview && (
                        <div className="preview-container">
                            <img src={preview} alt="Preview" className="preview-image" />
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Glavhiy;
