import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAxiosPublic, { axiosPublic } from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import useProducts from '../../../hooks/useProducts';

const ProductReviewQueue = () => {
    const [product, refetch] = useProducts();

    // const [queue, setQueue] = useState([]);

   
    // const axiosPublic = useAxiosPublic()
    // useEffect( () => {
    //     fetch('http://localhost:5000/products')
    //     .then(res => res.json())
    //     .then(data => {
    //         const isPending = data.filter(item => item.status === 'Pending' )
    //         setQueue(isPending)
    //     })
    // },[])

    

    const makeFeatured = (productId) => {
        // Logic to make a product featured
        // You can use axios or your preferred method to update the product
        console.log(`Make product ${productId} featured`);



        axiosPublic.patch(`/prodcutreviewqueue/${productId}`)
        .then(res => {
            console.log(res.data);
            if(res.data.modifiedCount > 0 ){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Product Featured",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch();
            }
        })

      };
      
    
      const acceptProduct = (productId) => {
        // Logic to accept a product
        // Similar to makeFeatured, update the product to change its status
        console.log(`Accept product ${productId}`);
        axiosPublic.patch(`/prodcutaccept/${productId}`)
        .then(res => {
            console.log(res.data);
          
            if(res.data.modifiedCount > 0 ){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Product Accepted",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch();
            }
        })
      };

      const rejectProduct = (productId) => {
        // Logic to accept a product
        // Similar to makeFeatured, update the product to change its status
        console.log(`Accept product ${productId}`);
        axiosPublic.patch(`/prodcutreject/${productId}`)
        .then(res => {
            console.log(res.data);
          
            if(res.data.modifiedCount > 0 ){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Product Rejected",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch();
            }
        })

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
            {product.map((product) => (
              <tr key={product._id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{product.product_name}</td>

                <td className="border border-gray-300 px-4 py-2 text-center"> <Link to={`/product/${product._id}`} > View Details</Link> </td>
    
                <td className="border border-gray-300 px-4 py-2 flex items-center justify-evenly">
                  
                  <button 
                    onClick={() => makeFeatured(product._id)} 
                  >
                    {product.isFeatured ? <span className='bg-gray-500 text-white px-8 py-1 rounded-md mr-2' >Featured</span> : <span className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2">Make Featured</span>}
                  </button>
                  



                  <button
                    onClick={() => acceptProduct(product._id)} 
                    
                  >
                    
                    {
                        product.status === 'Accepted' ? <span className='bg-gray-500 text-white px-8 py-1 rounded-md mr-2'> Accepted </span> : < > <span className="bg-green-300 text-black px-3 py-1 rounded-md"> Accept Prodcut</span> </>
                    }
                    
                  </button>




                  <button
                    onClick={() => rejectProduct(product._id)}
                    
                  >

 {
                        product.status === 'Rejected' ? <span className='bg-gray-500 text-white px-8 py-1 rounded-md mr-2'> Rejected </span> : < > <span className="bg-red-300 text-black px-3 py-1 rounded-md">Reject Product</span> </>
                    }


                    
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