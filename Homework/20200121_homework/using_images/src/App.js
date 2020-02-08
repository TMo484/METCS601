import React from 'react';
import film_reel from './assets/film_reel.png';
import cool_image from './assets/cool_image.png';
import home from './assets/home.png';
import loveNY from './assets/LoveNY.png';


const images = [film_reel, cool_image, home, loveNY];
const titles = ["A film reel", "A spectrum of colors", "A picture of a house", "I Heart New York"];
const captions = ["I love this picture", "One of my favorites", "Also a great picture", "Let's be honest, they're all winners"];

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            image: images[0],
            title: titles[0],
            caption: captions[0]
        }
    }

    updateComponent() {
        let randImageIndex = Math.floor((Math.random() * 4))
        this.setState({image: images[randImageIndex],
                       title: titles[randImageIndex],
                       caption: captions[Math.floor((Math.random() * 4))]})
    }

    componentDidMount() {
        this.interval = setInterval(() => this.updateComponent(), 2000);
    }

    render() {
        return (
            <React.Fragment>
                <h1>Look at all these images!</h1>
                <figure>
                    <img src={this.state.image} 
                         alt="A rotating collection of awesome pictures" 
                         title=""
                         height="250"
                         width="250"/>
                    <figcaption>
                        {this.state.caption}
                    </figcaption>
                </figure>
            </React.Fragment>
        )
    }
}

export default App;