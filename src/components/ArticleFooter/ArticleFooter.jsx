import share from '@images/icon-share.svg'
import DefaultFooter from './DefaultFooter/DefaultFooter';
import ShareFooter from './ShareFooter/ShareFooter';
import { useState, useEffect } from 'react';

function ArticleFooter (){
  const [showShare, setShare] = useState(false);
  
  const handleShareClick = () => {
    setShare(prev => !prev);
  }

  const handleClickOutside = (event) => {
    if (!event.target.closest(".article__footer")) {
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
    <div className={`article__footer ${showShare? "js-article__footer--share-mobile":""} `} id="js-article__footer">
      <DefaultFooter share={showShare}/>
      <ShareFooter share={showShare}/>
      <button type="button" className={`share__button share__button--hover ${showShare? "js-share__button--selected":""}`} id="js-share__button" onClick={handleShareClick}>
        <img src={share} alt="Share icon" className={`share__icon ${showShare? "js-share__icon--selected":""}`} id="js-share__icon" />
      </button>
    </div>
  );
}

export default ArticleFooter;