import styles from './listTimeline.module.scss';

type Props = {
  title?: string,
  children: React.ReactNode
}

export default function ListTimeline(props: Props) {
  return(
    <div className={styles.wrapper}>
      {props.title ? <h2 className={styles.title}>{props.title}</h2> : null}
      <ol className={styles.list}>
        {props.children}
      </ol>
    </div>
  )
}