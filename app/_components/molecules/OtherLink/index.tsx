import Image from "next/image";
import { Other } from "@/models/Product";
import { H4, LinkPrimary } from "../../atoms";

type OtherLinkProps = {
  other: Other;
};

const getHrefFromSlug = (slug: string) => {
  let category = "";

  if (slug.includes("headphone")) category += "headphones";

  if (slug.includes("speaker")) category += "speakers";

  if (slug.includes("earphone")) category += "earphones";

  return `/${category}/${slug}`;
};

const OtherLink = ({
  other: {
    image: { mobile, tablet, desktop },
    name,
    slug,
  },
}: OtherLinkProps) => (
  <div className="flex-col row-gap-32px items-center">
    <picture>
      <source srcSet={desktop} media="(min-width: 1440px)" />
      <source srcSet={tablet} media="(min-width: 768px)" />
      <Image src={mobile} alt={name} width="654" height="120" />
    </picture>

    <h4 className="text--other">{name}</h4>

    <LinkPrimary href={getHrefFromSlug(slug)} />
  </div>
);

export default OtherLink;
