import React from 'react';
import Header from './content/header.js';
import SearchBar from './content/searchBar.js';
import ArticleList from './content/articleList.js';
import news from './data/news-data.json';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.handleSearchType = this.handleSearchType.bind(this)
        this.handleSearchTerm = this.handleSearchTerm.bind(this)
        this.handleSearchClick = this.handleSearchClick.bind(this)
        this.state = {
            searchType: "date",
            searchTerm: new Date(),
            articles: news.news
        }
    }

    componentDidMount() {
        this.handleSearchClick();
    }

    handleSearchType(e) {
        this.setState({ searchType: e.target.getAttribute("name") })
        let inputElem = document.getElementById("input")
        if(e.target.getAttribute("name") === "date") {
            inputElem.setAttribute("type", "date")
        } else {
            inputElem.setAttribute("type", "text")
        }
        inputElem.value = ""
        
    }

    handleSearchTerm(e) {
        this.setState({ searchTerm: document.getElementById("input").value })
    }

    handleSearchClick() {
        let filteredArticles;
        if(this.state.searchType === "date") {
            filteredArticles = news.news.filter(article => {
                                        let articleDate = new Date(article.released).valueOf()
                                        let searchDate = new Date(this.state.searchTerm).valueOf() + 18000000
                                        let differenceDays = Math.abs((articleDate - searchDate)/86400000)
                                        return differenceDays <= 1 && differenceDays >= 0
                                    })
        } else if(this.state.searchType === "author") {
            filteredArticles = news.news.filter(article => {
                return article.author.toLowerCase().includes(this.state.searchTerm.toLowerCase())
            })
        } else {
            filteredArticles = news.news.filter(article => {
                return article.caption.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || article.story.toLowerCase().includes(this.state.searchTerm.toLowerCase())
            })
        }
        this.setState({ articles: filteredArticles })
        }

    render() {
        return (
            <React.Fragment>
                <Header/>
                <SearchBar searchType={this.state.searchType} handleSearchType={this.handleSearchType} handleSearchTerm={this.handleSearchTerm} handleSearchClick={this.handleSearchClick}/>
                <ArticleList articles={this.state.articles}/>
            </React.Fragment>
        )
    }
}

export default App;