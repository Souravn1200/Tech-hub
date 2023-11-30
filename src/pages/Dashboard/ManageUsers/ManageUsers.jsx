
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from '../../../hooks/useAxiosSecure';


const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();

    const { refetch, data: users = [] } = useQuery({
      queryKey: ['users'],
      queryFn: async () => {
        const res = await axiosSecure.get('/users');
        return res.data;
      }
    });

    const axiosPublic = useAxiosPublic()

    const handleAdmin = (_id) => {   
        axiosPublic.patch(`/makeadmin/${_id}`)
        .then(res => {
            if(res.data.modifiedCount > 0 ){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Made Admin",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch();
            }
           
        })
       .then(error => {
        console.log(error);
       })
       
    }


    const handleMod = (_id) => {   
        axiosPublic.patch(`/makemod/${_id}`)
        .then(res => {
            if(res.data.modifiedCount > 0 ){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Made Admin",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch();
            }
           
        })
       .then(error => {
        console.log(error);
       })
       
    }


    return (
        <div>
            <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Moderatios Page</h1>
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">User Email</th>
              <th className="border border-gray-300 px-4 py-2">User Name</th>
              
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{user.email}</td>

                <td className="border border-gray-300 px-4 py-2 text-center"> {user.name} </td>
    
                <td className="border border-gray-300 px-4 py-2 flex items-center justify-evenly">
                  
                

            <button onClick={() => handleAdmin(user._id)} className='bg-gray-500 text-white px-8 py-1 rounded-md mr-2'>
                    {user?.isAdmin ? 'Admin' : 'Make Admin'}
                </button>


                <button onClick={() => handleMod(user._id)} className='bg-blue-600 text-white px-8 py-1 rounded-md mr-2'>
                    {user?.isMod ? 'Moderator' : 'Make Moderator'}
                </button>




                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default ManageUsers;