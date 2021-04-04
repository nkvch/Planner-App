import React from 'react';

class Day extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        if (!this.props.isToday) {
            return <div className="day">{this.props.day}</div>
        } else {
            return <div className="today">{this.props.day}</div>
        }
    }
}

class Calendar extends React.Component{
    constructor(props) {
        super(props);
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();
        let daysInMonth = this.getNumberOfDays(date);
        let daysArray = this.getDaysArray(daysInMonth, date);
        let weeksArray = this.getWeeksArray(daysArray);
        this.state = {
            date: date,
            day: day,
            month: month,
            year: year,
            daysInMonth: daysInMonth,
            daysArray: daysArray,
            weeksArray: weeksArray,
        }
    }

    componentDidMount() {
    }

    months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]


    getNumberOfDays(dateObject) {
        let dateToChange = new Date(dateObject);
        let number = dateToChange.getDate();
        dateToChange.setDate(dateToChange.getDate() + 1);
        while (dateToChange.getMonth() === dateObject.getMonth()) {
            number++;
            dateToChange.setDate(dateToChange.getDate() + 1);
        }
        return number;
    }

    getDaysArray(daysInMonth, date) {
        let daysArray = [];
        for (let i = 1; i <= daysInMonth; i++) {
            let ithDay;
            if (i != date.getDate()) {
                ithDay = new Date(date);
                ithDay.setDate(i);
            } else {
                ithDay = date;
            }
            daysArray.push(ithDay);
        }
        return daysArray;
    }

    getWeeksArray(daysArray) {
        let d = 0; //days counter
        let weeksArray = [];
        let actualDay = daysArray[d];
        console.log(actualDay);
        let firstWeek = new Array(actualDay.getDay()).fill(null);
        while(firstWeek.length < 7) {
            firstWeek.push(actualDay);
            d++;
            console.log(d);
            actualDay = daysArray[d];
        }
        weeksArray.push(firstWeek);
        while(d < daysArray.length) {
            let week = new Array(7).fill().map(function() {
                if (d < daysArray.length) {
                    actualDay = daysArray[d];
                    d++;
                    return actualDay;
                } else {
                    d++;
                    return null;
                }
            });
            weeksArray.push(week);
        }
        return weeksArray;
    }

    
    render() {

        return (
            <div className="calendar">
            <div className="month-and-year">
                <div className="month-name"><h1>{this.months[this.state.month]}</h1></div>
                <div className="year-name"><h1>{this.state.year}</h1></div>
            </div>
            <table className="table-calendar">
                { 
                    this.state.weeksArray.map(week => 
                        <tr>
                            {
                                [0,1,2,3,4,5,6].map(i => 
                                <td>
                                    <Day day={week[i] ? week[i].getDate() : null} isToday={week[i] === this.state.date}/>
                                </td>
                                )
                            }
                        </tr>
                        )
                }
            </table>
            </div>
        )
    }

}

export default Calendar