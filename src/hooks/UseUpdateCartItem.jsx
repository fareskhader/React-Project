import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import AuthAxiosInstance from '../api/AuthAxiosInstance';


export default function UseUpdateCartItem() {

    const queruClient=useQueryClient();
    const updateCartItem=async({productId,count})=>{

        const response=await AuthAxiosInstance.patch(`Carts/${productId}`,{count});
        return response.data;
    }

  return useMutation({
    mutationFn:updateCartItem,
    onSuccess:()=>{
        queruClient.invalidateQueries({queryKey:['cart']})
    }
  })
}
