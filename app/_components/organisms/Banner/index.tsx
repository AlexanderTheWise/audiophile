import { Audiophile } from "@/app/_components/atoms";
import { CommonProps } from "@/app/_components/types";
import { PagesLinks } from "@/app/_components/molecules";
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