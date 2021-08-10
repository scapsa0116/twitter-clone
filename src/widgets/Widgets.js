import React from 'react'
import "./Widgets.css"
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';


export default function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets_input" >
                <SearchIcon className="widget_searchIcon"/>
                <input placeholder="Search Twitter" type="text"/> 
            {/* <TwitterTimelineEmbed
            sourceType="profile"
            screenName="saurabhnemade"
            options={{height: 400}}
            /> */}
                
            </div>
            <div className="widgets_widgetContainer">
                <h2>Whats happening?</h2>
                <TwitterTweetEmbed tweetId={"858551177860055040"} />

                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="cleverqazi"
                options={{ height: 400 }}
                />
                <TwitterShareButton
                url={"https://facebook.com/cleverprogrammer"}
                options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
                />

            </div>
            
            
        </div>
    )
}
