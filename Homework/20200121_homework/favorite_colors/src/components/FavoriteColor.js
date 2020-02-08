import React from 'react';

class FavoriteColor extends React.Component {
    render() {
        return (
            <li>{this.props.color}</li>
        )
    }
}

export default FavoriteColor;