import React from 'react';
import '../stylesheets/style.css';

import { Icon } from 'react-icons-kit'
import {image} from 'react-icons-kit/fa/image'
import {weatherSnow} from 'react-icons-kit/typicons/weatherSnow'
import {calendar} from 'react-icons-kit/icomoon/calendar'

export const SkiDayRow = ({resort, date, powder, backcountry}) => 

(
    <tr>
        <td>
            {date.getMonth()+1}/{date.getDate()}/{date.getFullYear()}
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