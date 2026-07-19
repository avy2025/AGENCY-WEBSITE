import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './context/LanguageContext';
import { Loader2 } from 'lucide-react';

const Home = lazy(() => import('./pages/Home'));
const Collections = lazy(() => import('./pages/Collections'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Showroom = lazy(() => import('./pages/Showroom'));

function LoadingScreen() {
  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      background: 'var(--color-surface)', 
      color: 'var(--color-primary)' 
    }}>
      <Loader2 size={48} style={{ animation: 'spin 1s linear infinite' }} />
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
    <LanguageProvider>
      <BrowserRouter>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/showroom" element={<Showroom />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;

