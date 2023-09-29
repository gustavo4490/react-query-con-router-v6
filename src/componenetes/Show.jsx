import React from 'react'
import { getAll } from '../Utilitis/api'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom';
import Loading from './loading';
import GoogleStyleLoading from './GoogleStyleLoading';

const Show = () => {

  const { data, isError, error, isLoading } = useQuery('products', getAll);
  if (isError) {
    return <span>Error {error.message}</span>
  }

  if (isLoading) {
    
    // return <Loading />;
    return <GoogleStyleLoading />;

  }


  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '70%', margin: '5% auto' }}>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Acctions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((product) =>
              <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"> {product.id}</td>
                <td className="px-6 py-4"> {product.title} </td>
                <td className="px-6 py-4"> {product.category} </td>
                <td className="px-6 py-4"> {product.price} </td>
                <td className="px-6 py-4"> <Link to={`/products/${product.id}`}>View</Link></td>
              </tr>
            )}

          </tbody>
        </table>
      </div>
    </div>

  )
}

export default Show