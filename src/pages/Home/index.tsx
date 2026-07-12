import Layout from '../../components/Layout/Layout';
import HeroSection from './sections/HeroSection';
import StatsSection from './sections/StatsSection';
import FeaturesSection from './sections/FeaturesSection';
import CategoriesSection from './sections/CategoriesSection';
import CtaBanner from './sections/CtaBanner';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <CategoriesSection />
      <CtaBanner />
    </Layout>
  );
}
