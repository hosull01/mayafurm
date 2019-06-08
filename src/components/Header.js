import React from 'react';
import { SocialIcon } from 'react-social-icons';


export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
        <div className="social-media-header">
            <li>
                <SocialIcon 
                    network="facebook" 
                    bgColor="#E90F0F"  
                    style={{ height: 30, width: 30 }}
                    url="https://www.facebook.com/maya.furmanovsky"
                    target="_blank"
                    />
            </li>
            <li>
                <SocialIcon 
                    network="instagram" 
                    bgColor="#E90F0F"  
                    style={{ height: 30, width: 30 }}
                    url="https://www.instagram.com/mayanjelo/"
                    target="_blank"
                    />
            </li>
            <li>
                <SocialIcon 
                    network="linkedin" 
                    bgColor="#E90F0F"  
                    style={{ height: 30, width: 30 }}
                    url="https://www.linkedin.com/in/maya-furmanovsky-9874bb109/?originalSubdomain=jp"
                    target="_blank"
                    />
            </li>
        </div>
        )
    }
}