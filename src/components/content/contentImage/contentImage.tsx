import Image from "next/image";
import styles from './contentImage.module.scss';

type Props = {
  children?: React.ReactNode,
  src: string,
  width: number,
  height: number,
  alt: string
};

export default function ContentImage(props: Props) {
  return(
    <figure>
      <picture>
        <Image priority className={styles.image} src={props.src} width={props.width} height={props.height} alt={props.alt}/>
        {/* Decorative duplicate used purely for the blurred drop-shadow effect. */}
        <Image aria-hidden className={styles.shadow} src={props.src} width={props.width} height={props.height} alt="" />
      </picture>

      {props.children}
    </figure>
  )
}
