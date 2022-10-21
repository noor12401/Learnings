import React from "react"
import "../App.css"
import logo from "../logo.png"

function Header () {
    return (
        <header className="nav-header">
            <img src={logo} className="nav-logo"/>
            <h3>ReactFacts</h3>
            <h4>React Project - 1</h4>
        </header>
    )
}

export default Header