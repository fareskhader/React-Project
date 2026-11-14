import React from 'react'
import axios from 'axios'
import { useAuthStore } from '../store/useAuthStore'
import { useMutation } from '@tanstack/react-query'
import axiosInstance from '../api/axiosInstance'
import AuthAxiosInstance from '../api/AuthAxiosInstance'
import { useQueryClient } from '@tanstack/react-query'
export default function UseAddToCart() {

    const token = useAuthStore((state)=>state.token)

    const queryClient = useQueryClient();
    const addToCart = async(productId)=>{

        const response=await AuthAxiosInstance.post('/Carts',{ProductId:productId,Count:1})

       
        return response.data
    }
  return useMutation({
    mutationFn:addToCart,
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:['cart']})
    }
  })
}
