import Image from "next/image";
import lockup from "../public/photos/lockup.png";

export default function Lockup() {
  const image = {
    src: lockup,
    alt: "Mobil 1 | Chevrolet Performance Racing",
  };

  return (
    <div>
      <Image src={image.src} placeholder="blur" alt={image.alt} />
    </div>
  );
}
