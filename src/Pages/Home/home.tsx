
// import CollectionComponent from "../components/CollectionComponent";
// import DualImageComponent from "../components/dualimage";
// import FeaturedBlog from "../components/Blog/featuredBlog";
import CategorySelector from "../components/categoryselector";
import HeroSection2 from "../components/hero";
import OccasionEdit from "../components/occasionedit";

import FeaturedProduct from "../products/FeaturedProd";
// import Carousel from "./carousel"



const Home: React.FC = () => {
  

  return (
    <>
    {/* <Carousel/>  */}
    <div className="bg-[#000]">
        <HeroSection2/>
     <CategorySelector/>
    <FeaturedProduct/>
    <OccasionEdit/>
    {/* <FeaturedBlog/> */}
    </div>
  
    {/* <BusinessPopup/> */}
  
  
    </>
   
  );
};

export default Home;
