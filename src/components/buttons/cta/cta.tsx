import { Icon } from "@iconify/react";
import Link from "next/link";
import styles from './cta.module.scss';

type Props = {
  title: string,
  href: string,
  onClick?: () => void,
}

export default function ButtonCTA(props: Props) {
  return(
    <Link className={styles.button} href={props.href} onClick={props.onClick}>
      <span>{props.title}</span>
      <Icon icon="eva:arrow-forward-outline" />
    </Link>
  )
}
