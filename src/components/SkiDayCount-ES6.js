import { Component, PropTypes } from 'react'
import '../stylesheets/style.css';

import { Icon } from 'react-icons-kit'
import {weatherSnow} from 'react-icons-kit/typicons/weatherSnow'
import {calendar} from 'react-icons-kit/icomoon/calendar'
import {image} from 'react-icons-kit/fa/image'

export class SkiDayCount extends Component {


  percentToDecimal(decimal) {
    return ((decimal * 100) + '%')
  }
  calcGoalProgress(total, goal) {
    return this.percentToDecimal(total/goal)
  }
  render() {
    return (
      <div className="ski-day-count">
        <div className="total-days">
          <span>{this.props.total}</span>
          <Icon size={'50'} icon={calendar}/>
          <span>days</span>
        </div>
        <div className="powder-days">
          <span>{this.props.powder}</span>
          <Icon size={'50'} icon={weatherSnow}/>
          <span>days</span>
        </div>
        <div className="backcountry-days">
          <span>{this.props.backcountry}</span>
          <Icon size={'50'} icon={image}/>
          <span>days</span>
        </div>
        <div>
          <span>
            Goal: {this.calcGoalProgress(
              this.props.total, 
              this.props.goal
            )}
          </span>
        </div>
      </div>
    )
  }
}

SkiDayCount.defaultProps = {
  total: 50,
  powder: 10,
  backcountry: 15,
  goal: 80
}


SkiDayCount.propTypes = {
  total: PropTypes.number,
  powder: PropTypes.number,
  backcountry: PropTypes.number
}






