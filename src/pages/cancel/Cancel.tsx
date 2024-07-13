import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl text-center font-semibold mb-4 text-red-500">
        Sorry!! Order failed!
      </h1>
      <p className="text-lg text-gray-600 mb-8">Please try again!</p>
      <Link to="/">
        <button className="bg-[#22A1F0] hover:bg-black text-white px-6 py-2 rounded-md">
          Go to Homepage
        </button>
      </Link>
    </div>
  );
};

export default Cancel;
