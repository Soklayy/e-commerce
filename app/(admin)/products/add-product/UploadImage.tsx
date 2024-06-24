'use client';

import Image from "next/image";
import { useState } from "react";

export default function UploadImage() {
    const [image1, setImage1] = useState<string>();
    const [image2, setImage2] = useState<string>();
    const [image3, setImage3] = useState<string>();
    const [image4, setImage4] = useState<string>();
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
            <div className="flex justify-center items-center w-full">
                <label className="flex flex-col justify-center items-center w-full h-32 border-2 border-gray-300 border-dashed cursor-pointer">
                    <div className="text-sm text-gray-600">
                        {image1 ? (
                            <Image src={image1} alt="Uploaded Image" height={150} width={150} className='aspect-square h-full m-auto' />
                        ) : (
                            <>
                                <span>Upload a file</span>
                                <p className="text-xs">or drag and drop</p>
                            </>
                        )}
                    </div>
                    <input type="file" className="hidden" name="images" accept="image/*" onChange={(e) => e.target.files && setImage1(URL.createObjectURL(e.target.files[0]))} />
                </label>
            </div>
            <div className="flex justify-center items-center w-full">
                <label className="flex flex-col justify-center items-center w-full h-32 border-2 border-gray-300 border-dashed cursor-pointer">
                    <div className="text-sm text-gray-600">
                        {image2 ? (
                            <Image src={image2} alt="Uploaded Image" height={150} width={150} className='aspect-square h-full m-auto' />
                        ) : (
                            <>
                                <span>Upload a file</span>
                                <p className="text-xs">or drag and drop</p>
                            </>
                        )}
                    </div>
                    <input type="file" className="hidden" name="images" accept="image/*"
                        onChange={(e) => e.target.files && setImage2(URL.createObjectURL(e.target.files[0]))}
                    />
                </label>
            </div>

            <div className="flex justify-center items-center w-full">
                <label className="flex flex-col justify-center items-center w-full h-32 border-2 border-gray-300 border-dashed cursor-pointer">
                    <div className="text-sm text-gray-600">
                        {image3 ? (
                            <Image src={image3} alt="Uploaded Image" height={150} width={150} className='aspect-square h-full' />
                        ) : (
                            <>
                                <span>Upload a file</span>
                                <p className="text-xs">or drag and drop</p>
                            </>
                        )}
                    </div>
                    <input type="file" className="hidden" name="images" accept="image/*"
                        onChange={(e) => e.target.files && setImage3(URL.createObjectURL(e.target.files[0]))}
                    />
                </label>
            </div>

            <div className="flex justify-center items-center w-full">
                <label className="flex flex-col justify-center items-center w-full h-32 border-2 border-gray-300 border-dashed cursor-pointer">
                    <div className="text-sm text-gray-600">
                        {image4 ? (
                            <Image src={image4} alt="Uploaded Image" height={150} width={150} className='aspect-square h-full' />
                        ) : (
                            <>
                                <span>Upload a file</span>
                                <p className="text-xs">or drag and drop</p>
                            </>
                        )}
                    </div>
                    <input type="file" className="hidden" name="images" accept="image/*"
                        onChange={(e) => e.target.files && setImage4(URL.createObjectURL(e.target.files[0]))} />
                </label>
            </div>
        </div>
    )
}
