import { CategoriesLinks } from "@/app/_components/molecules";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    {children}
    <CategoriesLinks />
  </>
);

export default Layout;
