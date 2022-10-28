import Image from "next/image";
import slash from "../public/photos/dark-sash.png";

export default function Slash() {
  const image = {
    src: slash,
    alt: "Rosie Mobil 1 Bottle",
  };

  return (
    <div className="absolute w-full overflow-hidden z-10">
      <Image
        src={image.src}
        placeholder="blur"
        alt={image.alt}
        style={{ width: "100%" }}
      />
    </div>
  );
}
