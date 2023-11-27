import { FaceBook, Twitter, Instagram } from "@/components/Icons";

const SocialMediaLinks = () => (
  <p className="flex flex-items-center flex-gap-1">
    <a href="#" aria-label="facebook" className="white-to-corp-col">
      <FaceBook />
    </a>
    <a href="#" aria-label="twitter" className="white-to-corp-col">
      <Twitter />
    </a>
    <a href="#" aria-label="instagram" className="white-to-corp-col">
      <Instagram />
    </a>
  </p>
);

export default SocialMediaLinks;
