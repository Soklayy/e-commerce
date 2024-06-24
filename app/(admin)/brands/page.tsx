import { getBrand } from '@/actions/brand';
import List from './List';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Admin | Brands",
    description: "Admin dashboard"
};
export default async function Page() {

    const brandList = await getBrand();

    return (
        <div className="grid grid-cols-3 gap-4 h-full">
            <List list={brandList} />
        </div>
    );
}
