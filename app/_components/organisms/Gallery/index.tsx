import Image from "next/image";
import { Gallery } from "@/app/models/Product";
import "./gallery.scss";

export type GalleryProps = {
  gallery: Gallery;
  name: string;
};

const Gallery = ({ gallery: { first, second, third }, name }: GalleryProps) => {
  const alternativeText = `${name} gallery image`;

  return (
    <section className="gallery row-gap-20px column-gap-18px">
      <picture className="gallery__first">
        <source srcSet={first.desktop} media="(min-width: 1440px)" />
        <source srcSet={first.tablet} media="(min-width: 768px)" />
        <Image
          src={first.mobile}
          alt={alternativeText}
          width="654"
          height="174"
          className="gallery__image"
        />
      </picture>
      <picture className="gallery__second">
        <source srcSet={second.desktop} media="(min-width: 1440px)" />
        <source srcSet={second.tablet} media="(min-width: 768px)" />
        <Image
          src={second.mobile}
          alt={alternativeText}
          width="654"
          height="174"
          className="gallery__image"
        />
      </picture>
      <picture className="gallery__third">
        <source srcSet={third.desktop} media="(min-width: 1440px)" />
        <source srcSet={third.tablet} media="(min-width: 768px)" />
        <Image
          src={third.mobile}
          alt={alternativeText}
          width="654"
          height="736"
          className="gallery__image"
        />
      </picture>
    </section>
  );
};

export default Gallery;
