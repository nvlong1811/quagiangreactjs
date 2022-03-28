import React from 'react'
import './styles.scss';

export default function ProfileIcon(props) {
    const {iconSize, storyBorder, image} = props;

    let profileImage = image
        ? image
        : "https://i.stack.imgur.com/l60Hf.png"
    return (
        <div
            className={storyBorder
                ? "storyBorder"
                : ""}>
            <img className={`profileIcon ${iconSize}`} src={profileImage} alt="profile"></img>
        </div>
    )
}
