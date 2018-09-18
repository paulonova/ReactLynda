import React from 'react';
import { PropTypes } from 'react'
import '../stylesheets/style.css';

import { Icon } from 'react-icons-kit'
import {weatherSnow} from 'react-icons-kit/typicons/weatherSnow'
import {calendar} from 'react-icons-kit/icomoon/calendar'
import {image} from 'react-icons-kit/fa/image'


const percentToDecimal = (decimal) => {
    return((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
    return percentToDecimal(total/goal);
}

export const SkiDayCount = ({total=70, powder=20, 
                        backcountry=10, goal=100}) => 
(
    <div className="ski-day-count">
        <div className="total-days">
            <span>{total}</span>
            <Icon size={'50'} icon={calendar}/>
            <span> days</span>
        </div>
        <div className="powder-days">
        <span>{powder}</span>
        <Icon size={'50'} icon={weatherSnow}/>
            <span> days</span>
        </div>
        <div className="backcountry-days">
        <span>{backcountry}</span>
        <Icon size={'50'} icon={image}/>
            <span>days</span>
        </div>
        <div className="">
        <span>{calcGoalProgress(total, goal)}</span>
        </div>
    </div>
)

// SkiDayCount.defaultProps = {
//     total: 50,
//     powder: 10,
//     backcountry: 15,
//     goal: 80
//   }

SkiDayCount.propTypes = {
    total: PropTypes.number,
    powder: PropTypes.number,
    backcountry: PropTypes.number,
    goal: PropTypes.number
  }
    

