import React from 'react';

const FeaturedProductCard = ({ item }) => {

    const { _id, product_name, product_image, tag, votes } = item

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='w-full h-48 object-cover' src={product_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {product_name}
                        <div className="badge badge-secondary">Featured!</div>
                    </h2>

                    <div className="card-actions justify-start">
                        <div className="badge badge-outline">{tag}</div>

                    </div>





                    <div className="indicator mx-auto mt-4">
                        <span className="indicator-item badge badge-secondary">{votes.length}</span>
                        <button className="btn"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        </button>
                    </div>






                </div>


            </div>
        </div>
    );
};

export default FeaturedProductCard;