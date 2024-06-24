'use client'
import { useTransition } from 'react'
import { useState } from 'react';
import Image from 'next/image';
import { LoaderCircle, PenIcon } from 'lucide-react';
import { Category } from '@/models/model';
import New from './new';
import DeleteButton from './DeleteButton';
import { updateCategory } from '@/actions/category';
import UpdateCategoryModal from './Update';

interface Props {
    list: Category[]
}

export default function List({ list }: Props) {
    const [search, setSearch] = useState('');
    const [categoryList, setCategoryList] = useState<Category[]>(list);
    const [showModal, setShowModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
    const [isPending, startTransaction] = useTransition()
    const handleCategoryUpdate = async (form: FormData) => {
        const coverUrl = form.get('coverUrl');
        const id = form.get('id');
        setShowModal(false);
        startTransaction(async () => {
            const category = await updateCategory(form);
            const list = categoryList.filter(item => item.id != id);
            if (coverUrl && category) { category.coverUrl = coverUrl as string }
            if (category) {
                setCategoryList([category,...list])
            }
        })
        return;
    };

    function handleCloseModal(): void {
        setShowModal(false)
    }
    return (
        <>
            <div className='col-span-2 h-full' >
                <input
                    type="text"
                    placeholder="Search Category"
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow">
                    <thead className="bg-gray-100 border-b border-gray-300">
                        <tr>
                            <th className="py-2 px-4 border-r border-gray-300 text-left">#</th>
                            <th className="py-2 px-4 border-r border-gray-300 text-center">Image</th>
                            <th className="py-2 px-4 border-r border-gray-300 text-left">Categories</th>
                            <th className="py-2 px-4 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categoryList?.map((category, index) => (
                            <tr key={index} className="border-b border-gray-200">
                                <td className="py-2 px-4 border-r border-gray-300 text-left">{index + 1}</td>
                                <td className="py-2 px-4 border-r border-gray-300 text-center">
                                    <Image src={category.coverUrl || ''} alt={category.name} width={50} height={50} className="aspect-square w-10 m-auto" />
                                </td>
                                <td className="py-2 px-4 border-r border-gray-300 text-left">{category.name}</td>
                                <td className="py-2 px-4 text-left">
                                    <div className='flex justify-center gap-3'>
                                        <button className="text-blue-500 rounded-full bg-blue-300 p-2 hover:bg-blue-200 active:bg-green-300 border-2 border-blue-400" onClick={() => {
                                            setShowModal(true)
                                            setSelectedCategory(category)
                                        }} disabled={isPending}>
                                            {isPending && selectedCategory?.id === category.id ? <LoaderCircle absoluteStrokeWidth size={15} className=' animate-spin' /> : <PenIcon absoluteStrokeWidth size={15} />}
                                        </button>
                                        <DeleteButton id={category.id} refreshData={setCategoryList} />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <New refreshData={setCategoryList} />
            {showModal && !isPending && (
                <UpdateCategoryModal
                    category={selectedCategory}
                    onUpdate={handleCategoryUpdate}
                    onClose={handleCloseModal}
                />
            )}
        </>
    )
}
