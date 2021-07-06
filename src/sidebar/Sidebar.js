import React, { Component } from 'react'
import './Sidebar.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOptions from '../sidebar/SidebarOptions'

export class Sidebar extends Component {
    render() {
        return (
            <div>
                <TwitterIcon />
                <SidebarOptions />
            </div>
        )
    }
}

export default Sidebar
