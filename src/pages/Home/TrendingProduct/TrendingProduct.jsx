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
        <div className='grid md:grid-cols-3 gap-6' >
            {
               trending.map( item => <TrendingProductCard key={item._id} item={item}></TrendingProductCard>)
            }
        </div>
    );
};

export default TrendingProduct;