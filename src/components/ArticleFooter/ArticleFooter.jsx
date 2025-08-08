import share from '@images/icon-share.svg'
import DefaultFooter from './DefaultFooter/DefaultFooter';
import ShareFooter from './ShareFooter/ShareFooter';
import { useState, useEffect } from 'react';
import styles from './ArticleFooter.module.css'

function ArticleFooter (){
  const [showShare, setShare] = useState(false);
  const handleShareClick = () => {
    setShare(prev => !prev);
  }

  const handleClickOutside = (event) => {
    if (!event.target.closest(`.${styles.article__footer}`)) {
      setShare(false);
    }
  }

  const handleEscape = (event) => {
    if (event.key === "Escape") {
      setShare(false);
    }
  }

  useEffect(() => {
    if (!showShare){
      return;
    }
    window.addEventListener("click", handleClickOutside);
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener('click', handleClickOutside);
      window.removeEventListener('keydown', handleEscape);
    }
  }, [showShare]);

  return (
    <div className={`${styles.article__footer} ${showShare? styles["article__footer--share-mobile"]:""} `}>
      <DefaultFooter share={showShare}/>
      <ShareFooter share={showShare}/>
      <button type="button" className={`${styles.share__button} ${showShare? styles["share__button--selected"]:""}`} onClick={handleShareClick}>
        <img src={share} alt="Share icon" className={`${styles.share__icon} ${showShare? styles["share__icon--selected"]:""}`} />
      </button>
    </div>
  );
}

export default ArticleFooter;