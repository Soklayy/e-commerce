'use client';

import { ProductModel } from "@/models/model";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DeleteButton from "./DeleteButton";
import { PenIcon } from "lucide-react";

interface Props {
    list: ProductModel[]
}
export default function List({ list }: Props) {

    const [productList, setProductList] = useState<ProductModel[]>(list);
    return (
        <>
            <div className="flex flex-row-reverse justify-between items-center mb-6">
                <Link href='products/add-product' className="bg-green-500 text-white px-4 py-2 rounded">+ Add New</Link>
            </div>
            <input
                type="text"
                placeholder="Search by name"
                className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow">
                <thead className="bg-gray-100 border-b border-gray-300">
                    <tr>
                        <th className="py-2 px-4 border-r border-gray-300 text-left">#</th>
                        <th className="py-2 px-4 border-r border-gray-300 text-left">Title</th>
                        <th className="py-2 px-4 border-r border-gray-300 text-center">Image</th>
                        <th className="py-2 px-4 border-r border-gray-300 text-left">Prices</th>
                        <th className="py-2 px-4 border-r border-gray-300 text-left">Discounts</th>
                        <th className="py-2 px-4 border-r border-gray-300 text-left">Brands</th>
                        <th className="py-2 px-4 border-r border-gray-300 text-left">Category</th>
                        <th className="py-2 px-4 border-r border-gray-300 text-left">Product options</th>
                        <th className="py-2 px-4 text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productList?.map((product, index) => (
                            <tr key={index} className="border-b border-gray-200">
                                <td className="py-2 px-4 border-r border-gray-300 text-left">{index + 1}</td>
                                <td className="py-2 px-4 border-r border-gray-300 text-left max-w-36 truncate">
                                    {product.name}
                                </td>
                                <td className="py-2 px-4 border-r border-gray-300 text-center" align="center">
                                    <span className="flex w-full justify-center">
                                        <Image src={product?.images[0]?.url || ""} alt={product.name || ''} width={50} height={50} />
                                    </span>
                                </td>
                                <td className="py-2 px-4 border-r border-gray-300 text-left">{'$' + product.price}</td>
                                <td className="py-2 px-4 border-r border-gray-300 text-left">{'%' + Number(product.discount) * 100}</td>
                                <td className="py-2 px-4 border-r border-gray-300 text-left">{product?.brand?.name}</td>
                                <td className="py-2 px-4 border-r border-gray-300 text-left">{product?.category?.name}</td>
                                <td className="py-2 px-4 border-r border-gray-300 text-left">
                                    <select name="" id="" className=' border-0 outline-none w-full'>
                                        <option value="18GB RAM">8GB RAM</option>
                                        <option value="18GB RAM">16GB RAM</option>
                                        <option value="18GB RAM">32GB RAM</option>
                                        <option value="edit">Edits</option>
                                    </select>
                                </td>
                                <td className="py-2 px-4">
                                    <span className='flex justify-center gap-3'>
                                        <Link href={`products/${product.id}`} className="text-blue-500 rounded-full bg-blue-300 p-2 hover:bg-blue-200 active:bg-green-300 border-2 border-blue-400" >
                                            <PenIcon absoluteStrokeWidth size={15} />
                                        </Link>
                                        <DeleteButton id={product?.id} refreshData={setProductList} />
                                    </span>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
