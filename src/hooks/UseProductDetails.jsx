import { useQuery } from '@tanstack/react-query' 
import axiosInstance from '../api/axiosInstance';
import { UseLanguageStore } from '../store/LanguageStore';
export default function UseProductDetails(id) {
        const language = UseLanguageStore((state)=>state.language) || "en";
    
    const getProductDetails = async ()=>{

                const response = await axiosInstance.get(`Products/${id}`);



        return response.data.response
    }
  return useQuery({
    queryKey: ["ProductDetails", id, language],
    queryFn: () => getProductDetails(id),
    staleTime:1000*60*5
  })
}
