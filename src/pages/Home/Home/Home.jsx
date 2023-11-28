
import Banner from "../Banner/Banner";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import TrendingProduct from "../TrendingProduct/TrendingProduct";

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <div className="mt-10 mb-10 max-w-6xl mx-auto">
            <FeaturedProduct></FeaturedProduct>
            </div>
            <div className="mt-10 mb-10 max-w-4xl mx-auto">
            <TrendingProduct></TrendingProduct>
            </div>
        </div>
    );
};

export default Home;