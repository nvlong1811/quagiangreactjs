import React from 'react'
import './styles.scss';
import ProfileIcon from '../ProfileIcon';
export default function Profile(props) {
    const {
        username,
        caption,
        urlText,
        iconSize,
        captionSize,
        storyBorder,
        hideAccountName,
        image
    } = props;

    let accountName = username ? username : "Anonymous"
    return (
        <div className='profile'>
            <ProfileIcon iconSize={iconSize} storyBorder={storyBorder} image={image}></ProfileIcon>
            {
                (accountName || caption) && !hideAccountName && (
                    <div className='textContainer'>
                        <span className='accountName'>{accountName}</span>
                        <span className={`caption ${captionSize}`}>{caption}</span>
                    </div>

                )
            }
            <a href="/">{urlText}</a>
        </div>
    )
}
