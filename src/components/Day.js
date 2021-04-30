import React from 'react';
import { DateTime } from 'luxon';

class Day extends React.Component {
    constructor(props) {
        super(props);
        this.select = this.select.bind(this);
        this.chooseClass = this.chooseClass.bind(this);
        this.state = {
            selected: false,
        }
    }

    select() {
        this.setState({selected: true})
    }

    chooseClass() {
        let className = 'day';
        if (this.props.isToday) { className += ' today' };
        if (this.props.currMonth) { className += ' this-month-day' } else { className += ' other-day'};
        if (this.props.isSelected) { className += ' selected-day'} else { className += ' non-selected-day'};
        return className;
    }

    render() {
        const className = this.chooseClass();
        return <div onClick={this.props.onClick}
         className={className}>
         <p>{this.props.day.day}</p>
         {this.props.isSelected ? <DayInfo day={this.props.day}/> : null}
         </div>
    }
}

class DayInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return(
            <div className="day-info">
            <p>This is {this.props.day.day}th {this.props.day.monthLong} {this.props.day.year}</p>
          </div>
        )
    }
}



  

export default Day;