import React, { Suspense, useContext, useState } from 'react';
import './styles/index.scss'
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboulPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';


const App = () => {
    const { theme, toggleTheme } = useTheme()
    const bool = true

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About Us</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>} />
                    <Route path={'/'} element={<MainPageAsync/> } />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;