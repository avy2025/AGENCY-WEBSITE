import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  useScrollReveal();
  const location = useLocation();

  return (
    <>
      <Navbar />
      <main id="main-content" role="main">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
