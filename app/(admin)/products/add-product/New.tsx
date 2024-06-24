'use client'
import { Brand, Category } from '@/models/model';
import { Toast } from 'primereact/toast';
import { FormEvent, useRef, useState } from 'react';
import UploadImage from './UploadImage';
import { useRouter } from 'next/navigation';
import { ArrowLeft, LoaderCircle } from 'lucide-react';
import { addProduct } from '@/actions/product';

interface Props {
    category: Category[];
    brand: Brand[]
}

export default function New({
    category, brand
}: Props) {
    const route = useRouter();
    const toast = useRef<Toast>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const onSubmit = async (event: FormEvent) => {
        event.preventDefault(); // Prevent default form submission
        setLoading(true);

        const formData = new FormData(event.target as HTMLFormElement);
        await addProduct(formData);

        (event.target as HTMLFormElement).reset();
        toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 900 });
        route.push('./')
        route.refresh()
    };

    console.log(loading)
    return (
        <>
            <div className="relative mx-6 p-2 bg-slate-50 rounded-md ">
                <button className='absolute flex capitalize items-end justify-center active:text-gray-500' onClick={() => route.push('./')}>
                    <ArrowLeft /> <span>back</span>
                </button>
                <p className='text-center capitalize text-lg font-extrabold'>
                    Update product
                </p>
            </div>
            <form onSubmit={onSubmit}>
                <div className="max-w-full mx-auto p-6 grid rid-cols-1 md:grid-cols-2 md:gap-3">
                    <div className="grid grid-cols-1 gap-4 bg-gray-50 p-5 rounded-md border">
                        {/* General Information Section */}
                        <h2 className="text-xl font-bold">General Information</h2>
                        <div>
                            <label htmlFor="productName" className="block text-sm font-medium mb-1">
                                Product Name
                            </label>
                            <input
                                type="text"
                                id="productName"
                                name="name"
                                className="w-full p-2 focus:outline-none bg-slate-100 border rounded-lg"
                            />
                        </div>
                        <div>
                            <label htmlFor="description" className="block text-sm font-medium mb-1">
                                Description
                            </label>
                            <textarea id="description" rows={3} cols={5} className="form-textarea w-full bg-slate-100 border rounded-lg p-2 focus:outline-none resize-none" name="description"></textarea>
                        </div>
                        <h2 className="text-xl font-bold mb-3">Product Media</h2>
                        {/* Product Media Section */}
                        <UploadImage />
                    </div>

                    <div className="space-y-4">
                        {/* Pricing Section */}
                        <div className="grid grid-cols-1 gap-4 bg-gray-50 p-5 rounded-md border">
                            <h2 className="text-xl font-bold mb-3">Pricing</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="basePrice" className="block text-sm font-medium">
                                        Base Pricing
                                    </label>
                                    <input
                                        type="text"
                                        id="basePrice"
                                        name="price"
                                        className="form-input w-full p-2 focus:outline-none bg-transparent bg-slate-100 border rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="discount" className="block text-sm font-medium capitalize">
                                        Disccount percentage (%)
                                    </label>
                                    <input
                                        type="text"
                                        id="discount"
                                        name="discount"
                                        className="form-input w-full p-2 focus:outline-none bg-transparent bg-slate-100 border rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Category Section */}
                        <div className="grid grid-cols-1 gap-4 bg-gray-50 p-5 rounded-md border">
                            <h2 className="text-xl font-bold mb-3">Category</h2>
                            <div>
                                <label htmlFor="category" className="block text-sm font-medium capitalize mb-1">
                                    product Category
                                </label>
                                <select
                                    // type="text"
                                    id="category"
                                    name="categoryId"
                                    className="form-input w-full p-2 focus:outline-none bg-transparent bg-slate-100 border rounded-lg"
                                >
                                    {
                                        category?.map((value, index) => (
                                            <option className="p-4" value={value?.id} key={index}>{value.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div>
                                <label htmlFor="brand" className="block text-sm font-medium capitalize">
                                    brand
                                </label>
                                <select
                                    // type="text"
                                    id="brand"
                                    name="brandId"
                                    className="form-input w-full p-2 focus:outline-none bg-transparent bg-slate-100 border rounded-lg"
                                >
                                    {
                                        brand?.map((value, index) => (
                                            <option value={value?.id} key={index}>{value?.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>

                        {/* Inventory Section */}
                        <div className="grid grid-cols-1 gap-4 bg-gray-50 p-5 rounded-md border">
                            <h2 className="text-xl font-bold mb-3">Inventory</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label htmlFor="quantity" className="block text-sm font-medium mb-1">
                                        Quantity
                                    </label>
                                    <input
                                        type="number"
                                        id="quantity"
                                        name='quantity'
                                        className="form-input w-full p-2 focus:outline-none bg-transparent bg-slate-100 border rounded-lg"
                                    />
                                </div>
                            </div>
                        </div >

                        {/* Actions */}
                        <div className="flex justify-end space-x-4" >
                            <button type="reset" className="px-6 py-2 border border-gray-300 text-sm font-medium rounded-md hover:bg-gray-100 focus:outline-none">
                                Cancel
                            </button>
                            <button type="submit" className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none">
                                Save Product
                            </button>
                        </div>
                    </div>
                </div >
            </form>
            {
                loading && (
                    <div className='absolute w-screen h-screen z-50 left-0 top-0 bg-gray-500 bg-opacity-25 flex items-center justify-center'>
                        <LoaderCircle className='text-xl animate-spin' />
                    </div>
                )
            }
        </>
    )
}
