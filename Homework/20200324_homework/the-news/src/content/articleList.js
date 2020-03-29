import React from 'react';
import Article from '../components/article.js';

class ArticleList extends React.Component {

    render() {
        return (
            this.props.articles.map(article => {
                return <Article key={Math.random().toString(36).substr(2,9)} article={article}></Article>
            })
        )
    }   
}

export default ArticleList;