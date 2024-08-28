import { getProducts, getSizes, getColors, getCategory } from "@/actions";
import Container from "@/components/ui/container";
import Billboards from "@/components/Billboards";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import Filter from "@/app/stores/[storeId]/categories/[categoryId]/components/Filter";
import MobileFilter from "@/app/stores/[storeId]/categories/[categoryId]/components/MobileFilter";

interface CategoryProps {
  params: { storeId: string; categoryId: string };
  searchParams: { colorId: string; sizeId: string };
}

export const revalidate = 0;

export async function generateMetadata({ params }: { params: { storeId: string; categoryId: string } }) {
  const category = await getCategory(params.storeId, params.categoryId);
  return { title: category.name, description: "" };
}

const Category = async ({ params, searchParams }: CategoryProps) => {
  const products = await getProducts(params.storeId, {
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });

  const sizes = await getSizes(params.storeId);
  const colors = await getColors(params.storeId);
  const category = await getCategory(params.storeId, params.categoryId);

  return (
    <div className="bg-white">
      <Container>
        <Billboards billboards={[category.billboard]} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <MobileFilter sizes={sizes} colors={colors} />
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Category;
