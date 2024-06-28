import { getStore } from "@/actions";
import Navbar from "@/components/Navbar";

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
    </div>
  );
}
