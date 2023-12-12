import { MainHome } from "../atoms";
import { CategoriesLinks } from "../molecules";
import { BestAudioGear, Header, Hero, HomeProducts } from "../organisms";

const Home = () => (
  <>
    <Header className="--absolute">
      <Hero />
    </Header>
    <MainHome>
      <CategoriesLinks />
      <HomeProducts />
      <BestAudioGear />
    </MainHome>
  </>
);

export default Home;
