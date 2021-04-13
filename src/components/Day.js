import React from 'react';

class Day extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        if (!this.props.isToday) {
            return <div className="day"><p>{this.props.day}</p></div>
        } else {
            return <div className="today"><p>{this.props.day}</p></div>
        }
    }
}

export default Day;