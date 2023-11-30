import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useMod = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const {data:isMod} = useQuery({
        queryKey: [user?.email, 'isMod'],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/user/mod/${user.email}`)
            console.log(res.data);
            return res.data?.mod
        }
       })
       return[isMod]
    
};

export default useMod;