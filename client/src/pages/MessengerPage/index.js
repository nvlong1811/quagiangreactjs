import React from 'react'
import Navigation from '../../components/Navigation'
import CardMessageLeft from '../../components/CardMessageLeft'
import CardMessageRight from '../../components/CardMessageRight'

import './styles.scss'
export default function MessengerPage() {
    return (
        <div className="messengerPage">
            <Navigation/>
            <main>
                <div className="containerMesage">
                    <div className='cardMesage'>
                        <CardMessageLeft></CardMessageLeft>
                        <CardMessageRight></CardMessageRight>
                    </div>
                </div>
            </main>
        </div>
    )
}
