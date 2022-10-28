import Image from "next/image";
import titleImage from "../public/photos/title.png";

export default function TitleImage() {
  const image = {
    src: titleImage,
    alt: "For the love of driving",
  };

  return (
    <div>
      <Image src={image.src} placeholder="blur" alt={image.alt} />
    </div>
  );
}
