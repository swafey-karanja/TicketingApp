import FeaturedEvent from "@/components/FeaturedEvent/FeaturedEvent";
import Gallery from "@/components/Gallery/Gallery";
import HeroSection from "@/components/HeroSection/HeroSection";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import PageSearch from "@/components/PageSearch/PageSearch";
import PaymentSheet from "@/components/PaymentSheet/PaymentSheet";

const Home = async () => {

    return (
      <>
        <HeroSection />
        {/* <PageSearch /> */}
        <FeaturedEvent />
        {/* <Gallery showButton={false} /> */}
        <PaymentSheet />
        <NewsLetter />
      </>
    );
  }
  
  export default Home;
  