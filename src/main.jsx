import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from './components/ui/MainLayout';
import AppRoutes from './routes/AppRoutes';
import ScrollToTop from './components/common/ScrollToTop';

const App = () => {
    return (
        <HelmetProvider>
            <BrowserRouter>
                <ScrollToTop />
                <MainLayout>
                    <AppRoutes />
                </MainLayout>
            </BrowserRouter>
        </HelmetProvider>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
       