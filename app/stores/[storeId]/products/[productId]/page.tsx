import { getProduct, getProducts } from "@/actions/";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/container";
import Gallery from "@/components/gallery/Gallery";
import Info from "@/components/ui/info";

export default async function ProductPage({ params }: { params: { productId: string; storeId: string } }) {
  const product = await getProduct(params.storeId, params.productId);

  const suggestedProducts = await getProducts(params.storeId, {
    categoryId: product?.category?.id,
  });

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images?.length ? product.images : []} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info product={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Items" products={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
}
