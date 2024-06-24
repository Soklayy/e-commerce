import { getOneProduct } from "@/actions/product"
import Update from "./Update"
import { getBrand } from "@/actions/brand"
import { getCategory } from "@/actions/category"

export default async function Page({ params }: { params: { id: string } }) {
    const [category, brand, product] = await Promise.all([
        getCategory(), getBrand(), getOneProduct(params.id)
    ])
    return <Update product={product} category={category} brand={brand} />
}