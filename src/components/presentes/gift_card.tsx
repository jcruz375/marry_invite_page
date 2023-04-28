import Image, { StaticImageData } from "next/image";
import { FunctionComponent } from "react";
import styles from "../../styles/gifts.module.scss"

interface GiftCardProps {
  imagePath: StaticImageData;
  title: string;
  price: string;
}

const GiftCard: FunctionComponent<GiftCardProps> = ({ imagePath, title, price }) => {
  return (
    <div className={`flex flex-col justify-between items-center p-2.5 ${styles.card}`}>
      <Image
        src={imagePath}
        alt={title}
        width={140}
        height={140}
      />
      <p className="font-serif text-base text-center mt-2.5">
        {title}
      </p>
      <p className="font-serif font-bold text-xl mt-2.5">
        {price}
      </p>
      <div className="w-full flex justify-center items-center">
        <button className={`rounded-full w-full ${styles.button}`}>
          Comprar
        </button>
      </div>
    </div>
  );
}

export default GiftCard;