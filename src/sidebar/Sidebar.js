import React, { Component } from 'react'
import './Sidebar.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOptions from '../sidebar/SidebarOptions'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import EmailIcon from '@material-ui/icons/Email';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';export class Sidebar extends Component {
    render() {
        return (
            <div>
                <TwitterIcon />
                <SidebarOptions Icon={HomeIcon} text="Home"/>
                <SidebarOptions Icon={SearchIcon} text="Search"/>
                <SidebarOptions Icon={NotificationsNoneIcon} text="Notifications"/>
                <SidebarOptions Icon={EmailIcon} text="Messages"/>
                <SidebarOptions Icon={TurnedInNotIcon} text="Bookmarks"/>
                <SidebarOptions Icon={ListAltIcon} text="Lists"/>
                <SidebarOptions Icon={PersonOutlineIcon} text="Profile"/>
                <SidebarOptions Icon={MoreHorizIcon} text="More"/>
            </div>
        )
    }
}

export default Sidebar
