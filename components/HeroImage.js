import Image from "next/image";
import heroImage from "../public/photos/car.png";

export default function HeroImage() {
  const image = {
    src: heroImage,
    alt: "Picture of a car",
  };

  return (
    <div>
      <Image src={image.src} placeholder="blur" alt={image.alt} />
    </div>
  );
}
