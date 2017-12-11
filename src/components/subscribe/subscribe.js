import React, { Component } from "react";
import subscribeImg from "@/assets/subscribe.png";
import "./subscribe.scss";

export default class Subscribe extends Component {
	render () {
		return (
			<div className="subscribe">
				<div className="container">
					<div className="subscribe-title-container">
						<span className="subscribe-sign">
							<img src={ subscribeImg } alt="subscribe" />
						</span>
						<span className="subscribe-title">&nbsp;订阅邮件</span>
					</div>
					<p className="subscribe-desc">30,000+ 旅游业精英每周必读的行业要闻精粹，每周二发至您的邮箱</p>
					<div className="subscribe-input-container">
						<input className="subscribe-input" type="text" placeholder="请输入您的邮箱" />
						<p className="tips">您的邮箱格式不正确，请检查</p>
					</div>
					<div id="subscribeBtn" className="subscribe-btn">订阅邮件</div>
				</div>
			</div>
		)
	}
}
