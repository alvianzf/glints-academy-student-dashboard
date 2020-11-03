import React from 'react'
import { Link, useLocation } from "react-router-dom"
import classnames from "classnames"

export default function Navbar() {

    const location = useLocation().pathname
    console.log(location)
    return (
        <div className="nav-bar">
            <Link to="/">
                <span className="title">Glints Academy</span>
            </Link>

            <div className="nav-container">
                <div className={classnames("nav-item", {"active":  location === "/"})}>
                    <Link to="/">
                        Home
                    </Link>
                </div>
                <div className={classnames("nav-item", {"active":  location === "/survey"})}>
                    <Link to="/survey">
                        Surveys
                    </Link>
                </div>
                <div className={classnames("nav-item", {"active":  location === "/request-form"})}>
                    <Link to="/request-form">
                        Request Form
                    </Link>
                </div>
            </div>
        <style>
            {`
                .nav-bar {
                    display: flex;
                    justify-content: space-between;
                }
                .nav-container {
                    min-width: 30%;
                    padding: 0 1em 0 0;
                    display: flex;
                    justify-content: space-around;
                }
                .title {
                    font-size: 2em;
                    font-weight: bold;
                }
                .nav-item {
                    font-size: 1.5em;
                }

                .active {
                    font-weight: bold;
                    border-bottom: 7px solid yellow;
                }
            `}
        </style>
        </div>
    )
}
