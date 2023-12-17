import { Audiophile } from "@/_components/atoms";
import { CommonProps } from "@/_components/types";
import { PagesLinks } from "@/_components/molecules";
import SliderNav from "../SliderNav";
import "./banner.scss";

const Banner = ({ className = "" }: CommonProps) => (
  <div className={`${className} banner flex items-center`}>
    <div className="banner__content flex items-center content-space-between">
      <SliderNav />
      <Audiophile />
      <PagesLinks className="banner__pages-links" />
    </div>
  </div>
);

export default Banner;
