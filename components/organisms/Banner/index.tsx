import { Audiophile } from "@/components/atoms";
import { CommonProps } from "@/components/types";
import { PagesLinks } from "@/components/molecules";
import SliderNav from "../SliderNav";
import "./banner.scss";

const Banner = ({ className = "" }: CommonProps) => (
  <div className={`banner${className} flex items-center`}>
    <div className="banner__content flex items-center content-space-between">
      <SliderNav />
      <Audiophile />
      <PagesLinks className="banner__pages-links" />
    </div>
  </div>
);

export default Banner;
