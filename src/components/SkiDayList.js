import React from 'react';
import '../stylesheets/style.css';

import { Icon } from 'react-icons-kit'
import {image} from 'react-icons-kit/fa/image'
import {weatherSnow} from 'react-icons-kit/typicons/weatherSnow'
import {calendar} from 'react-icons-kit/icomoon/calendar'
import {SkiDayRow} from './SkiDayRow'


export const SkiDayList = ({days}) => 
(
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Resort</th>
                <th>Powder</th>
                <th>Backcountry</th>
            </tr>
        </thead>
        <tbody>
            {days.map((day, i) => 
                <SkiDayRow key={i}
                        resort={day.resort}
                        date={day.date}
                        powder={day.powder}
                        backcountry={day.backcountry}/>)}
        </tbody>
    </table>

)