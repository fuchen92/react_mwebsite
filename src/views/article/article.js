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
			article: {
				keywords: []
			},
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

	/**
	 * 此处记录一个问题：
	 * 	初始 state 某个字段一开始定义为空，异步加载数据设置此字段
	 * 	render 方法中，如果此字段下结构有多层，初始渲染会直接报错
	 * 	必须在此字段中定义返回加载数据的结构中一样的字段
	 *
	 * 	上面以 article 为例，article 的内容为异步加载的数据
	 * 		article 下面有一个 keywords 字段为一个数组，如果初始不定义一个相同 keywords 字段名，则在 render 方法中直接报错
	 *
	 * 	article ｛
	 * 		// 如果此处不设置一个 keywords 同名字段（就是和请求返回的数据结构中有一个相同的字段），在 render 方法中使用 keywords 会直接报错		false
	 * 	｝
	 *
	 * 	article ｛
	 * 		keywords：【】		须定义一个 keyworkds 字段，和请求返回的数据结构中同名的字段一样			right
	 * 	｝
	 *
	 */

	componentWillMount () {
		axios.get("http://localhost:3001/api/article")
			.then(req => {
				this.setState({
					article: req.data
				})
			})
	}


	render () {
		const { article, advertise, interestList } = this.state;
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
										article.keywords.map( (kw, index) => {
											// <Link classNameName="label-item lt" to={ kw.link }>{ kw.keyword }</Link>
											return <div>{ kw.kword }</div>
										})
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
