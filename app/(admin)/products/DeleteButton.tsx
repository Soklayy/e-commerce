"use client"
import { removeProduct } from '@/actions/product';
import { ProductModel } from '@/models/model';
import { LoaderCircle, Trash2 } from 'lucide-react';
import { Button } from 'primereact/button';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Dispatch, SetStateAction, useRef, useState } from 'react';

interface Props {
    id: string;
    refreshData: Dispatch<SetStateAction<ProductModel[]>>
}

export default function DeleteButton({ id, refreshData }: Props) {
    const toast = useRef<Toast>(null);
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const accept = async () => {
        setLoading(true)
        await removeProduct(id);
        refreshData(pre => pre ? pre.filter(item => item.id !== id) : []);
        toast.current?.show({ severity: 'info', summary: 'Confirmed', detail: `Product with id ${id} deleted`, life: 900 });
        setVisible(false);
        setLoading(false)
    };

    const reject = () => {
        toast.current?.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 900 });
        setVisible(false);
    };

    const confirmDelete = () => {
        setVisible(true);
    };

    return (
        <>
            <Toast ref={toast} />
            {
                loading && (
                    <div className='absolute w-screen h-screen z-50 left-0 top-0 bg-gray-500 bg-opacity-25 flex items-center justify-center'>
                        <LoaderCircle className='text-xl animate-spin' />
                    </div>
                )
            }
            <ConfirmDialog
                visible={visible}
                onHide={() => setVisible(false)}
                message="Do you want to delete this record?"
                header="Delete Confirmation"
                icon="pi pi-info-circle"
                acceptClassName="p-button-danger"
                accept={accept}
                reject={reject}
            />
            <Button
                aria-label="Delete"
                className="text-red-500 rounded-full bg-red-300 p-2 hover:bg-red-200 active:bg-green-300 border-2 border-red-400"
                onClick={confirmDelete}
            >
                <Trash2 absoluteStrokeWidth size={15} />
            </Button>
        </>
    );
}



