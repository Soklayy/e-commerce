import { getCategory, updateCategory } from "@/actions/category";
import List from "./list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Categories",
  description: "Admin dashboard"
};
export default async function page() {

  const list = await getCategory()


  return (
    <div className='grid grid-cols-3 gap-4 h-full'>
      <List list={list || []} />
    </div>
  )
}
