import React from 'react';
import Table from './components/Table';
import players from './assets/players';

const columns = ["Number",
                 "Player Name",
                 "Position",
                 "Height (inches)",
                 "Weight (lbs)",
                 "Age",]

const footers = ["Team Averages:",
                 "",
                 "",
                 "74.0",
                 "198.8",
                 "26.2",]

class App extends React.Component {

    render() {
        return (
            <React.Fragment>
                <h2>Go Bruins!</h2>
                <Table cols={columns} players={players} foot={footers}/>
            </React.Fragment>
        )
    }
}

export default App;