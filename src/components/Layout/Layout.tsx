import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main id="main-content" role="main">
        {children}
      </main>
      <Footer />
    </>
  );
}
