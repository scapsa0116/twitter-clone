import React from 'react'
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
import { Button } from '@material-ui/core'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

function Sidebar()  {
    
        return (
            <div className="sidebar">
                <TwitterIcon className="sidebar_twitterIcon"/>
                <SidebarOptions active Icon={HomeIcon} text="Home"/>
                <SidebarOptions Icon={SearchIcon} text="Search"/>
                <SidebarOptions Icon={NotificationsNoneIcon} text="Notifications"/>
                <SidebarOptions Icon={EmailIcon} text="Messages"/>
                <SidebarOptions Icon={TurnedInNotIcon} text="Bookmarks"/>
                <SidebarOptions Icon={ListAltIcon} text="Lists"/>
                <SidebarOptions Icon={PersonOutlineIcon} text="Profile"/>
                <SidebarOptions Icon={MoreHorizIcon} text="More"/>
                <Button variant="outline" className="sidebar_tweet" fullWidth>Tweet</Button>
            </div>
        )
    }


export default Sidebar
