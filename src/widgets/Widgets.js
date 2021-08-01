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
            
<TwitterTweetEmbed
  tweetId={'933354946111705097'}
/>
<TwitterShareButton
    url={'https://facebook.com/saurabhnemade'}
    options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
  />
        </div>
    )
}
