import React from 'react';

class TableRow extends React.Component {
    render() {
        return (
            <tr className="data_row">
                <td>{this.props.player.number}</td>
                <td><a href={this.props.player.url}>{this.props.player.name}</a></td>
                <td>{this.props.player.position}</td>
                <td>{this.props.player.height}</td>
                <td>{this.props.player.weight}</td>
                <td>{this.props.player.age}</td>
            </tr>
        )
    }
}

export default TableRow;