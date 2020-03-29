import React from 'react';
import boston from '../assets/boston.jpg';
import fox from '../assets/fox.png';
import Vox from '../assets/Vox.jpg';
import fakenews from '../assets/fakenews.png';

class Article extends React.Component {

    render() {

        let image = this.props.article.image;
        let logo;

        if(image === "fox") {
            logo = fox;
        } else if (image === "boston") {
            logo = boston
        } else if (image === "Vox") {
            logo = Vox
        } else {
            logo = fakenews
        }

        return (
            <a href="https://www.youtube.com/watch?v=dKiO37AdNa4">
                <div className="newsArticle flex">
                    <img src={logo} alt="The Boston Globe"/>
                    <div>
                        <div>
                            <h1>{this.props.article.caption}</h1>
                            <h3>{this.props.article.story}</h3>
                        </div>
                        <div className="flex">
                            <div className="left-justify">
                                <h5>{this.props.article.author}</h5>
                                <h6>{this.props.article.released}</h6>
                            </div>
                            <div className = "right-justify">
                                <h5>{this.props.article.source}</h5>
                                <h6>{this.props.article.url}</h6> 
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        )
    }
}

export default Article;