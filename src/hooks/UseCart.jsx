import { useAuthStore } from '../store/useAuthStore'
import AuthAxiosInstance from '../api/AuthAxiosInstance'
import { useQuery } from '@tanstack/react-query'
import { UseLanguageStore } from '../store/LanguageStore';
export default function UseCart() {
    const Token = useAuthStore((state)=>state.token)
   const language = UseLanguageStore((state)=>state.language) || "en";
    const getCart= async()=>{
        const response=await AuthAxiosInstance.get(`Carts`);
        return response.data;   
    }
  return useQuery({
    queryKey:["cart", language],
    queryFn:getCart,
    enabled:!!Token,
    staleTime:1000*60*5
  })
}
