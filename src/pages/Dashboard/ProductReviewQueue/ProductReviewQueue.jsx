import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAxiosPublic, { axiosPublic } from '../../../hooks/useAxiosPublic';

const ProductReviewQueue = () => {

    const [queue, setQueue] = useState([]);
    const [isFeatured, setIsFeatured] = useState(false);
    const axiosPublic = useAxiosPublic()
    useEffect( () => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => {
            const isPending = data.filter(item => item.status === 'Pending' )
            setQueue(isPending)
        })
    },[])

    const makeFeatured = (productId) => {
        // Logic to make a product featured
        // You can use axios or your preferred method to update the product
        console.log(`Make product ${productId} featured`);

        axiosPublic.patch(`/prodcutreviewqueue/${productId}`)
        .then(res => {
            console.log(res.data);
            setIsFeatured(true); 
        })

      };
    
      const acceptProduct = (productId) => {
        // Logic to accept a product
        // Similar to makeFeatured, update the product to change its status
        console.log(`Accept product ${productId}`);
      };

      const rejectProduct = (productId) => {
        // Logic to accept a product
        // Similar to makeFeatured, update the product to change its status
        console.log(`Accept product ${productId}`);
      };

    return (
        <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Moderatios Page</h1>
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Product Name</th>
              <th className="border border-gray-300 px-4 py-2">Details</th>
              
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {queue.map((product) => (
              <tr key={product._id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{product.product_name}</td>

                <td className="border border-gray-300 px-4 py-2 text-center"> <Link to={`/product/${product._id}`} > View Details</Link> </td>
    
                <td className="border border-gray-300 px-4 py-2 flex items-center justify-evenly">
                  
                  <button 
                    onClick={() => makeFeatured(product._id)} disabled={isFeatured}
                  >
                    {product.isFeatured ? <span className='bg-gray-500 text-white px-3 py-1 rounded-md mr-2' >Featured</span> : <span className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2">Make Featured</span>}
                  </button>
                  
                  <button
                    onClick={() => acceptProduct(product._id)}
                    className="bg-green-300 text-black px-3 py-1 rounded-md"
                  >
                    Accept Product
                  </button>

                  <button
                    onClick={() => rejectProduct(product._id)}
                    className="bg-red-300 text-black px-3 py-1 rounded-md"
                  >
                    Reject Product
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default ProductReviewQueue;