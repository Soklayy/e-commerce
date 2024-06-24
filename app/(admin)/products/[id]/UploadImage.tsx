'use client';

import Image from "next/image";
import { useState } from "react";

interface Props {
    images: { id: string, url: string }[]
}

interface ImageUploadProps {
    image: { id: string, url: string } | undefined;
    setImage: (url: { id: string, url: string } | undefined) => void;
}

const ImageUpload = ({ image, setImage }: ImageUploadProps) => {
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const fileUrl = URL.createObjectURL(file);
            setImage({ id: image?.id || '', url: fileUrl });
        }
    };

    return (
        <div className="flex justify-center items-center w-full">
            <label className="flex flex-col justify-center items-center w-full h-32 border-2 border-gray-300 border-dashed cursor-pointer">
                <div className="text-sm text-gray-600">
                    {image ? (
                        <Image
                            src={image?.url}
                            alt="Uploaded Image"
                            height={150}
                            width={150}
                            className='aspect-square h-full m-auto'
                            onError={(e) => {
                                setImage(undefined)
                            }}
                        />
                    ) : (
                        <>
                            <span>Upload a file</span>
                            <p className="text-xs">or drag and drop</p>
                        </>
                    )}
                </div>
                <input
                    type="file"
                    className="hidden"
                    name="images"
                    accept="image/*"
                    onChange={handleFileChange}
                />
            </label>
            <input type="text" value={image?.id} hidden name="imageId" />
        </div>
    );
};

export default function UploadImage({ images }: Props) {
    const [image1, setImage1] = useState<{ id: string, url: string } | undefined>(images[0]);
    const [image2, setImage2] = useState<{ id: string, url: string } | undefined>(images[1]);
    const [image3, setImage3] = useState<{ id: string, url: string } | undefined>(images[2]);
    const [image4, setImage4] = useState<{ id: string, url: string } | undefined>(images[3]);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
            <ImageUpload image={image1} setImage={setImage1} />
            <ImageUpload image={image2} setImage={setImage2} />
            <ImageUpload image={image3} setImage={setImage3} />
            <ImageUpload image={image4} setImage={setImage4} />
        </div>
    );
}



