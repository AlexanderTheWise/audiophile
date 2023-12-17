import { CategoriesLinks } from "@/_components/molecules";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    {children}
    <CategoriesLinks />
  </>
);

export default Layout;
