import React from 'react'
import "./SidebarOptions.css"


function SidebarOptions({ text, Icon }) {
    return (
        <div className="sidebarOptions">
            <Icon />
            {/* rfce */}
            <h2>{text}</h2>
        
        </div>
    )
}

export default SidebarOptions
