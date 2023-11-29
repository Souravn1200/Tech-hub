import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/products')
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
                products?.map(item =>  <div key={item._id}>
                    <div className="card bg-base-100 shadow-xl mt-10 mb-10">
                        <figure><img className='w-full h-48 object-cover' src={item.product_image} alt="Shoes" /></figure>
                        <div className="card-body">
        
        
                            <div className='flex gap-5 items-center justify-center'>
        
                                <Link to={`/product/${item._id}`}>
                            <h2 className="card-title">
                                {item.product_name}
                            </h2>
                            </Link>
                                  <div className="badge badge-secondary">Featured!</div>                   
        
                            </div>
                            <div className="card-actions justify-start">
                                <div className="badge badge-outline">{item.tag}</div>
        
                            </div>
        
        
        
                            <div className="indicator mx-auto mt-4">
                                <span className="indicator-item badge badge-secondary">{item.votes?.length}</span>
                                <button className="btn"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                </button>
                            </div>
        
                        </div>
        
        
                    </div>
                </div>)
            }
        </div>
              </div>
            
        </div>
    );
};

export default Products;