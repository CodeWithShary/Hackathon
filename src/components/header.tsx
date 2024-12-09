import Image from 'next/image';
import Link from 'next/link';
import nikelogo from '../app/asset/nikelogo.png';
import Frame from '../app/asset/Frame.png'
import center from '@/app/asset/center.png'
import { MagnifyingGlassIcon, HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";


export default function Header() {
    return (
      <header className="bg-white border-b border-gray-200">
        {/* Top Bar */}
        <div className="flex justify-between items-center px-8 py-2 text-xs text-gray-600"> 
        <div className="flex items-center gap-4">
           <div>
            <Image src={Frame} alt="Nike Logo" width={24} height={24} />
           </div> 

          </div>
          <div className="flex gap-4 width={24} height={100}" >
            <Link href="#" className="flex items-center border-r border-black pr-6 text-black  h-4 my-auto">
              Find a Store
            </Link>
            <Link href="/help" className= " flex items-center border-r border-black pr-6 text-black  h-4 my-auto">
              Help
            </Link>
            <Link href="/join_us" className="flex items-center border-r border-black pr-6 text-black  h-4 my-auto ">
              Join Us
            </Link>
            <Link href="/sign_in" className="text-black  h-4 my-auto">
              Sign In
            </Link>
          </div>
        </div>
  
        {/* Main Navigation */}
        <div className="flex justify-between items-center px-8 py-4">
          {/* Logo Section */}
          <div className="flex items-center">
            <Image
              src={nikelogo}
              alt="Logo"
              width={50}
              height={50}
              className="cursor-pointer"
            />
          </div>
  
          {/* Navigation Links */}
          <nav className="flex gap-6 text-sm text-gray-800 font-medium">
            <Link href="#" className="flex items-center border-r border-black pr-6 text-black ">
              New & Featured
            </Link>
            <Link href="#" className="flex items-center border-r border-black pr-6 text-black ">
              Men
            </Link>
            <Link href="#" className="flex items-center border-r border-black pr-6 text-black ">
              Women
            </Link>
            <Link href="#" className="flex items-center border-r border-black pr-6 text-black ">
              Kids
            </Link>
            <Link href="#" className="flex items-center border-r border-black pr-6 text-black ">
              Sale
            </Link>
            <Link href="#" className="flex items-center border-r  text-black ">
              SNKRS
            </Link>
          </nav>
  
          {/* Search and Icons */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="relative">
              <input
             
                type="text"
                placeholder="Search"
                className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none"
              />
              <MagnifyingGlassIcon className="absolute right-3 top-2 text-gray-500 w-5 h-5" />
            </div>
  
            {/* Icons */}
            <HeartIcon className="text-gray-700 w-6 h-6 cursor-pointer hover:text-black" />
            <ShoppingBagIcon className="text-gray-700 w-6 h-6 cursor-pointer hover:text-black" />
          </div>
        </div>
      </header>
    );
  }

  