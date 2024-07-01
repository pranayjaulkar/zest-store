import { getStore } from "@/actions";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateMetadata({ params }: { params: { storeId: string } }) {
  const store = await getStore(params.storeId);
  return { title: store.name, description: "" };
}

export default async function StoreLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  const store = await getStore(params.storeId);
  return (
    <div>
      <Navbar store={store} />
      {children}
      <Footer storeId={params.storeId} className="mt-auto" />
    </div>
  );
}
