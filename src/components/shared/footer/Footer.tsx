import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="bg-base-200">
      <footer className="p-6 sm:p-10 max-w-[1230px] mx-auto text-base-content gap-8 flex flex-col md:flex-row">
        <div className="flex-1">
          <Link to="/">
            <img
              className="hover:scale-110 transition-all duration-300"
              src={logo}
              alt="Logo"
              width={80}
              height={190}
            />
          </Link>
          <p className="w-full sm:w-72 text-justify mt-4">
            Welcome to <span className="font-semibold">Campers Shop</span>, your
            ultimate destination for all things camping. Dive into a world where
            adventure meets comfort. Discover the joy of camping with us.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Link to="https://facebook.com" aria-label="Facebook">
              <FaFacebookSquare className="text-2xl text-[#21A0F3]" />
            </Link>
            <Link to="https://twitter.com" aria-label="Twitter">
              <FaTwitter className="text-2xl text-black" />
            </Link>
            <Link to="https://linkedin.com" aria-label="LinkedIn">
              <FaLinkedin className="text-2xl text-[#21A0F3]" />
            </Link>
            <Link to="https://instagram.com" aria-label="Instagram">
              <FaInstagramSquare className="text-2xl text-black" />
            </Link>
          </div>
        </div>

        <nav className="flex-1">
          <h6 className="border-b-2 border-[#22A1F0] mb-4 font-semibold">
            Quick Links
          </h6>
          <ul>
            <li>
              <Link to="/TrendingProducts" className="hover:text-[#22A1F0]">
                Trending Products
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-[#22A1F0]">
                Brands
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#22A1F0]">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#22A1F0]">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/customer-care" className="hover:text-[#22A1F0]">
                Customer Care
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="flex-1">
          <h6 className="border-b-2 border-[#22A1F0] mb-4 font-semibold">
            Legal
          </h6>
          <ul>
            <li>
              <Link to="/terms-of-use" className="hover:text-[#22A1F0]">
                Terms of use
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-[#22A1F0]">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link to="/cookie-policy" className="hover:text-[#22A1F0]">
                Cookie policy
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex-1">
          <h6 className="border-b-2 border-[#22A1F0] mb-4 font-semibold">
            Newsletter
          </h6>
          <fieldset className="form-control">
            <label className="label">
              <span className="label-text">Enter Your Email Address</span>
            </label>
            <div className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Username@site.com"
                className="input w-full border border-[#22A1F0] p-2 mb-2 sm:mb-0"
              />
              <button className="btn bg-[#22A1F0] hover:bg-black text-white p-2 sm:ml-2">
                Subscribe
              </button>
            </div>
          </fieldset>
        </div>
      </footer>
      <div className="text-center py-3 text-base-content border-t mt-0">
        &copy; 2024 Campers Shop. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
