import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className="container mx-auto">
      <div className="bg-blue-500 text-white py-4 px-6 rounded-t-lg">
        <h1 className="text-xl font-semibold">Product Orders</h1>
      </div>
      <div className="bg-white shadow-md rounded-b-lg overflow-hidden">
        <div className="flex justify-around bg-gray-50 p-4">
          <button className="text-gray-700 hover:text-blue-500">All (4)</button>
          <button className="text-gray-700 hover:text-blue-500">Pending: 1</button>
          <button className="text-gray-700 hover:text-blue-500">Approved: 2</button>
          <button className="text-gray-700 hover:text-blue-500">Rejected: 0</button>
          <button className="text-gray-700 hover:text-blue-500">Shipping: 1</button>
          <button className="text-gray-700 hover:text-blue-500">Completed: 0</button>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image Bank</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Order</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PhoneNumber</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">1</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Image src="/product-image-url" width={30} height={30} alt="Product" className="w-12 h-12 object-cover" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Image src="/product-image-url" width={30} height={30} alt="Product" className="w-12 h-12 object-cover" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">ADILETTE AQUA SLIDES</td>
              <td className="px-6 py-4 whitespace-nowrap">$28</td>
              <td className="px-6 py-4 whitespace-nowrap">2</td>
              <td className="px-6 py-4 whitespace-nowrap">Tue/27/Jun/2023</td>
              <td className="px-6 py-4 whitespace-nowrap">+1 2025545456</td>
              <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Approved</span></td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><a href="#" className="text-indigo-600 hover:text-indigo-900">...</a></td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">2</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Image src="/product-image-url" width={30} height={30} alt="Product" className="w-12 h-12 object-cover" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Image src="/product-image-url" width={30} height={30} alt="Product" className="w-12 h-12 object-cover" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">Adidas Adilette Slide Sandals</td>
              <td className="px-6 py-4 whitespace-nowrap">$30.00</td>
              <td className="px-6 py-4 whitespace-nowrap">1</td>
              <td className="px-6 py-4 whitespace-nowrap">Tue/27/Jun/2023</td>
              <td className="px-6 py-4 whitespace-nowrap">+1 2025545456</td>
              <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Approved</span></td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><a href="#" className="text-indigo-600 hover:text-indigo-900">...</a></td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">3</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Image src="/product-image-url" width={30} height={30} alt="Product" className="w-12 h-12 object-cover" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Image src="/product-image-url" width={30} height={30} alt="Product" className="w-12 h-12 object-cover" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">Phuma Trail Running Shoes</td>
              <td className="px-6 py-4 whitespace-nowrap">$90.00</td>
              <td className="px-6 py-4 whitespace-nowrap">1</td>
              <td className="px-6 py-4 whitespace-nowrap">Tue/27/Jun/2023</td>
              <td className="px-6 py-4 whitespace-nowrap">+1 2025545456</td>
              <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">Shipping</span></td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><a href="#" className="text-indigo-600 hover:text-indigo-900">...</a></td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">4</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Image src="/product-image-url" width={30} height={30} alt="Product" className="w-12 h-12 object-cover" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Image src="/product-image-url" width={30} height={30} alt="Product" className="w-12 h-12 object-cover" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">NB Basketball Shoes</td>
              <td className="px-6 py-4 whitespace-nowrap">$90.00</td>
              <td className="px-6 py-4 whitespace-nowrap">1</td>
              <td className="px-6 py-4 whitespace-nowrap">Tue/27/Jun/2023</td>
              <td className="px-6 py-4 whitespace-nowrap">+1 2025545456</td>
              <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span></td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><a href="#" className="text-indigo-600 hover:text-indigo-900">...</a></td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  )
}
