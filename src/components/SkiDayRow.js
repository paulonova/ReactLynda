import React from 'react';
import '../stylesheets/style.css';
import { PropTypes } from 'react'

import { Icon } from 'react-icons-kit'
import {image} from 'react-icons-kit/fa/image'
import {weatherSnow} from 'react-icons-kit/typicons/weatherSnow'
import {calendar} from 'react-icons-kit/icomoon/calendar'

export const SkiDayRow = ({resort, date, powder, backcountry}) => 

(
    <tr>
        <td>
            {date}
        </td>
        <td>
            {resort}
        </td>
        <td>
            {(powder) ? <Icon size={'30'} icon={weatherSnow}/> : null}
        </td>
        <td>
            {(backcountry) ? <Icon size={'30'} icon={image}/> : null}
        </td>
    
    </tr>
)

SkiDayRow.PropTypes = {
    resort: PropTypes.string.isRequired,
    // date: PropTypes.instanceOf(Date).isRequired,
    date: PropTypes.string.isRequired,
    powder: PropTypes.bool,
    backcountry: PropTypes.bool
}