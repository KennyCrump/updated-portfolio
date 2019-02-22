import React from 'react'

import Footer from './Footer'
import profile from '../assets/images/profile.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={profile} alt="" /></a>
                    <h1><strong>Kenny Crump </strong><br />
                    Full-Stack Web Developer <br />
                    Provo, UT</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
