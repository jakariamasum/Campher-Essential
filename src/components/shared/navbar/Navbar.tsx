import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const items = [
    <li key="item1" className="lg:mr-6" onClick={closeDropdown}>
      <Link to="/" className="hover:text-blue-500">
        Home
      </Link>
    </li>,

    <li key="item3" className="lg:mr-6" onClick={closeDropdown}>
      <Link to="/products" className="hover:text-blue-500">
        Products
      </Link>
    </li>,
    <li key="item4" className="lg:mr-6" onClick={closeDropdown}>
      <Link to="/flash-sale" className="hover:text-blue-500">
        Flash Sale
      </Link>
    </li>,
    <li key="item5" className="lg:mr-6" onClick={closeDropdown}>
      <Link to="/about" className="hover:text-blue-500">
        About Us
      </Link>
    </li>,
    <li key="item6" className="lg:mr-6" onClick={closeDropdown}>
      <Link to="/contact" className="hover:text-blue-500">
        Contact Us
      </Link>
    </li>,
    <li
      key="item7"
      className="lg:mr-6 flex items-center"
      onClick={closeDropdown}
    >
      <Link to="/cart" className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#22A1F0"
          className="w-6 h-6"
        >
          <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
        </svg>
        {/* <span className="text-[#22A1F0]">{cartItem?.length || 0}</span> */}
      </Link>
    </li>,
  ];

  return (
    <div className="shadow-md ">
      <div className="max-w-[1230px] mx-auto flex items-center justify-between px-4 lg:px-0 py-4">
        <div className="flex items-center">
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost"
              onClick={toggleDropdown}
            >
              {isDropdownOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#22A1F0]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#22A1F0]"
                  fill=""
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              )}
            </div>
            {isDropdownOpen && (
              <ul className="menu z-10 menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                {items}
              </ul>
            )}
          </div>

          <Link to="/">
            Campher Shop
            {/* <img
              className="lg:-ml-4 ml-8 hover:scale-110 transition-all duration-300"
              src={"path/to/logo.png"} 
              alt="Logo"
              width={180}
              height={190}
            /> */}
          </Link>
        </div>

        <div className="hidden lg:flex">
          <ul className="flex space-x-6 text-lg font-medium">{items}</ul>
        </div>

        <div className="flex items-center">
          <Link
            className="px-6 py-2 bg-[#22A1F0] text-white border border-[#22A1F0] hover:bg-black hover:shadow-md transition-all mr-3 transform hover:scale-105 rounded"
            to={"/dashboard"}
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
