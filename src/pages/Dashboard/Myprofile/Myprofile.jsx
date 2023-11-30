import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { Link } from "react-router-dom";
import useUsers from "../../../hooks/useUsers";

const Myprofile = () => {
  const { user } = useContext(AuthContext);
  const [users, , isPending] = useUsers();

  return (
    <>
      {isPending ? (
        <div>
          <span className="loading loading-bars loading-lg mx-auto"></span>
        </div>
      ) : (
        <div className="">
          <div className="w-20 h-20 mx-auto mt-4 rounded-full ">
                  <img
                    src={user?.photoURL}
                    alt="User's Profile"
                    className="w-full h-full object-cover"
                  />
                </div>

          {users.map((profileUser) => (
            <div key={profileUser?._id} className="max-w-sm mx-auto mb-4">
              <div className="bg-white shadow-md rounded-lg overflow-hidden flex items-center justify-center">
                
                <div className="px-6 py-4">
                  <div className="mb-2">
                    <h1 className="text-2xl font-semibold">
                      User Profile
                    </h1>
                  </div>
                  <div className="mb-2">
                    <h2 className="text-xl font-semibold">
                      {profileUser?.name}
                    </h2>
                    <p className="text-gray-600">
                      {profileUser?.email}
                    </p>
                  </div>
                  {profileUser?.subscribe ? (
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">
                      Verified
                    </button>
                  ) : (
                    <Link to="/dashboard/payment">
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">
                        Pay to subscribe $10
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Myprofile;
