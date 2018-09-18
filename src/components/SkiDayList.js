import React from 'react';
import { Link } from 'react-router'
import '../stylesheets/style.css';

import {SkiDayRow} from './SkiDayRow'
import {PropTypes} from 'react'


export const SkiDayList = ({days, filter}) => {

    const filteredDays = (!filter || !filter.match(/powder|backcountry/)) ? days : 
                            days.filter(day => day[filter])

    return (
    <div className="ski-day-list">
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Resort</th>
                <th>Powder</th>
                <th>Backcountry</th>
            </tr>
            <tr>
                <td colSpan={4}>
                    <Link to="list-days">
                        All Days
                    </Link>
                    <Link to="list-days/powder">
                        Powder Days
                    </Link>
                    <Link to="list-days/backcountry">
                        Backcountry Days
                    </Link>
                </td>
            </tr>
        </thead>
        <tbody>
            {filteredDays.map((day, i) => 
                <SkiDayRow key={i}
                        resort={day.resort}
                        date={day.date}
                        powder={day.powder}
                        backcountry={day.backcountry}/>)}
        </tbody>
    </table>
    
    </div>
    

)
}

SkiDayList.PropTypes = {
    days: function(props){
        if(!Array.isArray(props.days)){
            return new Error(
                "SkiDayList should be an array.."
            )
        }else if(!props.days.length){
            return new Error(
                "SkiDayList must have at least one record"
            )
        }else{
            return null
        }
    }

}