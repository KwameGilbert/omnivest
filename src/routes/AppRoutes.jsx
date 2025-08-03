import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './../pages/homepage/Homepage';
import TestPage from '../pages/TestPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/test" element={<TestPage />} />
            {/* Add other routes here */}
        </Routes>
    );
};

export default AppRoutes;
