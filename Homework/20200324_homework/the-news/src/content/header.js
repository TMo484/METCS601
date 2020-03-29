import React from 'react';

class Header extends React.Component {

    getDate() {
        let today = new Date()
        let dayOfWeek, monthOfYear;

        switch(today.getDay()) {
            case 0:
                dayOfWeek = 'Sunday'
                break;
            case 1:
                dayOfWeek = 'Monday'
                break;
            case 2:
                dayOfWeek = 'Tuesday'
                break;
            case 3:
                dayOfWeek = 'Wednesday'
                break;
            case 4:
                dayOfWeek = 'Thursday'
                break;
            case 5:
                dayOfWeek = 'Friday'
                break;
            case 6:
                dayOfWeek = 'Saturday'
                break;
            default:
                dayOfWeek = ''
        }

        switch(today.getMonth()) {
            case 1:
                monthOfYear = 'January'
                break;
            case 2:
                monthOfYear = 'February'
                break;
            case 3:
                monthOfYear = 'March'
                break;
            case 4:
                monthOfYear = 'April'
                break;
            case 5:
                monthOfYear = 'May'
                break;
            case 6:
                monthOfYear = 'June'
                break;
            case 7:
                monthOfYear = 'July'
                break;
            case 8:
                monthOfYear = 'August'
                break;
            case 9:
                monthOfYear = 'September'
                break;
            case 10:
                monthOfYear = 'October'
                break;
            case 11:
                monthOfYear = 'November'
                break;
            case 12:
                monthOfYear = 'December'
                break;
            default:
                monthOfYear = ""
        }

        return `${dayOfWeek} ${monthOfYear} ${today.getDate()}, ${today.getFullYear()}`;
    }

    render() {
        return (
            <div className="header">
                <div>
                    <h1>Tom's Newsstand</h1>
                </div>
                <div>
                    <h3>Where the new's is made up,</h3>
                    <h3>and the headlines don't matter!</h3>
                </div>
                <div>
                    <h2>{this.getDate()}</h2>
                </div>
            </div>
        )
    }
}

export default Header;