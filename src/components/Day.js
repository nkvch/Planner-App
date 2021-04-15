import React from 'react';

class Day extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return <div className={this.props.currMonth ? this.props.isToday ? "today" : "day" : "other-day"}><p>{this.props.day}</p></div>
    }
}

export default Day;