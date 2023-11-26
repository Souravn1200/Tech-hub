import { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { AuthContext } from '../../Providers/AuthProviders';

const Product = () => {

    const {user} = useContext(AuthContext)
    
    const { isFeatured, isTrending, product_image, product_name, tag, votes, _id } = useLoaderData();
    console.log(isFeatured, isTrending, product_image, product_name, tag, votes, _id);


    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    };

    const handleComment = e => {
        e.preventDefault();

        const form  =  new FormData(e.currentTarget)
        const comment = form.get('comment');
        const commentId = _id;
        const displayName = user.displayName
    
        
       
       
        
    }
    return (

        <div className="container mx-auto px-4 py-8">
            <div className="md:flex md:items-center">
                <div className="md:w-1/2">
                    <img
                        src={product_image}
                        alt="Product"
                        className="w-full rounded-lg shadow-md"
                    />
                </div>
                <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                    <h1 className="text-3xl font-semibold mb-4">{product_name}</h1>
                    <p className="text-gray-700 mb-4">
                        Description of the product goes here. This is just a placeholder text.
                    </p>
                    <div className="flex items-center mb-4">
                        <span className="text-gray-700 mr-2">Price:</span>
                        <span className="text-green-500 font-semibold">$99.99</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <span className="text-gray-700 mr-2">Tag:</span>
                        {tag}
                    </div>
                    <div className="flex items-center mb-4">
                        <span className="text-gray-700 mr-2">Featured:</span>
                        <span className="text-green-500 font-semibold">{isFeatured ? 'Yes' : 'No'}</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <span className="text-gray-700 mr-2">Trending:</span>
                        <span className="text-green-500 font-semibold">{isTrending ? 'Yes' : 'No'}</span>
                    </div>
                    <button
                        className={`text-gray-800 font-bold py-2 px-4 rounded ${isLiked ? 'text-red-500' : ''
                            }`}
                        onClick={handleLikeClick}
                    >
                        {isLiked ? <><div className="indicator mx-auto mt-4">
                            <span className="indicator-item badge badge-secondary">{votes.length}</span>
                            <span><FaRegHeart className='w-auto h-12' /></span>
                        </div></> : <div className="indicator mx-auto mt-4">
                            <span className="indicator-item badge badge-secondary">{votes.length}</span>
                            <span > <FaHeart className='w-auto h-12' /> </span>

                        </div>}
                    </button>
                </div>
            </div>

            <div className='mt-5'>



                <form className="mb-4" onSubmit={handleComment}>
                    <textarea placeholder="write your comment" name='comment' className="textarea border-black textarea-lg w-full max-w-xs" ></textarea>

                    <br />
                    <button
                        type="submit"
                        className="bg-blue-900 text-white font-bold py-2 px-4 rounded mt-2"
                    >
                        Post Comment
                    </button>

                </form>

            </div>

        </div>
    );
};

export default Product;