"use server"
import { AxiosResponse } from "axios";
import { axiosInstance } from "./api-instant";
import { Brand } from "@/models/model";

export async function addBrand(form: FormData) {
    try {
        const response = await axiosInstance.post<any, AxiosResponse<Brand>>(`/brand`, form, {
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

export const getBrand = async () => {
    try {
        const response = await axiosInstance.get<any, AxiosResponse<Brand[]>>('/brand');
        return response.data;
    } catch (error) {
        console.error('Error fetching brands:', error);
        throw error;
    }
};

export const removeBrand = async (id: string) => {
    try {
        const response = await axiosInstance.delete(`/brand/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error removing brand with id ${id}:`, error);
        throw error;
    }
};


export async function updateBrand(form: FormData) {
    const id = form.get('id');
    form.delete('id');
    form.delete('logoUrl')
    try {
        const response = await axiosInstance.patch(`/brand/${id}`, form)
        return response.data as Brand;
    } catch (error: any) {
        console.error(`Error removing category`, error, error?.response?.data);
    }
}

