import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./list-default.scss";

import Banner from "@/components/banner/banner";
import NewsCategory from "@/components/news-category/news-category";
import Carousel from "@/components/carousel/carousel";
import Advertise from "@/components/advertise/advertise";

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
			activityList: [
				{
					img: require("../../assets/recent-5.jpg"),
					link: "",
					title: "2017 人民代表大会1"
				},
				{
					img: require("../../assets/recent-1.jpg"),
					link: "",
					title: "2017 人民代表大会2"
				},
				{
					img: require("../../assets/recent-6.jpg"),
					link: "",
					title: "2017 人民代表大会3"
				}
			],
			advertise: {
				id: "xcode81",
				link: "",
				advimg: require("../../assets/advertise-1.jpg")
			},
			advertise2: {
				id: "xcode82",
				link: "",
				advimg: require("../../assets/advertise-1.jpg")
			},
			newsList: [],
			newsList2: [],
			moreList: []
		}
	}

	componentWillMount () {
		axios.get("http://192.168.1.25:3001/api/news")
			.then(req => {
				this.setState({
					newsList: req.data
				})
			})

		axios.get("http://192.168.1.25:3001/api/news2")
			.then(req => {
				this.setState({
					newsList2: req.data
				})
			})
	}

	render () {
		const { newsCategory,
				newsCategoryTwo,
				newsCategoryThree,
				carouselList,
				activityList,
				advertise,
				advertise2,
				newsList,
				newsList2
			} = this.state;
		return (
			<div className="listDefault-component container">
				<Banner />
				<NewsCategory newsCategory={ newsCategory } />
				<Carousel carouselList={ carouselList } propclass="carousel-one" advertise={
					<Advertise advertise={ advertise } />
				} />
				<div className="news-item-container">
					<NewsCategory newsCategory={ newsCategoryTwo } />
					{
						newsList.map((news, i) => {
							return (
								<div className="news-item" key={ i }>
									<h4 className="news-title">
										<Link to={ news.link }>{ news.title }</Link>
									</h4>
									<div className="times">{ news.time }</div>
									<p className="news-intro">{ news.intro }</p>
								</div>
							)
						})
					}
					<Advertise advertise={ advertise2 } />
					{
						newsList2.map((news, i) => {
							return (
								<div className="news-item" key={ i } style={{ "borderBottom": (i === newsList2.length - 1) ? "0px" : "" }}>
									<h4 className="news-title">
										<Link to={ news.link }>{ news.title }</Link>
									</h4>
									<div className="times">{ news.time }</div>
									<p className="news-intro">{ news.intro }</p>
								</div>
							)
						})
					}
					<NewsCategory newsCategory={ newsCategoryThree } />
					<Carousel carouselList={ activityList } propclass="carousel-two" advertise={ null } />
				</div>
				<div className="more-news-btn" id="readmore">加载更多</div>
			</div>
		)
	}
}
