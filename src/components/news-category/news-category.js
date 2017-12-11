import React, { Component } from "react";

import "./news-category.scss";

export default class NewsCategory extends Component {
	render () {
		const { link, type, moretext } = this.props.newsCategory;

		return (
			<div className="news-list-category">
				<h3 className="news-category-title lt">
					<a href={ link }>{ type }</a>
				</h3>
				{
					(moretext.length > 0 || moretext !== null) &&
					<p className="more-news rt" >
						<a href={ link }>{ moretext }</a>
					</p>
				}
			</div>
		)
	}
}
