import React, { Component } from "react";

import Banner from "@/components/banner/banner";
import NewsCategory from "@/components/news-category/news-category";

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
		}
	}
	render () {
		return (
			<div className="listDefault-component container">
				<Banner />
				<NewsCategory newsCategory={ this.state.newsCategory } />
				这是 listdefault 组件
			</div>
		)
	}
}
