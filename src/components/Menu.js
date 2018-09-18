import { Link } from 'react-router'

import { Icon } from 'react-icons-kit'
import {home} from 'react-icons-kit/icomoon/home'
import {calendar} from 'react-icons-kit/icomoon/calendar'
import {list} from 'react-icons-kit/icomoon/list'

export const Menu = () => 
    <nav className="menu">
        <Link  to="/" activeClassName="selected">
            <Icon size={'50'} icon={home} />
        </Link>
        <Link to="/add-day" activeClassName="selected">
            <Icon size={'50'} icon={calendar} />
        </Link>
        <Link to="/list-days" activeClassName="selected">
            <Icon size={'50'} icon={list} />
        </Link>
    </nav>

