import React, { useState } from "react";
import { useGetProductsQuery } from "../../redux/features/product/productApi";
import ProductCard from "../../components/ui/ProductCard";
import { Product } from "../../types/product";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const { data: response, error, isLoading } = useGetProductsQuery();

  if (isLoading || error) return <div>Loading...</div>;

  if (!response || !response.data || !Array.isArray(response.data)) {
    return <div>No products available</div>;
  }

  const products: Product[] = response.data;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryFilter(e.target.value);
  };

  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriceRange(e.target.value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value as "asc" | "desc");
  };

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (product) =>
        !categoryFilter ||
        product?.category.toLowerCase() === categoryFilter.toLowerCase()
    )
    .filter((product) => {
      if (!priceRange) return true; // Return all products if no price range selected
      const [minPrice, maxPrice] = priceRange.split("-").map(parseFloat);
      return product.price >= minPrice && product.price <= maxPrice;
    })
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

  return (
    <div className="max-w-[1230px] mx-auto my-12">
      <div className="flex justify-between items-center my-8">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search by name or description"
            value={searchTerm}
            onChange={handleSearchChange}
            className="border border-gray-300 px-2 py-1 rounded-md"
          />
          <select
            value={categoryFilter}
            onChange={handleCategoryChange}
            className="border border-gray-300 px-2 py-1 rounded-md"
          >
            <option value="">All Categories</option>
            {products.map((prod) => (
              <option key={prod.category} value={prod.category}>
                {prod.category}
              </option>
            ))}
          </select>
          <select
            value={priceRange}
            onChange={handlePriceRangeChange}
            className="border border-gray-300 px-2 py-1 rounded-md"
          >
            <option value="">All Prices</option>
            <option value="0-50">$0 - $50</option>
            <option value="51-100">$51 - $100</option>
            <option value="101-200">$101 - $200</option>
            <option value="201-500">$201 - $500</option>
            <option value="501-1000">$501 - $1000</option>
            <option value="1001-">Over $1000</option>
          </select>
          <select
            value={sortOrder}
            onChange={handleSortChange}
            className="border border-gray-300 px-2 py-1 rounded-md"
          >
            <option value="asc">Price Low to High</option>
            <option value="desc">Price High to Low</option>
          </select>
          <button
            onClick={() => {
              setSearchTerm("");
              setCategoryFilter("");
              setPriceRange("");
              setSortOrder("asc");
            }}
            className="btn bg-gray-300 hover:bg-gray-400 text-black px-4 py-1 rounded-md"
          >
            Clear Filters
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-2">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <div>No products match the selected criteria.</div>
        )}
      </div>
    </div>
  );
};

export default Products;
