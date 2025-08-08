import facebook from '@images/icon-facebook.svg'
import twitter from '@images/icon-twitter.svg'
import pinterest from '@images/icon-pinterest.svg'

function ShareFooter ({share}){
  return (
    <div className={`article__footer-wrapper ${share? "":"js-footer--hidden-mobile"}`} id="js-article__footer-wrapper-share">
      <div className="article__footer-share">
        <p className="share__text">
          Share
        </p>
        <img src={facebook} alt="Facebook" className="share__img" />
        <img src={twitter} alt="Twitter" className="share__img" />
        <img src={pinterest} alt="Pinterest" className="share__img" />
      </div>
    </div>
  )
}

export default ShareFooter;