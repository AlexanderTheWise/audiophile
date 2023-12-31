import {
  PrimaryImageDetail,
  H2,
  ParBTrans,
  ResponsiveCenterToLeft,
} from "@/_components/atoms";
import { CommonProps } from "../../types";
import { ResponsiveImage } from "@/models/Product";
import "./best-audio-gear.scss";

const image: ResponsiveImage = {
  mobile: "/images/shared/mobile/image-best-gear.jpg",
  tablet: "/images/shared/tablet/image-best-gear.jpg",
  desktop: "/images/shared/desktop/image-best-gear.jpg",
};

const BestAudioGear = ({ className = "" }: CommonProps) => (
  <PrimaryImageDetail
    className={`${className} best-audio-gear`}
    image={image}
    name="A young man wearing headphones"
  >
    <ResponsiveCenterToLeft>
      <H2 className="best-audio-gear__title">
        bringing you the <span className="text--brand">best</span> audio gear
      </H2>
      <ParBTrans>
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </ParBTrans>
    </ResponsiveCenterToLeft>
  </PrimaryImageDetail>
);

export default BestAudioGear;
