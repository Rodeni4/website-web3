import Image from "next/image";

import styles from "./promo-image.module.css";

type PromoImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function PromoImage({ src, alt, className = "" }: PromoImageProps) {
  return (
    <div className={`${styles.promoImage} ${className}`.trim()}>
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(max-width: 768px) 92vw, 500px"
        className={styles.promoImage__img}
      />
    </div>
  );
}
