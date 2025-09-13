import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { useContext, useState } from 'react';
import { CartContext } from '../../context';

export default function ProductCard({ product }) {
  const [toggleButton, setToggleButton] = useState(true);
  const { cartItems, setCartItems } = useContext(CartContext);
  function handleAdd() {
    setToggleButton(!toggleButton);
    setCartItems([...cartItems, product]);
  }
  function handleRemove() {
    setToggleButton(!toggleButton);
    const filterItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(filterItems);
  }

  return (
    <>
      <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
        <div className="h-48 bg-gray-200 flex items-center justify-center">
          <img
            src={product.image}
            alt="Polo with Tipping Details"
            className="h-full w-auto object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-medium">{product.name}</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center my-1">
              <Rating
                style={{ maxWidth: 70 }}
                value={product.rating}
                readOnly
              />
              <span className="text-xs text-gray-500 ml-1">
                {product.rating}/5
              </span>
            </div>
            <span className="text-xs text-gray-700">
              ({product.stock} pcs left)
            </span>
          </div>
          <div className="flex items-center">
            <p className="font-bold">${product.price}</p>
            {product?.oldPrice && (
              <p className="text-gray-400 line-through ml-2">
                ${product?.oldPrice}
              </p>
            )}
          </div>
          {toggleButton ? (
            <button
              onClick={handleAdd}
              className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900"
            >
              Add to Cart
            </button>
          ) : (
            <button
              onClick={handleRemove}
              className="disabled:bg-red-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-red-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-red-900"
            >
              Remove to Cart
            </button>
          )}
        </div>
      </div>
    </>
  );
}
