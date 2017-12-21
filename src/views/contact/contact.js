import React, { Component } from "react";

import bannerText from "@/assets/contact-banner-text.png";
import "./contact.scss";

import HeaderTop from "@/components/header-top/header-top";

export default class Contact extends Component {
	render () {
		return (
			<div className="contact">
				<HeaderTop />
				<div className="contact-banner">
					<div className="banner-title">
						<img className="banner-img" src={ bannerText } alt="" />
					</div>
					<p className="banner-text">报道、合作、招人、应聘、反馈，您都可以在这里找到我们。</p>
				</div>
				<div className="provide-service">
					<div className="container">
						<div className="provide-list">
							<h3 className="provide-title">投稿爆料/寻求报道</h3>
							<p className="provide-description">希望在习大大分享您的真知灼见？或希望我们报道您的公司或产品？请联系</p>
							<p className="tel-email">（86）20 9999 9999 或 <a className="email-link" href="" >fuchen@qq.com</a></p>
						</div>
						<div className="provide-list">
							<h3 className="provide-title">投放广告/赞助活动</h3>
							<p className="provide-description">希望借助习大大提升品牌影响力，挖掘更多合作伙伴？请联系</p>
							<p className="tel-email">（86）20 9999 9999 或 <a className="email-link" href="">fuchen@qq.com</a>。</p>
						</div>
						<div className="provide-list">
							<h3 className="provide-title">媒体合作</h3>
							<p className="provide-description">希望成为习大大或旗下活动的媒体合作伙伴？请联系</p>
							<p className="tel-email">（86）20 9999 9999 或 <a className="email-link" href="">fuchen@qq.com</a>。</p>
						</div>
						<div className="provide-list">
							<h3 className="provide-title">微招聘服务</h3>
							<p className="provide-description">希望在习大大微招聘中发布招聘信息？或希望申请微招聘某项职位？请联系</p>
							<p className="tel-email">（86）20 9999 9999 或 <a className="email-link" href="">fuchen@qq.com</a>。</p>
						</div>
						<div className="provide-list">
							<h3 className="provide-title">加入习大大</h3>
							<p className="provide-description">希望成为习大大团队一员？请联系</p>
							<p className="tel-email">（86）20 9999 9999 或 <a className="email-link" href="">fuchen@qq.com</a>。</p>
						</div>
						<div className="provide-list">
							<h3 className="provide-title">吐槽产品/反馈意见</h3>
							<p className="provide-description">使用习大大产品时遇到问题？对产品有更好的完善意见？请联系</p>
							<p className="tel-email">（86）20 9999 9999 转 802 或 <a className="email-link" href="">fuchen@qq.com</a>。</p>
						</div>
					</div>
				</div>
				<div className="address-wrapper">
					<div className="container">
						<h3 className="address-title">我们在这里工作</h3>
						<div className="divide-line"></div>
						<p className="address-content">
							北京 天安门广场 人民大会堂 北京 天安门广场 人民大会堂北京
						</p>
					</div>
				</div>
			</div>
		)
	}
}
