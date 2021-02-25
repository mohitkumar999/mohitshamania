import React from 'react'
import Header from './Header'

function Navbar() {

    return (
        <div>
            <nav className="nav-extended">
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Mohit</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="sass.html">Skills</a></li>
                        <li><a href="badges.html">Projects</a></li>
                        <li><a href="collapsible.html">Contact US</a></li>
                    </ul>
                </div>
                <div className="nav-content">
                    <ul id="tabs-swipe-demo" class="tabs">
                        <li class="tab col s3"><a href="#test-swipe-1">Test 1</a></li>
                        <li class="tab col s3"><a class="active" href="#test-swipe-2">Test 2</a></li>
                        <li class="tab col s3"><a href="#test-swipe-3">Test 3</a></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><a href="sass.html">Skills</a></li>
                <li><a href="badges.html">Projects</a></li>
                <li><a href="collapsible.html">Contact US</a></li>
            </ul>
       
                < div id="test-swipe-1" class="col s12 blue" ><Header/></div >
                <div id="test-swipe-2" class="col s12 red"><Header/></div>
                <div id="test-swipe-3" class="col s12 green"><Header/></div>
        
        </div>
    )
}

export default Navbar


