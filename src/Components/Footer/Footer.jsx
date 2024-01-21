import { Link } from "react-router-dom";
import currentYear from "../../Utilities/year";

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2" data-aos="fade-right">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Event Planner
            </h1>
            <p className="text-base text-gray-600">
              We aspire to set the standard for creativity, innovation, and
              excellence in the wedding industry, leaving a trail of cherished
              memories in every celebration we touch.
            </p>
            <address className="mt-3">
              <span className="uppercase text-base text-gray-800 font-semibold">
                Official Address
              </span>
              <p className="text-base text-gray-600 mt-1">
                Mirpur, West Kazipara, Boshundara-Lane, Dhaka
              </p>
              <p className="text-base text-gray-600 mt-1">
                Phone: +880 123 456 09875
              </p>
              <p className="text-base text-gray-600">
                Email: eventplanner@gmail.com
              </p>
            </address>
          </div>
          <div className="space-y-1" data-aos="flip-up">
            <h4 className="text-base text-gray-800 font-bold uppercase">
              Pages
            </h4>
            <ul className="list-none">
              <li>
                <Link
                  className="text-gray-600 font-normal transition-colors hover:text-blue-600"
                  to="/register"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 font-normal transition-colors hover:text-blue-600"
                  to="/login"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 font-normal transition-colors hover:text-blue-600"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 font-normal transition-colors hover:text-blue-600"
                  to="/booked"
                >
                  Booked
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 font-normal transition-colors hover:text-blue-600"
                  to="/dashboard"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-1" data-aos="flip-down">
            <h4 className="text-base text-gray-800 font-bold uppercase">
              Follow Us On
            </h4>
            <ul className="list-none">
              <li>
                <a
                  className="text-gray-600 font-normal transition-colors hover:text-blue-600"
                  href="#"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 font-normal transition-colors hover:text-blue-600"
                  href="#"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 font-normal transition-colors hover:text-blue-600"
                  href="#"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-1" data-aos="fade-left">
            <h4 className="text-base text-gray-800 font-bold uppercase">
              Legal
            </h4>
            <ul className="list-none">
              <li>
                <Link
                  className="text-gray-600 font-normal transition-colors hover:text-blue-600"
                  to="/"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 font-normal transition-colors hover:text-blue-600"
                  to="/"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="border-t border-gray-300 pt-4 text-base font-normal text-gray-600">All Right Reserved &copy;<span className="text-blue-500">EventPlanner</span>, {currentYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
