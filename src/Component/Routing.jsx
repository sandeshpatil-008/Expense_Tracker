import React from 'react';
import { Routes, Route } from 'react-router-dom'
import App from '../App';
import Update from './Update';

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<App/>} />
                <Route exact path="/app" element={<App />} />
                <Route exact path="/update/:userID" element={<Update />} />
                
            </Routes>
        </div>
    );
};

export default Routing;