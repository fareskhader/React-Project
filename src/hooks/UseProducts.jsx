import axios from 'axios'
import { useQuery } from '@tanstack/react-query' 
import axiosInstance from '../api/axiosInstance';
import { UseLanguageStore } from '../store/LanguageStore';
 const getProducts = async()=>{

    const response = await axiosInstance.get(`Products`);

        return response.data.response.data
    }

export default function UseProducts() {
    const language = UseLanguageStore((state)=>state.language) || "en";
return useQuery({
        queryKey:['Products', language],
        queryFn : getProducts,
        staleTime:1000*60*15
      })
}


    
