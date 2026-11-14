import axios from 'axios'
import { useQuery } from '@tanstack/react-query' 
import axiosInstance from '../api/axiosInstance';
 const getCategories = async()=>{
    
               const response = await axiosInstance.get(`Categories`);

        return response.data.response.data
    }

export default function UseCategories() {
return useQuery({
        queryKey:['Categories'],
        queryFn:getCategories,
        staleTime:1000*60*15
      })
}


    
