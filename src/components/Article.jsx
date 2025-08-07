import ArticleImage from './ArticleImage/ArticleImage'
import ArticleBody from './ArticleBody/ArticleBody'
import ArticleFooter from './ArticleFooter/ArticleFooter'

function Article(){
  return (
    <article className="wrapper">
      <ArticleImage />
      <div className="article__body-wrapper">
        <ArticleBody />
        <ArticleFooter />
      </div>
    </article>

  )
}
export default Article;