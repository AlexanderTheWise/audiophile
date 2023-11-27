import Link from "next/link";
import "./mainnavigation.scss";

const MainNavigationLinks = ({
  elementSelector,
}: {
  elementSelector?: string;
}) => {
  return (
    <nav className={`${elementSelector ?? ""} main-navigation`}>
      <ul className="main-navigation__links flex">
        <li>
          <Link href="#" className="white-to-corp-col text--h--sub">
            home
          </Link>
        </li>
        <li>
          <Link href="#" className="white-to-corp-col text--h--sub">
            headphones
          </Link>
        </li>
        <li>
          <Link href="#" className="white-to-corp-col text--h--sub">
            speakers
          </Link>
        </li>
        <li>
          <Link href="#" className="white-to-corp-col text--h--sub">
            earphones
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigationLinks;
