import React from 'react';
import './styles.scss';
import Story from './Story'
import HorizontalScroll from 'react-scroll-horizontal'
export default function Stories() {
    return (
        <div className='stories'>
            <HorizontalScroll className="scroll" reverseScroll={true}>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
            </HorizontalScroll>
        </div>
    )
}
