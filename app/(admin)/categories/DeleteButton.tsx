"use client"
import { removeCategory } from '@/actions/category';
import {Category } from '@/models/model';
import { Trash2 } from 'lucide-react';
import { Button } from 'primereact/button';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Dispatch, SetStateAction, useRef, useState } from 'react';

interface Props {
    id: string;
    refreshData: Dispatch<SetStateAction<Category[]>>
}

export default function DeleteButton({ id, refreshData }: Props) {
    const toast = useRef<Toast>(null);
    const [visible, setVisible] = useState(false);

    const accept = async () => {
        // Simulate a delete operation here
        toast.current?.show({ severity: 'info', summary: 'Confirmed', detail: `Category with id ${id} deleted`, life: 900 });
        await removeCategory(id);
        refreshData(pre => pre ? pre.filter(item => item.id !== id) : []);
        setVisible(false);
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



