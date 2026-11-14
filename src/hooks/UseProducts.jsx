import axios from 'axios'
import { useQuery } from '@tanstack/react-query' 
import axiosInstance from '../api/axiosInstance';
 const getProducts = async()=>{

    const response = await axiosInstance.get(`Products`);

        return response.data.response.data
    }

export default function UseProducts() {
return useQuery({
        queryKey:['Products'],
        queryFn : getProducts,
        staleTime:1000*60*15
      })
}


    
