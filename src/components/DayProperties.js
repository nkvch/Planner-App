import React from 'react';
import { DateTime } from 'luxon';

class DayProperties extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return(
            <div className="day-properties">
            <p>This is {this.props.day.day}th {this.props.day.monthLong} {this.props.day.year}</p>
          </div>
        )
    }
}

export default DayProperties;