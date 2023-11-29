import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useProducts = () => {
  const axiosSecure = useAxiosSecure();
  
  const { refetch, data: product = [] } = useQuery({
    queryKey: ['product'],
    queryFn: async () => {
      const res = await axiosSecure.get('/products');
      return res.data;
    }
  });

  return [product, refetch];
};

export default useProducts;
