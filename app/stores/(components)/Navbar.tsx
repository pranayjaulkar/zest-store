import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div id="navbar" className="md:h-[10%] bg-transparent border-b text-black">
      <div className="min-w-96 max-w-screen-xl mx-auto h-full">
        <div className="px-6 md:px-8 py-4 flex items-center justify-between">
          {/* Links */}
          <div className="flex items-center space-x-4 md:space-x-10 lg:space-x-12">
            {/* ZEST */}
            <h2 className="text-2xl font-bold mr-2 md:mr-4">
              <Link href="/">Zest</Link>
            </h2>
            <nav className="flex items-center text-sm md:text-xl font-semibold space-x-6 sm:space-x-8 md:space-x-10 lg:space-x-12">
              {/* Stores */}
              <Link className="text-gray-400" href="/stores">
                Stores
              </Link>
              {/* Dashboard */}
              <Link
                target="_blank"
                className=" hover:text-gray-400 transition-all duration-300"
                href={`${process.env.DASHBOARD_URL}`}
              >
                Dashboard
              </Link>
            </nav>
          </div>
          {/* Sign In */}
          <Link
            className="min-w-24 md:min-w-32 h-7 md:h-10  bg-black rounded-full space-x-2  text-white flex items-center justify-center transition-all duration-200"
            href={`${process.env.DASHBOARD_URL}/sign-in`}
          >
            <span className="font-semibold text-sm md:text-md">Sign In</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
