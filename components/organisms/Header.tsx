import Banner from "./Banner";
import { CommonContainerProps } from "../types";

const Header = ({ children, className = "" }: CommonContainerProps) => (
  <header className="position-relative" style={{ backgroundColor: "#191919" }}>
    <Banner className={className} />
    {children}
  </header>
);

export default Header;
