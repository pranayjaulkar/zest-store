import Container from "@/components/ui/container";
import MainNav from "@/components/MainNav";
import { getCategories } from "@/actions";
import NavbarActions from "./ui/navbar-actions";
import { Store } from "@/types";

const Navbar = async ({ store }: { store: Store }) => {
  const categories = await getCategories(store.id);
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 py-4 sm:px-6 lg:px-8 flex items-center">
          <MainNav store={store} categories={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};
export default Navbar;
