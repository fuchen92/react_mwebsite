import React, { Component } from "react";

import "./about.scss";

import HeaderTop from "@/components/header-top/header-top";

export default class About extends Component {
    render () {
        return (
            <div className="about">
                <HeaderTop />
            </div>
        )
    }
}