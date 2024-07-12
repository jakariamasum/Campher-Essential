import { Link } from "react-router-dom";
import TentImage from "../../../assets/images/category1.jpg";
import SleepingBagImage from "../../../assets/images/category2.jpg";
import CampingGearImage from "../../../assets/images/category3.jpg";

const Category = () => {
  return (
    <div className="max-w-[1230px] px-2 mx-auto my-12">
      <div className="my-8">
        <h1 className="text-3xl font-semibold my-5 text-center">
          Top <span className="text-[#22A1F0]"> Brands</span>
        </h1>
        <p className="text-lg max-w-[50ch] text-center mx-auto text-gray-400">
          Welcome to <span className="font-semibold">Campers Shop</span>, your
          premier destination for all things camping. Dive into a world where
          adventure meets comfort. Discover the joy of camping with us.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="relative group">
          <Link to={"/product/tent"}>
            <img
              src={TentImage}
              className="rounded hover:scale-95 transition-all h-[550px]"
              height={500}
              width={500}
              alt="Tent"
            />
            <h2 className="text-[#22A1F0] text-center text-xl font-medium absolute bottom-3 left-3 group-hover:text-3xl group-hover:font-semibold group-hover:drop-shadow transition-all group-hover:bottom-8 group-hover:left-8">
              Tents
            </h2>
          </Link>
        </div>
        <div className="space-y-5">
          <div className="relative group">
            <Link to={"/product/sleeping-bag"}>
              <img
                src={SleepingBagImage}
                className="rounded hover:scale-95 transition-all h-[265px]"
                height={400}
                width={500}
                alt="Sleeping Bag"
              />
              <h2 className="text-[#22A1F0] text-xl font-medium absolute bottom-3 left-3 group-hover:text-3xl group-hover:font-semibold group-hover:drop-shadow transition-all duration-500 group-hover:bottom-8 group-hover:left-8">
                Sleeping Bags
              </h2>
            </Link>
          </div>
          <div className="relative group">
            <Link to={"/product/camping-gear"}>
              <img
                src={CampingGearImage}
                className="rounded hover:scale-95 transition-all h-[265px]"
                height={400}
                width={500}
                alt="Camping Gear"
              />
              <h2 className="text-[#22A1F0] text-xl font-medium absolute bottom-3 left-3 group-hover:text-3xl group-hover:font-semibold group-hover:drop-shadow transition-all group-hover:bottom-8 group-hover:left-8">
                Camping Gear
              </h2>
            </Link>
          </div>
        </div>
        <div className="relative group">
          <Link to={"/product/camping-tools"}>
            <img
              src={CampingGearImage}
              className="rounded hover:scale-95 transition-all h-[550px]"
              height={700}
              width={500}
              alt="Camping Tools"
            />
            <h2 className="text-[#22A1F0] text-xl font-medium absolute bottom-3 left-3 group-hover:text-3xl group-hover:font-semibold group-hover:drop-shadow transition-all group-hover:bottom-8 group-hover:left-8">
              Camping Tools
            </h2>
          </Link>
        </div>
      </div>
      <div className="text-center mt-6">
        <Link to="/category">
          <button className="btn py-2 rounded-md px-8 btn-active border-main bg-[#22A1F0] hover:bg-black text-white hover:shadow-md transition-all hover:scale-105">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Category;
