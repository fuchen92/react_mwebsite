import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./header-top.scss";

import sitelogo from "@/assets/site-logo.png";

export default class HeaderTop extends Component {
    constructor (props) {
        super(props)

        this.goback = this.goback.bind(this);
    }
    
    goback () {
        window.history.go(-1)
    }

    render () {
        return (
            <div className="header-top">
                <div className="container">
                    <div className="header-arrow lt" onClick={ this.goback }></div>
                    <h3 className="site-name">
                        <Link to="/">
                            <img className="site-logo" src={ sitelogo } alt="sitelogo" />
                        </Link>
                    </h3>
                </div>
            </div>
        )
    }
}