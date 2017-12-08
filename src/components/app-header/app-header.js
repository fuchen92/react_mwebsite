import React from "react";
import { NavLink } from 'react-router-dom';
import sitelogo from "@/assets/site-logo.png";
import "./app-header.scss";

export default class AppHeader extends React.Component {
	render () {
		return (
			<nav className="nav">
				<div className="container">
					<div className="hamburger-menu lt">
						<div className="hamburger-item hamburger-top"></div>
						<div className="hamburger-item hamburger-middle"></div>
						<div className="hamburger-item hamburger-bottom"></div>
					</div>
					<div className="header-search rt"></div>
					<h3 className="site-name">
						<NavLink to="/">
							<img className="site-logo" src={ sitelogo } />
						</NavLink>
					</h3>
				</div>
			</nav>
		)
	}
}
