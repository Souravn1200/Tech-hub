import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";


const Myprofile = () => {
    const {user} = useContext(AuthContext);
  const [isSubscribed, setIsSubscribed] = useState(true);
  const subscriptionAmount = '$9.99';
  const handleSubscribe = () => {
    setIsSubscribed(true);
  };

    return (
        <div className="flex justify-left items-center">
      <div className="shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-semibold mb-4">User Profile</h1>
        <div className="flex items-center mb-6">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <img
              src={user?.photoURL}
              alt="User's Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-semibold">{user?.displayName}</h2>
            <p className="text-gray-600">{user?.email}</p>
          </div>
        </div>
        {!isSubscribed && (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
            onClick={handleSubscribe}
          >
            Subscribe ({subscriptionAmount})
          </button>
        )}
        {isSubscribed && (
          <div className="bg-green-200 text-green-700 px-4 py-2 rounded-md mb-4">
            <p>Status: Verified</p>
          </div>
        )}
      </div>
    </div>
    );
};

export default Myprofile;