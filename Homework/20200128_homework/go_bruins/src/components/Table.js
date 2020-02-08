import React from 'react';
import TableRow from './TableRow';

class Table extends React.Component {
    render() {
        return (
            <table className="full_width">
                <thead className="align_left">
                    <tr>
                        {this.props.cols.map(col => {
                            return <th>{col}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {this.props.players.map(player => {
                        return <TableRow player={player}/>
                    })}
                </tbody>
                <tfoot className="table_footer">
                    <tr>
                        {this.props.foot.map(footer => {
                            return <td>{footer}</td>
                        })}
                    </tr>
                </tfoot>

            </table>
        )
    }
}

export default Table;