import Billboards from "@/components/Billboards";
import { getBillboards, getProducts } from "@/actions";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/container";

interface StoreHomePageProps {
  params: { storeId: string };
}

export default async function StoreHomePage({ params }: StoreHomePageProps) {
  const products = await getProducts(params.storeId, { isFeatured: true });
  const billboards = await getBillboards(params.storeId);
  return (
    <div>
      <Container>
        <div className="space-y-10 pb-10">
          <Billboards billboards={billboards.filter((billboard) => billboard.active)} />
        </div>
        <div className="flex flex-col gap-y-6 px-4 sm:px-6 lg:px-78">
          <ProductList title="Featured Products" products={products} />
        </div>
      </Container>
    </div>
  );
}
