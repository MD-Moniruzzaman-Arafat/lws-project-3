import { useContext } from 'react';
import { ProductsContext } from '../../context';
import ProductCard from './ProductCard';

export default function Products() {
  const { products, setProducts } = useContext(ProductsContext);
  function handleChange(e) {
    console.log(e.target.value);
    switch (e.target.value) {
      case 'popular':
        {
          const mostPopular = [...products].sort((a, b) => b.rating - a.rating);
          setProducts(mostPopular);
        }
        break;
      case 'lowToHigh':
        {
          const lowToHigh = [...products].sort((a, b) => a.price - b.price);
          setProducts(lowToHigh);
        }
        break;

      case 'highToLow':
        {
          const highToLow = [...products].sort((a, b) => b.price - a.price);
          setProducts(highToLow);
        }
        break;

      default:
        break;
    }
  }
  return (
    <>
      <div className="lg:col-span-2">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Your Products</h2>
          <div className="flex items-center space-x-2">
            <span className="text-sm">Sort by:</span>
            <select
              onChange={handleChange}
              className="border rounded-md px-2 py-1 text-sm"
            >
              <option defaultChecked>select</option>
              <option value={'popular'}>Most Popular</option>
              <option value={'newest'}>Newest</option>
              <option value={'lowToHigh'}>Price: Low to High</option>
              <option value={'highToLow'}>Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* <!-- Products Grid --> */}
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
