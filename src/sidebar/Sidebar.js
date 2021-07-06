import React, { Component } from 'react'
import './Sidebar.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOptions from '../sidebar/SidebarOptions'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';export class Sidebar extends Component {
    render() {
        return (
            <div>
                <TwitterIcon />
                <SidebarOptions Icon={HomeIcon} text="Home"/>
                <SidebarOptions Icon={SearchIcon} text="Search"/>
                <SidebarOptions Icon={NotificationsNoneIcon} text="Notifications"/>

                {/* <SidebarOptions Icon={} text="Home"/>
                <SidebarOptions Icon={} text="Home"/>
                <SidebarOptions Icon={} text="Home"/> */}
            </div>
        )
    }
}

export default Sidebar
