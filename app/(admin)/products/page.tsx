import { getProduct } from "@/actions/product";
import List from "./List";
import { ProductModel } from "@/models/model";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Admin | Products",
    description: "Admin dashboard"
  };

export default async function ProductList() {

    const productList = await getProduct()

    return (
        <List list={productList?.data as ProductModel[]} />
    )
}
