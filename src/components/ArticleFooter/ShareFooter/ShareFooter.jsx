import facebook from '@images/icon-facebook.svg'
import twitter from '@images/icon-twitter.svg'
import pinterest from '@images/icon-pinterest.svg'
import styles from './ShareFooter.module.css'

function ShareFooter ({share}){
  return (
    <div className={`${share? "":"js-footer--hidden-mobile"} ${styles["article__footer-wrapper-share"]}`} >
      <div className={styles["article__footer-share"]}>
        <p className={styles.share__text}>
          Share
        </p>
        <img src={facebook} alt="Facebook" className={styles.share__img} />
        <img src={twitter} alt="Twitter" className={styles.share__img} />
        <img src={pinterest} alt="Pinterest" className={styles.share__img} />
      </div>
    </div>
  )
}

export default ShareFooter;