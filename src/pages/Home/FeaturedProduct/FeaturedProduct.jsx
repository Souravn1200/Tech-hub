import React, { useEffect, useState } from 'react';
import FeaturedProductCard from '../../../components/FeaturedProductCard';

const FeaturedProduct = () => {

    const [featured, setFeatured] = useState([]);

    useEffect( () => {
        fetch('https://techhub-server-two.vercel.app/products')
        .then(res => res.json())
        .then(data => {
            const isFeatured = data.filter(item => item.isFeatured === true)
            setFeatured(isFeatured)
        })
    },[])

    return (

       <div>
         <div className="flex justify-center items-center mb-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
          <p className="text-gray-600">Check out our latest and most popular products</p>
        </div>
      </div>

        <div className='grid md:grid-cols-4 gap-5'>
            {
                featured.map(item => <FeaturedProductCard key={item._id} item={item}></FeaturedProductCard>)
            }
        </div>
       </div>
    );
};

export default FeaturedProduct;