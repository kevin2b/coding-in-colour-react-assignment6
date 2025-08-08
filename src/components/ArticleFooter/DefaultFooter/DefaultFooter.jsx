import michelle from '@images/avatar-michelle.jpg'
import styles from './DefaultFooter.module.css'

function DefaultFooter ({share}){
  return (
    <div className={`${share? "js-footer--hidden-mobile":""} ${styles["article__footer-wrapper-default"]}`} id="">
      <div className={styles["article__footer-info"]}>
        <img src={michelle} alt="Michelle Appleton" className={styles["footer__user-img"]} />
        <div className={styles.article__info}>
          <p className={styles.article__user}>
            Michelle Appleton
          </p>
          <p className={styles.article__date}>
            28 Jun 2020
          </p>
        </div>
      </div>
    </div>
  );
}

export default DefaultFooter;