import Image from "next/image";
import NikeLogo from '@/app/asset/nikelogo.png'
export default function LoginPage() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
     
        <div className="max-w-md w-full flex flex-col items-center justify-center space-y-8 p-6 bg-white shadow-md rounded-md">
          {/* Nike Logo */}
          <Image src={NikeLogo} alt="Logo" width={150} height={150}/>
     
          <h2 className="text-center text-2xl font-bold text-gray-900">
            YOUR ACCOUNT <br />
            FOR EVERYTHING <br />
            NIKE
          </h2>
          {/* Login Form */}
          <form className="mt-6 space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-600">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-black border-gray-300 rounded focus:ring-black"
                />
                <span className="ml-2">Keep me signed in</span>
              </label>
              <a href="#" className="text-sm text-black hover:underline">
                Forgot your password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black rounded-md"
            >
              Sign In
            </button>
          </form>
          <p className="text-center text-sm text-gray-600">
            Not a Member?{" "}
            <a href="#" className="text-black hover:underline">
              Join Us.
            </a>
          </p>
        </div>
      </div>
    );
  }
  