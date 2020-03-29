import React from 'react';

class SearchBar extends React.Component {

    componentDidUpdate() {
        const searchButtons = document.getElementsByClassName("searchButton")
        for(let i=0; i<searchButtons.length; i++) {
            let currButton = searchButtons[i]
            if(currButton.getAttribute("name") === this.props.searchType) {
                currButton.setAttribute("class", "searchButton")
            } else {
                currButton.setAttribute("class", "searchButton searchClassInactive")
            }
            
        }
    }

    render() {

        return(
            <div className="searchBar">
                <div id="searchButtons" onClick={this.props.handleSearchType}>
                    <div name="date" className="searchButton">Search by Date</div>
                    <div name="author" className="searchButton searchClassInactive">Search by Author</div>
                    <div name="keyword" className="searchButton searchClassInactive">Search by Keyword</div>
                </div>
                <div id="searchInput">
                    <input id="input" type='date' onChange={this.props.handleSearchTerm}></input>
                    <button onClick={this.props.handleSearchClick}>Search</button>
                </div>
            </div>
        )
    }
}

export default SearchBar;