import FlatCards from "@/components/UI/HomePage/FlatCards/FlatCards";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import SearchOptions from "@/components/UI/HomePage/SearchFlats/SearchFlats";
import Testimonials from "@/components/UI/HomePage/Testimonial/Testimonial";
import Tips from "@/components/UI/HomePage/Tips/Tips";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      {/* <SearchOptions /> */}
      <FlatCards />
      <Testimonials />
      <Tips />
    </>
  );
};

export default HomePage;
