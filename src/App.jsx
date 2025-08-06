/** Component Imports */
import drawer from '../images/drawers.jpg'
import michelle from '../images/avatar-michelle.jpg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import share from '../images/icon-share.svg'

/**
 * This is the entry point for your react-app
 *  1. We strongly recommend comparmentalizing your code into Components
 *  2. We strongly recommend putting those within the /components folder
 *  3. We strongly recommend using a modular-approach to CSS:
 *    - An example has been provided for you, see the 'Example' component
 *    - The 'Example.jsx' component comes with an 'Example.module.css'
 *    - Pay attention to variable file import (gives access to CSS variables)
 *    - Pay special attention to how we apply the className from the imported 'styles' 
 */

const App = () => {
  return (
    <div>
      <article className="wrapper">
        <img src={drawer} alt="Green table with two photo frame and a vase" className="article__img" />
        <div className="article__body-wrapper">
          <div className="article__body">
            <h2 className="article__heading">
              Shift the overall look and feel by adding these wonderful 
              touches to furniture in your home  
            </h2>
            <p className="article__summary">
              Ever been in a room and felt like something was missing? Perhaps 
              it felt slightly bare and uninviting. I’ve got some simple tips 
              to help you make any room feel complete.
            </p>
          </div>
          <div className="article__footer" id="js-article__footer">
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
            <div className="article__footer-wrapper js-footer--hidden-mobile" id="js-article__footer-wrapper-share">
              <div className="article__footer-share">
                <p className="share__text">
                  Share
                </p>
                <img src={facebook} alt="Facebook" className="share__img" />
                <img src={twitter} alt="Twitter" className="share__img" />
                <img src={pinterest} alt="Pinterest" className="share__img" />
              </div>
            </div>
            <button type="button" className="share__button share__button--hover" id="js-share__button">
              <img src={share} alt="Share icon" className="share__icon" id="js-share__icon" />
            </button>
          </div>
        </div>
      </article>
    </div>
  )
}

export default App