import Image from "next/image";
import bottle from "../public/photos/bottle.png";

export default function Bottle() {
  const image = {
    src: bottle,
    alt: "Rosie Mobil 1 Bottle",
  };

  return (
    <div className="w-3/4 lg:w-full mx-auto">
      <Image src={image.src} placeholder="blur" alt={image.alt} />
    </div>
  );
}
