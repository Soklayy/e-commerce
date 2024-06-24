"use client"
import { addBrand } from '@/actions/brand';
import { Brand } from '@/models/model';
import { Loader2Icon } from 'lucide-react';
import Image from 'next/image';
import { Toast } from 'primereact/toast';
import { ChangeEvent, Dispatch, SetStateAction, useRef, useState, FormEvent } from 'react';

interface Props {
  refreshData: Dispatch<SetStateAction<Brand[]>>
}

export default function New({ refreshData }: Props) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const toast = useRef<Toast>(null);
  const clear = useRef<HTMLButtonElement>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault(); // Prevent default form submission
    setLoading(true);
    
    const formData = new FormData(event.target as HTMLFormElement);
    const brand = await addBrand(formData);
    
    if (brand && selectedImage) {
      brand.logoUrl = selectedImage;
    }

    if (brand) {
      refreshData((pre: Brand[] | null) => (pre ? [...pre, brand] : [brand]));
    }

    setLoading(false);
    setSelectedImage(null);
    (event.target as HTMLFormElement).reset();
    toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 900 });
  };

  return (
    <>
      <Toast ref={toast} />
      <form className='bg-gray-50 p-5 rounded-md border-2 grid grid-cols-1 gap-3' onSubmit={onSubmit}>
        <h2 className="text-xl font-bold mb-3 capitalize">New Brand</h2>
        <div>
          <label htmlFor="ct-name" className="block text-sm font-medium capitalize">
            Brand
          </label>
          <input
            type="text"
            id="ct-name"
            name='name'
            className="form-input w-full p-2 focus:outline-none bg-transparent bg-slate-100 border rounded-lg"
            autoComplete="off"
          />
        </div>
        <div className='border'>
          <label className="flex flex-col m-auto justify-center items-center w-[33.333%] aspect-square border-2 border-gray-300 border-dashed cursor-pointer">
            <div className="text-sm text-gray-600 text-center">
              {selectedImage ? (
                <Image src={selectedImage} alt="Uploaded Image" height={150} width={150} className='aspect-square h-full' />
              ) : (
                <>
                  <span>Upload a file</span>
                  <p className="text-xs">or drag and drop</p>
                </>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              name='logo'
              onChange={handleImageUpload}
            />
          </label>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type='reset'
            className="px-6 py-2 border border-gray-300 text-sm font-medium rounded-md hover:bg-gray-100 focus:outline-none"
            onClick={() => setSelectedImage(null)}
            disabled={loading}
            ref={clear}
          >
            Cancel
          </button>
          <button
            type='submit'
            className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none"
            disabled={loading}
          >
            {loading ? <Loader2Icon className='animate-spin' /> : 'Save'}
          </button>
        </div>
      </form>
    </>
  );
}
