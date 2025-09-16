import { useContext, useState } from 'react';
import data from '../../../public/product.json';
import { ProductsContext } from '../../context';

export default function SearchField() {
  const [searchField, setSearchField] = useState('');
  const { setProducts } = useContext(ProductsContext);

  function handleChange(e) {
    const value = e.target.value;
    setSearchField(value);
    if (searchField === '') {
      setProducts(data);
    } else {
      const filteredProducts = data.filter((product) =>
        product.name.toLowerCase().includes(searchField.toLowerCase())
      );
      setProducts(filteredProducts);
    }
  }

  return (
    <div className="relative hidden md:block w-64">
      <input
        onChange={handleChange}
        value={searchField}
        type="text"
        placeholder="Search for products..."
        className="w-full bg-gray-100 rounded-full py-2 px-4 text-sm"
      />
      <span className="absolute right-3 top-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </span>
    </div>
  );
}
