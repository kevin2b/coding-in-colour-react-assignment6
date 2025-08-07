import share from '@images/icon-share.svg'
import DefaultFooter from './DefaultFooter/DefaultFooter';
import SharedFooter from './ShareFooter/ShareFooter';

function ArticleFooter (){
  return (
    <div className="article__footer" id="js-article__footer">
      <DefaultFooter />
      <SharedFooter />
      <button type="button" className="share__button share__button--hover" id="js-share__button">
        <img src={share} alt="Share icon" className="share__icon" id="js-share__icon" />
      </button>
    </div>
  );
}

export default ArticleFooter;