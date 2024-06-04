import FlatCards from "@/components/UI/HomePage/FlatCards/FlatCards";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import LatestFlats from "@/components/UI/HomePage/LatestFlats/LatestFlats";
import SearchOptions from "@/components/UI/HomePage/SearchFlats/SearchFlats";
import Testimonials from "@/components/UI/HomePage/Testimonial/Testimonial";
import Tips from "@/components/UI/HomePage/Tips/Tips";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FlatCards />
      <Testimonials />
      <Tips />
      <LatestFlats />
    </>
  );
};

export default HomePage;
