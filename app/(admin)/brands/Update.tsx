import { ChangeEvent, useState } from 'react';
import { Brand } from '@/models/model';
import Image from 'next/image';

interface UpdatebrandModalProps {
    brand: Brand | null;
    onUpdate: (form: FormData) => void;
    onClose: () => void;
}

const UpdateBrandModal: React.FC<UpdatebrandModalProps> = ({ brand, onUpdate, onClose }) => {
    const [selectedImage, setSelectedImage] = useState<string | undefined>(brand?.logoUrl || undefined);


    const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedImage(URL.createObjectURL(event.target.files[0]));
        }
    };


    const handleUpdate = (form: FormData) => {
        if (!brand) return;
        onUpdate(form);
        onClose();
    };

    return (
        <form action={handleUpdate} className="top-0 left-0 absolute z-50 w-screen h-screen bg-gray-800 bg-opacity-50 flex items-center justify-center">

            <div className="bg-white rounded-lg p-8 w-1/2 space-y-4">
                <h2 className="text-xl font-semibold mb-4">Update brand</h2>
                <input type="text" hidden value={brand?.id} name='id' />
                <input type="text" hidden value={selectedImage || ""} name='logoUrl' />
                <div>
                    <label htmlFor="ct-name" className="block text-sm font-medium capitalize">
                        brand
                    </label>
                    <input
                        type="text"
                        id="ct-name"
                        name='name'
                        defaultValue={brand?.name}
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
                <div className="flex justify-end">
                    <button type='submit'
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Update
                    </button>
                    <button type='reset'
                        className="ml-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </form>
    );
};

export default UpdateBrandModal;
