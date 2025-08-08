import ArticleImage from './ArticleImage/ArticleImage'
import ArticleBody from './ArticleBody/ArticleBody'
import ArticleFooter from './ArticleFooter/ArticleFooter'
import styles from './Article.module.css';

function Article(){
  return (
    <article className={styles.wrapper}>
      <ArticleImage />
      <div>
        <ArticleBody />
        <ArticleFooter />
      </div>
    </article>

  )
}
export default Article;