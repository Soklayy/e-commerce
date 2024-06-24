"use server"
import { Category } from "@/models/model";
import { axiosInstance } from "./api-instant";
import { AxiosResponse } from "axios";

export const getCategory = async (): Promise<Category[]> => {
    try {
        const response = await axiosInstance.get<any, AxiosResponse<Category[]>>('/category')
        return response?.data
    } catch (error) {
        console.log(error)
        throw error
    }
}

export async function addCategory(form: FormData) {
    try {
        const response = await axiosInstance.post<any, AxiosResponse<Category>>(`/category`, form, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Accept: 'application/json',
            }
        });

        return response.data
    } catch (error: any) {
        console.error('Error:', error?.response);
    }
}

export async function removeCategory(id: string) {
    try {
        const response = await axiosInstance.delete(`/category/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error removing category with id ${id}:`, error);
        throw error;
    }
}

export async function updateCategory(form: FormData) {
    const id = form.get('id');
    form.delete('id');
    try {
        form.delete('coverUrl')
        const response = await axiosInstance.patch(`/category/${id}`, form)
        return response.data as Category;
    } catch (error: any) {
        console.error(`Error removing category`, error, error?.response?.data);
    }
}