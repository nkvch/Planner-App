import React from 'react';
import Day from '../components/Day'


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
        let firstWeek = new Array(actualDay.getDay()).fill(null);
        while(firstWeek.length < 7) {
            firstWeek.push(actualDay);
            d++;
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
            <div className="calendar-page">
            <h1>calendar</h1>
            <div className="calendar">
            <div className="month-and-year">
                <div className="month-name"><h2>{this.months[this.state.month]}</h2></div>
                <div className="year-name"><h2>{this.state.year}</h2></div>
            </div>
            <table className="table-calendar">
            <thead>
                <tr className="week-days">
                    <td className="weekend">Sun</td>
                    <td>Mon</td>
                    <td>Tue</td>
                    <td>Wed</td>
                    <td>Thu</td>
                    <td>Fri</td>
                    <td className="weekend">Sat</td>
                </tr>
            </thead>
            <tbody>
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
            </tbody>
            </table>
            </div>
            </div>
        )
    }

}

export default Calendar