import React, { useEffect, useState } from 'react';
import TrendingProductCard from '../../../components/TrendingProductCard';

const TrendingProduct = () => {

    const [trending, setTrending] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => {
            const isTrending = data.filter(item => item.isTrending === true)
            setTrending(isTrending)
        })
    },[])

    return (
        <div >
            <div className="flex justify-center items-center mb-10">
  <div className="text-center">
    <h2 className="text-3xl font-bold mb-2">Trending Products</h2>
    <p className="text-gray-600">Check out our latest and most popular products</p>
  </div>
</div>
            <div className='grid md:grid-cols-3 gap-6' >
            {
               trending.map( item => <TrendingProductCard key={item._id} item={item}></TrendingProductCard>)
            }
        </div>
        </div>
    );
};

export default TrendingProduct;