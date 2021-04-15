import { DateTime } from 'luxon';
import React from 'react';
import Day from '../components/Day'


class Calendar extends React.Component{

    constructor(props) {
        super(props);
        const day = DateTime.now();
        const month = day.monthLong;
        const year = day.year;
        this.state = {
            day: day,
            month: month,
            year: year,
        }
    }

    render() {
        const calendar = [];
        const firstDay = this.state.day.startOf("month").startOf("week");
        const lastDay = this.state.day.endOf("month").endOf("week");
        let iterDay = DateTime.now().set({day: firstDay.day, month: firstDay.month, year: firstDay.year});
        while (iterDay.diff(lastDay,"days").days < 0) {
            calendar.push(
                Array(7).fill().map( function() {
                    let nextDay = iterDay;
                    iterDay = iterDay.plus({days: 1})
                    return nextDay
                } 
                )
            )
        }
        return (
            <div className="calendar-page">
            <h1>calendar</h1>
            <div className="calendar">
            <div className="month-and-year">
                <div className="month-name"><h2>{this.state.month}</h2></div>
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
                    calendar.map(week => 
                        <tr>
                            {
                                week.map(day => 
                                <td>
                                    <Day day={day.day} isToday={day.day === this.state.day.day} currMonth={day.month === this.state.day.month}/>
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