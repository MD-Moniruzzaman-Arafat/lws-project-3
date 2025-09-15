import { useContext } from 'react';
import { CartContext, ProductsContext, SubTotalContext } from '../../context';

export default function CartItem({ item }) {
  const { products, setProducts } = useContext(ProductsContext);
  const { cartItems, setCartItems } = useContext(CartContext);
  const { subTotal, setSubTotal } = useContext(SubTotalContext);

  function handleIncrement() {
    if (item.stock > 1) {
      // products
      const newProducts = products.map((product) =>
        product.id === item.id
          ? {
              ...product,
              stock: product.stock - 1,
              quantity: product.quantity + 1,
            }
          : product
      );
      setProducts(newProducts);

      // cart items
      const newCartProducts = cartItems.map((product) =>
        product.id === item.id
          ? {
              ...product,
              stock: product.stock - 1,
              quantity: product.quantity + 1,
            }
          : product
      );
      setCartItems(newCartProducts);

      setSubTotal(subTotal + item.price);
    }
  }

  function handleDecrement() {
    if (item.quantity > 1) {
      // products
      const newProducts = products.map((product) =>
        product.id === item.id
          ? {
              ...product,
              stock: product.stock + 1,
              quantity: product.quantity - 1,
            }
          : product
      );
      setProducts(newProducts);

      // cart items
      const newCartProducts = cartItems.map((product) =>
        product.id === item.id
          ? {
              ...product,
              stock: product.stock + 1,
              quantity: product.quantity - 1,
            }
          : product
      );
      setCartItems(newCartProducts);
      setSubTotal(subTotal - item.price);
    }
  }

  return (
    <>
      <div className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4">
        <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
          <img
            src={item.image}
            alt="Gradient Graphic T-shirt"
            className="h-full w-auto object-cover"
          />
        </div>
        <div className="flex-grow">
          <div className="flex justify-between">
            <h3 className="font-medium">{item.name}</h3>
            <span className="text-red-500 text-sm">×</span>
          </div>
          <p className="text-sm text-gray-500">Size: Large</p>
          <p className="text-sm text-gray-500">Color: White</p>
          <div className="flex justify-between items-center mt-2">
            <p className="font-bold">${item.price}</p>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleDecrement}
                className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
              >
                −
              </button>
              <span className="text-sm">{item.quantity}</span>
              <button
                onClick={handleIncrement}
                className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
