import React from 'react';
import FavoriteColor from './FavoriteColor';

class ColorList extends React.Component {

    render() {
        return (
            <ol>
                {this.props.colorList.map(color => {
                    return <FavoriteColor color={color}/>
                })}
            </ol>
        )
    }
}

export default ColorList;