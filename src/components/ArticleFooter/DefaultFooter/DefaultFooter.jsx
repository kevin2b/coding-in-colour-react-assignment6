import michelle from '@images/avatar-michelle.jpg'
function DefaultFooter (){
  return (
    <div className="article__footer-wrapper" id="js-article__footer-wrapper-default">
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