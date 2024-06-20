import Billboards from "@/components/Billboards";
import { getBillboards, getProducts } from "@/actions";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/container";

export const revalidate = 0;

export default async function HomePage() {
  const products = await getProducts({ isFeatured: true });
  const billboards = await getBillboards();

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
