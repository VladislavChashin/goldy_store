import { article } from '../data/data_articles'
import { IArticle } from '../data/model'
import img from './img/blog/ring.jpg'

export function Article(){
    return(
        <div className="article">
            <div className="article_wraper">
                <h3>Статьи</h3>
                <div className="content">
                    {article.map(article => (<ArticleBlog content = {article} key = {article.id}/>))}
                </div>
            </div>
        </div>
    )
}

interface ArticleProps{
    content:IArticle
}

function ArticleBlog({content}:ArticleProps){
    return(
        <div className="content_wrap">
            <img src={content.image} alt="" />
            <p>{content.date}</p>
            <p>{content.page}</p>
        </div>
    )
}