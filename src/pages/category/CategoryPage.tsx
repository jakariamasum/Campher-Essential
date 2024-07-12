import React, { useState, ChangeEvent } from "react";
import { useGetProductsQuery } from "../../redux/features/product/productApi";
import ProductCard from "../../components/ui/ProductCard";
import { Product } from "../../types/product";

interface CategoryProducts {
  [category: string]: Product[];
}

const CategoryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { data: response } = useGetProductsQuery();
  const products: Product[] = response?.data || [];

  const categories: CategoryProducts = products.reduce(
    (acc: CategoryProducts, product: Product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);
      return acc;
    },
    {}
  );

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="max-w-[1230px] mx-auto my-12 px-4">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-3xl font-semibold my-5">
          Product <span className="text-[#22A1F0]">Categories</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-[50ch] text-center">
          Browse through our exclusive collection of products. Find the best
          deals and latest arrivals in each category.
        </p>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className="mt-4 px-4 py-2 border rounded w-full max-w-[300px] text-center"
        />
      </div>
      {Object.keys(categories).map((category) => {
        const filteredProducts = categories[category].filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-semibold my-4">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <div className="text-center text-gray-400 mt-4">
                No products found in this category.
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CategoryPage;
