import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./article.scss";

import HeaderTop from "@/components/header-top/header-top";
import Advertise from "@/components/advertise/advertise";
import Interest from "@/components/interest/interest";

export default class Article extends Component {
	constructor (props) {
		super(props)

		this.state = {
			article: {},
			advertise: {
				id: "xcode84",
				link: "",
				img: require("../../assets/advertise-1.jpg")
			},
			interestList: [
				{
					img: require("../../assets/interest-1.jpg"),
					link: "",
					time: "2017-10-24",
					title: "Airbnb中国区负责人上任仅4个月离职　CSO接任"
				},
				{
					img: require("../../assets/interest-2.jpg"),
					link: "",
					time: "2017-10-23",
					title: "从竞争到抱团　资本追捧下谁能成为短租平台独角兽？"
				},
				{
					img: require("../../assets/interest-3.jpg"),
					link: "",
					time: "2017-10-17",
					title: "旅游行业公司为何连续九年未上榜全球100强品牌？"
				},
				{
					img: require("../../assets/interest-4.jpg"),
					link: "",
					time: "2017-10-17",
					title: "万豪Moxy时尚酒店落户曼哈顿，直指Airbnb"
				}
			],
			abc: ""
		}

	}

	componentWillMount () {
		axios.get("http://localhost:3001/api/article")
			.then(req => {
				console.log("33333")
				this.setState({
					article: req.data
				})
				// this.setState( (prevState, data) => {
				// 	console.log(data)
				// 	// article: req.data
				// })
			})
		console.log("111111")
	}

	componentWillReceiveProps (nextProps) {
		console.log(nextProps)
	}

	shouldComponentUpdate (nextProps, nextState) {
		console.log(nextProps)
		console.log(nextState)
		console.log("22222")
		return false
	}

	render () {
		console.log("4444444")
		const { article, advertise, interestList } = this.state;
		const articleKeyWords = article.keywords;
		return (
			<div className="article">
				<HeaderTop />
				<div className="main-content">
					<div className="content-wrapper">
						<div className="container">
							<h3 className="article-title">{ article.title }</h3>
							<div className="article-info">
								<p className="article-from">
									来源：{ article.source }
									<b></b>
								</p>
								<p className="article-time">{ article.time }</p>
							</div>
							<div className="article-desc">{ article.desc }</div>
							<div className="article-content" dangerouslySetInnerHTML={ { __html: article.content } }></div>
							<div className="article-detail-item">
								<div className="label-list">
									{
										// articleKeyWords[0].kword
										// articleKeyWords.map( (kw, index) => {
										// 	<Link classNameName="label-item lt" to={ kw.link }>{ kw.keyword }</Link>
										// })
										this.state.abc
									}
								</div>
								<div className="article-attention">
									© 以商业目的使用习大大拥有版权的内容，须经过习大大书面授权。非商业目的使用，请遵循
									<a className="article-link" href="">CC BY-NC4.0</a>
								</div>
							</div>
							<Advertise className="article-advertise" advertise={ advertise }></Advertise>
						</div>
					</div>
					<Interest interestList={ interestList } />
				</div>
			</div>
		)
	}
}
