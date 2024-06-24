import { getBrand } from "@/actions/brand";
import { getCategory } from "@/actions/category";
import New from "./New";


const ProductManagement = async () => {

  const category = await getCategory()
  const brand = await getBrand()
  return (
    <New brand={brand} category={category} />
  );
};
export default ProductManagement;



