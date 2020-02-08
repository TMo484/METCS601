import React from 'react';
import ColorList from './components/ColorList';


class App extends React.Component {

    render() {
        return (
            <React.Fragment>
                <h1>Tom's Favorite Colors:</h1>
                <ColorList colorList = {['red', 'blue', 'green']}/>
            </React.Fragment>
        )
    }
}

export default App;