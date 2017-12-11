import React, { Component } from "react";

import Banner from "@/components/banner/banner";
import NewsCategory from "@/components/news-category/news-category";
import Carousel from "@/components/carousel/carousel";

export default class ListDefault extends Component {
	constructor (props) {
		super(props)

		this.state = {
			newsCategory: {
				link: "",
				type: "编辑推荐",
				moretext: "更多>>"
			},
			newsCategoryTwo: {
				link: "",
				type: "最新资讯",
				moretext: ""
			},
			newsCategoryThree: {
				link: "",
				type: "近期活动",
				moretext: "更多>>"
			},
			carouselList: [
				{
					img: require("../../assets/carousel-1.jpg"),
					link: "",
					title: "“你收到一条好友请求”",
					time: "2017-10-11"
				},
				{
					img: require("../../assets/carousel-2.jpg"),
					link: "",
					title: "增值业务，是金牛还是鸡肋？",
					time: "2017-10-11"
				},
				{
					img: require("../../assets/carousel-3.jpg"),
					link: "",
					title: "伊斯坦布尔新机场将部署SITA技术实现100%行李追踪",
					time: "2017-10-10"
				},
				{
					img: require("../../assets/carousel-4.jpg"),
					link: "",
					title: "首个民宿国家行业标准生效　但短租仍处于灰色地带",
					time: "2017-10-10"
				}
			],
		}
	}
	render () {
		return (
			<div className="listDefault-component container">
				<Banner />
				<NewsCategory newsCategory={ this.state.newsCategory } />
				<Carousel carouselList={ this.state.carouselList } propclass="carousel-one" advertise={
					// <div className="advertise">advertise</div>
					null
				}>
				</Carousel>
				这是 listdefault 组件
			</div>
		)
	}
}
