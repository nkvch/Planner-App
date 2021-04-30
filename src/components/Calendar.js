import { DateTime } from 'luxon';
import React from 'react';
import Day from '../components/Day'


class Calendar extends React.Component{

    constructor(props) {
        super(props);
        const today = DateTime.now();
        const month = today.monthLong;
        const year = today.year;
        const firstDay = today.startOf("month").startOf("week");
        const lastDay = today.endOf("month").endOf("week");
        this.prevMonth = this.prevMonth.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
        this.selectDay = this.selectDay.bind(this);
        this.state = {
            today: today,
            month: month,
            year: year,
            firstDay: firstDay,
            lastDay: lastDay,
        }
    }

    prevMonth() {
        const newMonth = this.state.firstDay.minus({day: 1}).monthLong;
        const newYear = this.state.firstDay.minus({day: 1}).year;
        const newFirstDay = this.state.firstDay.minus({day: 1}).startOf("month").startOf("week");
        const newLastDay = this.state.firstDay.minus({day: 1}).endOf("month").endOf("week");
        this.setState({
            month: newMonth,
            year: newYear,
            firstDay: newFirstDay,
            lastDay: newLastDay,
        })
    }

    nextMonth() {
        const newMonth = this.state.lastDay.plus({day: 1}).monthLong;
        const newYear = this.state.lastDay.plus({day: 1}).year;
        const newFirstDay = this.state.lastDay.plus({day: 1}).startOf("month").startOf("week");
        const newLastDay = this.state.lastDay.plus({day: 1}).endOf("month").endOf("week");
        this.setState({
            month: newMonth,
            year: newYear,
            firstDay: newFirstDay,
            lastDay: newLastDay,
        })
    }

    selectDay(day) {
        this.setState({selectedDay: day})
    }

    render() {
        const calendar = [];
        let iterDay = DateTime.now().set({day: this.state.firstDay.day, month: this.state.firstDay.month, year: this.state.firstDay.year});
        while (iterDay.diff(this.state.lastDay,"days").days < 0) {
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
            <h1 className="title">calendar</h1>
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
                                <td >
                                    <Day onClick={() => this.selectDay(day)} 
                                    day={day}
                                    isToday={day.toISODate() == this.state.today.toISODate()}
                                    currMonth={day.monthLong === this.state.month} 
                                    isSelected={this.state.selectedDay ? day.toISODate() === this.state.selectedDay.toISODate() : false}/>
                                </td>
                                )
                            }
                        </tr>
                        )
                }
            </tbody>
            </table>
            </div>
            <button onClick={this.prevMonth} className="changemonth prev fas fa-arrow-alt-circle-left"></button>
            <button onClick={this.nextMonth} className="changemonth next fas fa-arrow-alt-circle-right"></button>
            </div>
        )
    }

}

export default Calendar