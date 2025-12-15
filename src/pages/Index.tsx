import HeroStore from "@/components/HeroStore";
import ProductSection from "@/components/ProductSection";
import Categories from "@/components/Categories";
import SpecialOffers from "@/components/SpecialOffers";
import FooterStore from "@/components/FooterStore";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <HeroStore />
      <ProductSection />
      <Categories />
      <SpecialOffers />
      <FooterStore />
    </div>
  );
};

export default Index;
