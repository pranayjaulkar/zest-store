import { getStores } from "@/actions";

import Navbar from "./(components)/Navbar";
import Store from "./(components)/Store";

export default async function StoresPage() {
  let stores = await getStores();

  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Heading */}
      <h1 className="w-full my-10 md:my-16 lg:my-20 text-center text-5xl font-bold">
        Explore different stores on Zest
      </h1>
      <div className="w-full max-w-screen-xl mb-8 mx-auto px-4 md:px-8 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {stores.map((store, i) => (
          <Store store={store} key={i} />
        ))}
      </div>
    </div>
  );
}
