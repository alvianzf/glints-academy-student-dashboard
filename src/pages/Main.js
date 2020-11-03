import React, { Component } from 'react'
import Cards from '../components/Cards'

export default class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="page-title">Hi!</div>
                <div className="page-subtitle">what do you want to do?</div>

                <div className="card-container">
                    <div className="card-wrapper">
                        <Cards text="Fill in a survey" to="survey" icon="file-text-o"/>
                        <Cards text="Ask for IT help" to="request-form" icon="user-o"/>
                        <Cards text="See schedules" to="schedules" icon="calendar"/>
                        <Cards text="As administrator" to="login" icon="superpowers"/>
                    </div>
                </div>
            </div>
        )
    }
}
