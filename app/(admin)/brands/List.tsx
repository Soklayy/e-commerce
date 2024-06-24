"use client"
import Image from 'next/image';
import { Brand } from "@/models/model"
import { useState, useTransition } from "react"
import DeleteButton from './DeleteButton';
import New from './new';
import { LoaderCircle, PenIcon } from 'lucide-react';
import { updateBrand } from '@/actions/brand';
import UpdateCategoryModal from '../categories/Update';
import UpdateBrandModal from './Update';

interface Props {
    list: Brand[];
}

export default function List({ list }: Props) {
    const [brandList, setBrandList] = useState<Brand[]>(list);
    const [selectedbrand, setSelectedbrand] = useState<Brand | null>(null);
    const [isPending, startTransaction] = useTransition()
    const [showModal, setShowModal] = useState(false);
    const handleBrandUpdate = async (form: FormData) => {
        const coverUrl = form.get('logoUrl');
        const id = form.get('id');
        setShowModal(false);
        startTransaction(async () => {
            const brand = await updateBrand(form);
            const list = brandList?.filter(item => item.id != id);
            if (coverUrl && brand) { brand.logoUrl = coverUrl as string }
            if (brand) {
                setBrandList([brand, ...list])
            }
        })
        return;
    };

    function handleCloseModal(): void {
        setShowModal(false)
    }

    return (
        <>
            <div className="col-span-2">
                <input
                    type="text"
                    placeholder="Search by name"
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                // value={search}
                // onChange={(e) => setSearch(e.target.value)}
                />
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow">
                    <thead className="bg-gray-100 border-b border-gray-300">
                        <tr>
                            <th className="py-2 px-4 border-r border-gray-300 text-left">#</th>
                            <th className="py-2 px-4 border-r border-gray-300 text-center">Image</th>
                            <th className="py-2 px-4 border-r border-gray-300 text-left">Brand</th>
                            <th className="py-2 px-4 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {brandList?.map((brand, index) => (
                            <tr key={brand.id} className="border-b border-gray-200">
                                <td className="py-2 px-4 border-r border-gray-300 text-left">{index + 1}</td>
                                <td className="py-2 px-4 border-r border-gray-300 text-center">
                                    <Image src={brand?.logoUrl || ''} alt={brand.name} width={50} height={50} className="aspect-square w-10 m-auto" />
                                </td>
                                <td className="py-2 px-4 border-r border-gray-300 text-left">{brand.name}</td>
                                <td className="py-2 px-4 text-left">
                                    <div className="flex justify-center gap-3">
                                        <button className="text-blue-500 rounded-full bg-blue-300 p-2 hover:bg-blue-200 active:bg-green-300 border-2 border-blue-400" onClick={() => {
                                            setSelectedbrand(brand);
                                            setShowModal(true)
                                        }}
                                            disabled={isPending}
                                        >
                                            {isPending && selectedbrand?.id === brand.id ? <LoaderCircle absoluteStrokeWidth size={15} className='animate-spin' /> : <PenIcon absoluteStrokeWidth size={15} />}
                                        </button>
                                        <DeleteButton id={brand.id} refreshData={setBrandList} />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <New refreshData={setBrandList} />
            {showModal && !isPending && (
                <UpdateBrandModal
                    brand={selectedbrand}
                    onUpdate={handleBrandUpdate}
                    onClose={handleCloseModal}
                />
            )}
        </>

    )
}
