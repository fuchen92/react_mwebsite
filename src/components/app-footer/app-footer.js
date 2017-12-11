import React from "react"
import { Link } from "react-router-dom"

import footerLogo from "@/assets/footer-logo.png"
import "./app-footer.scss"

export default class AppFooter extends React.Component {
	render () {
		return (
			<div className="footer">
				<div className="container">
					<div className="footer-logo-container">
						<img className="footer-logo" src={ footerLogo } alt="footerlogo" />
					</div>
					<div className="footer-info">
						<div className="footer-links">
							<Link to="/about" className="footer-link">
								关于我们
								<b></b>
							</Link>
							<Link to="/join" className="footer-link">
								加入我们
								<b></b>
							</Link>
							<Link to="/contact" className="footer-link">
								联系我们
							</Link>
						</div>
						<p>©2006-2017 浮尘版权所有</p>
					</div>
				</div>
			</div>
		)
	}
}
