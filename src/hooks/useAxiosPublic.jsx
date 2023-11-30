import axios from "axios";
export const axiosPublic = axios.create({
    baseURL: 'https://techhub-server-two.vercel.app',
   
  });

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;