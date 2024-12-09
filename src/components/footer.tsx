import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 text-xs w-full">
      <div className="container mx-auto px-4 py-6">
        {/* Top Section */}
        <div className="flex justify-between items-start">
          {/* Links Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div>
              <h3 className="text-gray-300 mb-4 text-sm">FIND A STORE</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Become a Member</li>
                <li>Sign Up for Email</li>
                <li>Send Us Feedback</li>
                <li>Student Discounts</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-gray-300 mb-4 text-sm">GET HELP</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Order Status</li>
                <li>Delivery</li>
                <li>Returns</li>
                <li>Payment Options</li>
                <li>Contact Us on Nike.com Inquiries</li>
                <li>Contact Us on All Other Inquiries</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-gray-300 mb-4 text-sm">ABOUT NIKE</h3>
              <ul className="space-y-2 text-gray-300">
                <li>News</li>
                <li>Careers</li>
                <li>Investors</li>
                <li>Sustainability</li>
              </ul>
            </div>
          </div>

          {/* Icons Section */}
          <div className="flex space-x-4 text-sm text-gray-300">
            <FaTwitter className="cursor-pointer hover:text-white" />
            <FaFacebookF className="cursor-pointer hover:text-white" />
            <FaYoutube className="cursor-pointer hover:text-white" />
            <FaInstagram className="cursor-pointer hover:text-white" />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <p className="text-center md:text-left">
            © 2023 Nike, Inc. All Rights Reserved
          </p>

          {/* Bottom Links */}
          <ul className="flex space-x-4 mt-4 md:mt-0 text-center">
            <li className="hover:text-white cursor-pointer">Guides</li>
            <li className="hover:text-white cursor-pointer">Terms of Sale</li>
            <li className="hover:text-white cursor-pointer">Terms of Use</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
