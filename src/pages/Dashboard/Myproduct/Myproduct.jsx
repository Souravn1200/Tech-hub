import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../Providers/AuthProviders';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useProducts from '../../../hooks/useProducts';

const Myproduct = () => {
  const [product, refetch] = useProducts();

    const [products, setProducts] = useState([]);
  const axiosSecure = useAxiosSecure();
  const {user} = useContext(AuthContext);

  useEffect(() => {
    // Fetch user's products from the backend (assuming there's an API endpoint for this)
    axiosSecure.get(`/myproducts/${user?.email}`)
      .then(res => {
        setProducts(res.data); // Assuming products are stored in the response data
      })
      .catch(err => {
        console.error('Error fetching products:', err);
      });
  }, [axiosSecure, user?.email]);

  const handleUpdate = (productId) => {
    // Logic for updating a product
    console.log(`Updating product with ID: ${productId}`);
  };

  const handleDelete = (productId) => {
    // Logic for deleting a product
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
            const remaing = products.filter(del => del._id !== productId)
            setProducts(remaing)
            
          } else{
            console.log('delete error');
          }
        })

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });




   
    
  };
    return (
        <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Products</h1>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Product Name</th>
            <th className="border border-gray-300 px-4 py-2">Votes</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{product.product_name}</td>
              <td className="border border-gray-300 px-4 py-2">{product.votes.length}</td>
              <td className="border border-gray-300 px-4 py-2 text-center" style={{ backgroundColor: product.status === 'Accepted' ? '#00ca92' : product.status === 'Rejected' ? '#e84a4a' : '#e8c14a' }}>
  {product.status === 'Accepted' ? 'Accepted' : product.status === 'Rejected' ? 'Rejected' : 'Pending'}
</td>
              <td className="border border-gray-300 px-4 py-2 flex items-center justify-evenly">
                <Link to={`/dashboard/updateproduct/${product._id}`}>
                <button 
                  onClick={() => handleUpdate(product._id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2"
                >
                  Update
                </button>
                </Link>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default Myproduct;