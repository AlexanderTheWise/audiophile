import { WrapperHome } from "../atoms";
import { CategoriesLinks } from "../molecules";
import { HomeProducts } from "../organisms";

const Home = () => (
  <>
    <WrapperHome>
      <CategoriesLinks />
      <HomeProducts />
    </WrapperHome>
  </>
);

export default Home;
