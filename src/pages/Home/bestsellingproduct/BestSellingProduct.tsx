import { Link } from "react-router-dom";
import ProductCard from "../../../components/ui/ProductCard";
import { useGetProductsQuery } from "../../../redux/features/product/productApi";
import { Product } from "../../../types/product";

const BestSellingProducts = () => {
  const { data: response, error, isLoading } = useGetProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  if (!response || !response.data || !Array.isArray(response.data)) {
    return <div>No products available</div>;
  }

  // Feature products with a price below $50
  const bestSellingProducts: Product[] = response.data.filter(
    (product: Product) => product.price < 50
  );

  return (
    <div className="max-w-[1230px] mx-auto my-12">
      <div className="my-8 flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-3xl font-semibold my-5">
            Best Selling{" "}
            <span className="text-[#22A1F0]">Camping Products</span>
          </h1>
          <p className="text-lg max-w-[50ch] text-gray-400 mx-auto">
            Explore our top-rated and most recommended camping products. Gear up
            for your next adventure with the best the market has to offer.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-2">
        {bestSellingProducts.map((product: Product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <div className="mt-4 text-center">
        <Link to="/products">
          <button className="btn py-2 rounded-md mt-6 bg-[#22A1F0] hover:bg-black text-white px-8 border-main bg-main hover:shadow-md transition-all hover:scale-105">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BestSellingProducts;
