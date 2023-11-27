import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SeachProductCard from './SeachProductCard';

const SearchBar = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [searchedItem, setsearchedItem] = useState('');

    const handleSelectChange = (e) => {
      setSelectedOption(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      axios.get(`http://localhost:5000/search/${selectedOption}`)
      .then(res => {
        console.log(res.data);
        setsearchedItem(res.data)
      })
      .then(error => {
        console.log(error);
      })
      
    };

    console.log(searchedItem);

  return (
  <div>
      <form onSubmit={handleSubmit} className="flex items-center justify-center mt-4">
      <select
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
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md ml-2 focus:outline-none focus:ring focus:border-blue-500"
      >
        Submit
      </button>

    </form>

    {
        searchedItem?.length > 0 ? <div>
        <p className='mx-auto w-[240px] mt-10 text-2xl'>Your searched item</p>
    <div className='grid md:grid-cols-4 gap-5 mt-5 ml-10'>
        
        {
          searchedItem.map(item => <SeachProductCard key={item._id} item={item}></SeachProductCard>)
        }
        </div>
    </div> : <></>
    }




  </div>
  );
};

export default SearchBar;
