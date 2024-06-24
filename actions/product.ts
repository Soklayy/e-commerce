"use server"
import { AxiosResponse } from "axios";
import { axiosInstance } from "./api-instant";
import { ProductModel } from "@/models/model";

export async function getProduct() {
    return (await axiosInstance.get('/product'))?.data;
}

export async function getOneProduct(id: string) {
    const responce = await axiosInstance.get<any, AxiosResponse<ProductModel>>(`/product/${id}`)
    return responce.data;
}

export async function addProduct(form: FormData) {
    try {
        const discount = form.get('discount')
        form.set('discount', `${discount ? Number(discount) / 100 : 0}`)
        const responce = await axiosInstance.post<any, AxiosResponse<ProductModel>>('/product', form);
        return responce?.data
    } catch (error: any) {
        console.log("product", error, error?.response?.data)
    }
}

export const removeProduct = async (id: string) => {
    try {
        const response = await axiosInstance.delete(`/product/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error removing brand with id ${id}:`, error);
        throw error;
    }
};


export const updateProduct = async (form: FormData) => {
    const id = form.get('id');
    form.delete('id');
    try {
        console.log(form.getAll('imageId'))
        // const response = await axiosInstance.patch(`/product/${id}`,form);
        // return response.data;
    } catch (error) {
        console.error(`Error removing brand with id ${id}:`, error);
        throw error;
    }
};