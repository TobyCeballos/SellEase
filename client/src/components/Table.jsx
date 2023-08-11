import React from 'react'

const Table = ({data}) => {
  return (
    <table class=" text-center text-sm bg-slate-50 font-light w-full">
      <thead
        class="border-b bg-slate-600 font-medium text-white dark:border-neutral-500 dark:bg-slate-700">
        <tr>
          <th scope="col" class=" px-6 py-4 text-left">ID</th>
          <th scope="col" class=" px-6 py-4 text-left">Description</th>
          <th scope="col" class=" px-6 py-4 text-left">Brand</th>
          <th scope="col" class=" px-6 py-4 text-left">Price</th>
          <th scope="col" class=" px-6 py-4 whitespace-nowrap text-left">ID Prov</th>
          <th scope="col" class=" px-6 py-4 text-left">Provider</th>
          <th scope="col" class=" px-6 py-4 text-left">Cost</th>
          <th scope="col" class=" px-6 py-4 text-left">Action</th>
        </tr>
      </thead>
      <tbody className=''>

        {data.map((product) => (
          <tr key={product.id} className="border-b hover:bg-gray-100 duration-300 transition-all">
            <td className="whitespace-nowrap px-6 py-4 text-left font-medium">{product.id}</td>
            <td className="whitespace-nowrap px-6 py-4 text-left">{product.description}</td>
            <td className="whitespace-nowrap px-6 py-4 text-left">{product.brand}</td>
            <td className="whitespace-nowrap px-6 py-4 text-right">{product.price}</td>
            <td className="whitespace-nowrap px-6 py-4 text-right">AVA001</td>
            <td className="whitespace-nowrap px-6 py-4 text-right">Lekons</td>
            <td className="whitespace-nowrap px-6 py-4 text-right">{product.cost}</td>
            <td className="whitespace-nowrap px-6 py-4 text-right">
              <button className="w-full bg-amber-500 text-slate-100 font-semibold rounded-md hover:bg-amber-400 duration-300 transition-all">
                Edit
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

  )
}

export default Table