import michelle from '@images/avatar-michelle.jpg'
function DefaultFooter ({share}){
  return (
    <div className={`article__footer-wrapper ${share? "js-footer--hidden-mobile":""}`} id="js-article__footer-wrapper-default">
      <div className="article__footer-info">
        <img src={michelle} alt="Michelle Appleton" className="footer__user-img" />
        <div className="article__info">
          <p className="article__user">
            Michelle Appleton
          </p>
          <p className="article__date">
            28 Jun 2020
          </p>
        </div>
      </div>
    </div>
  );
}

export default DefaultFooter;