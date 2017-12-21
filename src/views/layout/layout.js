import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"

import "./laout.scss"

import Home from "@/views/home/home"
import Channel from "@/views/channel/channel"
import Article from "@/views/article/article"
import About from "@/views/about/about"
import Join from "@/views/join/join"
import Contact from "@/views/contact/contact"

import AppFooter from "@/components/app-footer/app-footer"

export default class Layout extends Component {
	render () {
		return (
			<div className="main">
				<Switch>
					<Route exact path="/" component={ Home }></Route>
					<Route path="/channel/:id" component={ Channel }></Route>
					<Route path="/article/:id" component={ Article }></Route>
					<Route path="/about" component={ About }></Route>
					<Route path="/join" component={ Join }></Route>
					<Route path="/contact" component={ Contact }></Route>
				</Switch>
				<AppFooter />
			</div>
		)
	}
}
