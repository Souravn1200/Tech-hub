import React, { useState } from 'react';
import { FaRegThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FeaturedProductCard = ({ item }) => {

    const { _id, product_name, product_image, tag, votes } = item

    const [upvoteCount, setUpvoteCount] = useState(votes);
  const [isUpvoted, setIsUpvoted] = useState(false);

  const handleUpvote = () => {
    if (!isUpvoted) {
      // Increase the upvote count by 1 when the button is clicked
      setUpvoteCount(upvoteCount + 1);
      // Set isUpvoted to true to disable the button
      setIsUpvoted(true);
    }
  };
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='w-full h-48 object-cover' src={product_image} alt="Shoes" /></figure>
                <div className="card-body">


                    <div className='flex gap-5 items-center justify-center'>

                        <Link to={`/product/${_id}`}>
                    <h2 className="card-title">
                        {product_name}
                    </h2>
                    </Link>
                          <div className="badge badge-secondary">Featured!</div>                   

                    </div>
                    <div className="card-actions justify-start">
                        <div className="badge badge-outline">{tag}</div>

                    </div>



                    <button
            className={`btn btn-secondary text-white btn-outline ${isUpvoted ? 'disabled' : ''}`}
            onClick={handleUpvote}
            disabled={isUpvoted}
          >
            <FaRegThumbsUp />
            {upvoteCount}
          </button>




                </div>


            </div>
        </div>
    );
};

export default FeaturedProductCard;