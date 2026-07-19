import Layout from '../../components/Layout/Layout';
import Seo from '../../components/Seo/Seo';
import HeroSection from './sections/HeroSection';
import StatsSection from './sections/StatsSection';
import FeaturesSection from './sections/FeaturesSection';
import CategoriesSection from './sections/CategoriesSection';
import CtaBanner from './sections/CtaBanner';

export default function Home() {
  return (
    <Layout>
      <Seo title="Home" description="Premium Tiles, Sanitary Ware & Bathroom Solutions in Ranchi, Jharkhand." path="/" />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <CategoriesSection />
      <CtaBanner />
    </Layout>
  );
}
