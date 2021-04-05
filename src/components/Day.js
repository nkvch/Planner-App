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

export default Day;