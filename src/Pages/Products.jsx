import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apis = [
      'https://dummyjson.com/products?limit=50',
      'https://dummyjson.com/products?limit=50&skip=50', // second batch
      // Add more APIs if needed
    ];

    // Fetch all APIs simultaneously
    Promise.all(apis.map((url) => fetch(url).then((res) => res.json())))
      .then((results) => {
        // Combine all products from multiple APIs
        const allProducts = results.flatMap((result) => result.products);
        setProducts(allProducts);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading products...</p>;
  }

  return (
    <div className="container">
      {products.length > 0 ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 ml-20">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              productImage={product.thumbnail || product.images[0]}
              discountPercentage={product.discountPercentage || 0}
              dishidden={product.discountPercentage ? '' : 'hidden'}
              productName={product.title}
              discountedPrice={`$${Math.round(
                product.price - (product.price * (product.discountPercentage || 0)) / 100
              )}`}
              originalPrice={`$${product.price}`}
              addToCart="Add To Cart"
              solds={`${product.stock} sold`}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No products available.</p>
      )}
    </div>
  );
};

export default Products;
