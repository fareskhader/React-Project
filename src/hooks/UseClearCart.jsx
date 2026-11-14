import AuthAxiosInstance from '../api/AuthAxiosInstance';
import { useMutation, useQueryClient } from '@tanstack/react-query';


export default function UseClearCart() {
    const queryClient=useQueryClient();
    const ClearCart = async()=>{
    const response=await AuthAxiosInstance.delete('Carts/clear');
    return response.data;
}

  return useMutation({
    mutationFn:ClearCart,
    onSuccess:()=>{
        queryClient.invalidateQueries({queryKey:['cart']})
    },
    onError:()=>{
        console.error('Failed to clear cart');
    }
})
}