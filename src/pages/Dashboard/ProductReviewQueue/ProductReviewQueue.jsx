import React, { useEffect, useState } from 'react';

const ProductReviewQueue = () => {

    const [queue, setQueue] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => {
            const isPending = data.filter(item => item.status === 'Pending' )
            setQueue(isPending)
        })
    },[])

    return (
        <div>
            <h2>This is product Queue</h2>
            
        </div>
    );
};

export default ProductReviewQueue;