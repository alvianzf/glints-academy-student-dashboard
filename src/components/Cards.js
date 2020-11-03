import React from 'react'
import { Link } from "react-router-dom"

export default function Cards({text, to, icon}) {
    return (
        <Link to={to}>
            <div className="card">
                <i className={`fa fa-${icon}`}></i>
                <span>{text}</span>
                <style>
                    {`
                        .fa {
                            font-size: 4em;
                        }

                        span {
                            padding: 2em 2em 0;
                        }
                    `}
                </style>
            </div>
        </Link>
    )
}
