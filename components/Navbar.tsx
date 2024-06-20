import Container from "@/components/ui/container";
import Link from "next/link";
import MainNav from "@/components/MainNav";
import { getCategories } from "@/actions";
import NavbarActions from "./ui/navbar-actions";
import { Store } from "@/types";

interface NavbarProps {
  store: Store;
}

const Navbar: React.FC<NavbarProps> = async ({ store }) => {
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">{store.name}</p>
          </Link>
          <MainNav categories={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};
export default Navbar;
