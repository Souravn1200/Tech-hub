import React, { useEffect, useState } from 'react';
import FeaturedProductCard from '../../../components/FeaturedProductCard';

const FeaturedProduct = () => {

    const [featured, setFeatured] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => {
            const isFeatured = data.filter(item => item.isFeatured === true)
            setFeatured(isFeatured)
        })
    },[])

    return (
        <div className='grid md:grid-cols-4 gap-5'>
            {
                featured.map(item => <FeaturedProductCard key={item._id} item={item}></FeaturedProductCard>)
            }
        </div>
    );
};

export default FeaturedProduct;