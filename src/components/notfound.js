import React from 'react'
import { Link } from "react-router-dom"

export default function notfound() {
    return (
        <div className="main" >
            <h1>Sorry, the page you are looking for is not available</h1>
            <Link to="/">
                <h3 style={{color: "red"}}>Click to go home</h3>
            </Link>
        </div>
    )
}
