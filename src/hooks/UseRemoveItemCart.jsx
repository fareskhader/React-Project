import React from 'react'
import AuthAxiosInstance from '../api/AuthAxiosInstance';
import {  useMutation, useQueryClient } from '@tanstack/react-query';

export default function UseRemoveItemCart() {
        const queryClient=useQueryClient();
    
    const removeItemCart=async(productId)=>{
        const response=await AuthAxiosInstance.delete(`Carts/${productId}`);
        return response.data;
    }

  return useMutation({
    mutationFn:removeItemCart,
    onSuccess:()=>{
        queryClient.invalidateQueries({queryKey:['cart']})
    },
    onError:()=>{
        console.error('Failed to remove item from cart');
    }

})}
