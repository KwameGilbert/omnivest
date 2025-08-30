import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './components/ui/MainLayout';
import AppRoutes from './routes/AppRoutes';
import ScrollToTop from './components/common/ScrollToTop';

const App = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <MainLayout>
                <AppRoutes />
            </MainLayout>
        </BrowserRouter>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
       