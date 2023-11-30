import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';
import EachProduct from './EachProduct';


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('https://techhub-server-two.vercel.app/products')
        .then(res => res.json())
        .then(data => {
            
            setProducts(data)
        })
    },[])

    

    return (

        <div>
                <SearchBar></SearchBar>
            
            
              <div >
                <h2 className='mt-5 mb-5 text-3xl w-[300px] mx-auto'>Check our Products..</h2>
                <div className='grid md:grid-cols-4 gap-5 px-10'>
            {
                products?.map(item => <EachProduct key={item._id} item={item}></EachProduct>)
            }
        </div>
              </div>
            
        </div>
    );
};

export default Products;