import Link from "next/link";
import Image from "next/image";
import Navbar from "./(components)/Navbar";
import Button from "./(components)/Button";

export const revalidate = 0;

export async function generateMetadata({ params }: { params: { storeId: string } }) {
  return { title: "Zest", description: "Ecommerce website" };
}

export default async function HomePage() {
  const boxShadow = { boxShadow: "10px 10px 50px 20px rgba(0,0,0,.6)" };
  return (
    <div className="h-screen bg-[url('/bg1.jpg')] bg-cover overflow-y-scroll xl:overflow-y-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Content */}
      <div className="w-full text-white">
        <div className="w-full max-w-screen-xl mx-auto">
          <div className="px-4 md:px-8 xl:h-full flex flex-col xl:flex-row">
            <div className="flex flex-col items-center xl:items-start space-y-8 md:space-y-12 mt-8 md:mt-12 xl:mt-32">
              {/* Tagline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl mx-auto xl:mx-0 font-bold flex flex-col items-start space-y-4">
                <div className="hidden xl:flex xl:flex-col leading-[1.15]">
                  <span> Build your </span>
                  <span> ecommerce</span>
                  <span> store on Zest</span>
                </div>
                <span className="xl:hidden max-w-screen-md text-center leading-tight">
                  Build your ecommerce store on Zest
                </span>
              </h1>

              <div className="w-full flex justify-center xl:justify-start items-center space-x-4">
                {/* Get Started */}
                <Button href={`${process.env.DASHBOARD_URL}`} />
                {/* Explore Stores Button */}
                <Button href="/stores" variant="Explore" />
              </div>
            </div>

            <div className="xl:relative py-12 md:py-16 lg:py-20 px-2 md:px-6 lg:px-8 xl:p-0 flex flex-col items-center space-y-8 sm:space-y-12 md:space-y-20 lg:space-y-28">
              {/* Dashboard Image */}
              <div className="w-full flex flex-col xl:block xl:absolute xl:top-60 xl:left-24 space-y-2 sm:space-y-4 md:space-y-8  ">
                <h3 className="xl:hidden text-2xl sm:text-4xl md:text-4xl font-bold text-white w-full text-center">
                  Zest Store
                </h3>
                <Link href="/stores">
                  <Image
                    style={boxShadow}
                    src="/store.png"
                    className="w-full max-w-screen-xl mx-auto xl:w-[522px] rounded-xl overflow-hidden"
                    width={922}
                    height={581}
                    alt=""
                  />
                </Link>
              </div>
              {/* Store Image */}
              <div className="w-full flex flex-col xl:block space-y-2 sm:space-y-4 md:space-y-8 xl:absolute xl:z-10 xl:left-[450px] xl:top-0  ">
                <h3 className="xl:hidden text-2xl sm:text-4xl md:text-4xl font-bold text-white w-full text-center">
                  Zest Dashboard
                </h3>
                <Link href={`${process.env.DASHBOARD_URL}`}>
                  <Image
                    style={boxShadow}
                    src="/dashboard.png"
                    className="w-full max-w-screen-xl mx-auto xl:w-[522px] rounded-xl overflow-hidden"
                    width={922}
                    height={581}
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
