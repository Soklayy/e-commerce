import { getBrand } from "@/actions/brand";
import { getCategory } from "@/actions/category";
import New from "./New";
import { Category } from "@/models/model";
import { Dispatch, SetStateAction } from "react";

interface Props {
  refreshData: Dispatch<SetStateAction<Category[]>>
}

const ProductManagement = async ({ refreshData }: Props) => {

  const category = await getCategory()
  const brand = await getBrand()
  return (
    <New brand={brand} category={category} />
  );
};
export default ProductManagement;



