import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const Addproduct = () => {

    const {user} = useContext(AuthContext);

    const [productName, setProductName] = useState('');
    const [productImage, setProductImage] = useState('');
    const [description, setDescription] = useState('');
    const [externalLinks, setExternalLinks] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const axiosSecure = useAxiosSecure()

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
      };

    const votes = [];
   const isFeatured = false;
    const isTrending = false;
    const status = 'Pending'
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      const formData = {
        product_name:productName,
        product_image:productImage,
        description,
        votes,
        isFeatured,
        isTrending,
        tag:selectedOption,
        externalLinks,
        ownerName: user?.displayName,
        ownerImage: user?.photoURL,
        ownerEmail: user?.email,
        status


      };


      // Sending formData to MongoDB server
      console.log(formData);
      axiosSecure.post('/products', formData)
      .then(res => {
        console.log(res.data);
        if(res.data.acknowledged === true) {
            setProductName('');
            setProductImage('');
            setDescription('');
            setExternalLinks('');
            setSelectedOption('');

            Swal.fire({
              position: "center",
              icon: "success",
              title: "Product Added",
              showConfirmButton: false,
              timer: 1500
            });
          }
      })
      .then(err=> {
        console.log(err);
      })
      
    };

    
    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="mb-4">
        <label htmlFor="productName" className="block font-semibold mb-1">
          Product Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded-md w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="productImage" className="block font-semibold mb-1">
          Product Image<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="productImage"
          value={productImage}
          onChange={(e) => setProductImage(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded-md w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block font-semibold mb-1">
          Description<span className="text-red-500">*</span>
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded-md w-full"
          required
        ></textarea>
      </div>
      {/* Product Owner Info */}
      <fieldset disabled>
        <legend className="font-semibold mb-4">Product Owner Info :</legend>
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              src={user?.photoURL}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-4">
            <p className="text-lg font-semibold">{user?.displayName}</p>
            <p className="text-gray-600">{user?.email}</p>
          </div>
        </div>
      </fieldset>
      {/* Tags input */}
      <div className="flex items-center justify-left gap-4 mb-4 ">
        <label htmlFor="tags" className="block font-semibold mb-1">
          Tags<span className="text-red-500">*</span>
        </label>
         <select required
        value={selectedOption}
        onChange={handleSelectChange}
        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
      >
        <option value="">Select an option</option>
        <option value="Speaker">Speaker</option>
        <option value="Smartphone">Smartphone</option>
        <option value="VR Headset">VR Headset</option>
        <option value="Smartwatch">Smartwatch</option>
        <option value="Camera">Camera</option>
        <option value="Drone">Drone</option>
      </select>
      </div>
      <div className="flex items-center justify-between mb-4">
        <label htmlFor="externalLinks" className="block font-semibold mb-1 w-5/12">
          External Links
        </label>
        <input
          type="text"
          id="externalLinks"
          value={externalLinks}
          onChange={(e) => setExternalLinks(e.target.value)}
          className="border border-gray-300 px-3 py-2 mr-24 rounded-md w-87/12"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2"
        >
          Add Product
        </button>
      </div>
    </form>
    );
};

export default Addproduct;