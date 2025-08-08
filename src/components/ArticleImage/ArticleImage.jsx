import drawer from '@images/drawers.jpg'
import styles from './ArticleImage.module.css'

function ArticleImage(){
  return <img src={drawer} alt="Green table with two photo frame and a vase" className={styles.article__img} />;
}

export default ArticleImage;