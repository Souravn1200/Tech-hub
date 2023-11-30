import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useAxiosPublic from "./useAxiosPublic";

const useUsers = () => {
const axiosPublic = useAxiosPublic();
const {user} = useContext(AuthContext);

  const { refetch, data: users = [], isPending } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users?email=${user?.email}`);
      return res.data;
    }
  });

  return [users, refetch, isPending];
    
};

export default useUsers;