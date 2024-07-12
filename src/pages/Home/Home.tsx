import BestSellingProducts from "./bestsellingproduct/BestSellingProduct";
import Category from "./Category/Category";
import FAQ from "./FAQ/FAQ";
import FeaturedProducts from "./FeaturedProducts/FeaturedProduct";
import Hero from "./Hero/Hero";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <BestSellingProducts />
      <Category />
      <FeaturedProducts />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;
