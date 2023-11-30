import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import Swal from 'sweetalert2';
import { axiosSecure } from '../../../hooks/useAxiosSecure';

const ReportedContent = () => {

    const [product, refetch] = useProducts();
    const [reports, isReports] = useState([])

    useEffect(()=>{
        const reportedProduct = product.filter(item => item.isReported === true)
        isReports(reportedProduct);
    
    },[product])

    const handleDelete = (productId) => {
        
        console.log(`Deleting product with ID: ${productId}`);
    
    
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            
            axiosSecure.delete(`delete/${productId}`)
            .then(res => {
              console.log(res.data);
              if(res.data.acknowledged === true) {
                
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                  refetch()
              } else{
                console.log('delete error');
              }
            })
    
           
          }
        });
    
    
    
    
       
        
      };
    
   
    return (
        <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Reported Product Page</h1>
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Product Name</th>
              <th className="border border-gray-300 px-4 py-2">Details</th>
              
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((product) => (
              <tr key={product._id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{product.product_name}</td>

                <td className="border border-gray-300 px-4 py-2 text-center"> <Link to={`/product/${product._id}`} > View Details</Link> </td>
    
                <td className="border border-gray-300 px-4 py-2 flex items-center justify-evenly">
                 


                  <button
                    onClick={() => handleDelete(product._id)}
                    
                  >

                <span className="bg-red-300 text-black px-3 py-1 rounded-md"> Delete Product</span> 


                    
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    );
};

export default ReportedContent;