import React from 'react'
import Cards from '../../components/Cards'
import Navigation from '../../components/Navigation'
import Sidebar from '../../components/Sidebar'
import './styles.scss'

export default function HomePage() {
    
    return (
        <div className="homePage">
            <Navigation/>
            <main>
                <div className="container">
                    <Cards/>
                    <Sidebar/>
                </div>
            </main>
        </div>
    )
}
