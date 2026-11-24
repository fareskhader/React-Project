import axios from 'axios'
import { useQuery } from '@tanstack/react-query' 
import axiosInstance from '../api/axiosInstance';
import { UseLanguageStore } from '../store/LanguageStore';


 const getCategories = async()=>{
    
     const response = await axiosInstance.get(`Categories`);

        return response.data.response.data
    }

export default function UseCategories() {
        const language = UseLanguageStore((state)=>state.language) || "en";
return useQuery({
        queryKey:['Categories', language],
        queryFn:getCategories,
        staleTime:1000*60*15
      })
}


    
