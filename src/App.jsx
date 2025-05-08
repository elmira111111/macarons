import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import Layout from './layout/Layout.jsx';           // Для админки
import AuthLayout from './layout/AuthLayout.jsx';   // Для форм входа

// Админка
import Home from '../src/home/Home.jsx';
import Macarons from '../src/macarons/Macarons.jsx';
import Glavhiy from '../src/glavhiy/Glavhiy.jsx';
import Sets from '../src/sets/Sets.jsx';
import News from '../src/news/News.jsx';
import Profile from '../src/profile/Profile.jsx';

// Авторизация
import Entrance from './entrance/Entranse.jsx';
import Forgot from './forgot/Forgot.jsx';
import Password from './password/Password.jsx';
import Code from './code/Code.jsx';
import Create from './create/Create.jsx';

const App = () => (
    <Router>
        <Routes>
            {/* Авторизация */}
            <Route element={<AuthLayout />}>
                <Route path="/" element={<Entrance />} />
                <Route path="/forgot" element={<Forgot />} />
                <Route path="/password" element={<Password />} />
                <Route path="/code" element={<Code />} />
                <Route path="/create" element={<Create />} />
            </Route>

            {/* Админка */}
            <Route path="/admin" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="promo" element={<Macarons />} />
                <Route path="stock" element={<Glavhiy />} />
                <Route path="sets" element={<Sets />} />
                <Route path="news" element={<News />} />
                <Route path="profile" element={<Profile />} />
            </Route>

            {/* Редирект неизвестных путей */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </Router>
);

export default App;
