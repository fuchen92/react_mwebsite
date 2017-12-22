import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./interest.scss";

export default class Interest extends Component {
	render () {
		const { interestList } = this.props;
		return (
			<div className="interest">
				<div className="container">
					<h3 className="interest-title">您还可能感兴趣的文章</h3>
					{
						interestList.map( (interest) => {
							return (
								<div className="interest-list" key={ interest.title }>
									<div className="interest-img-container lt">
										<img src={ interest.img } alt="" />
									</div>
									<div className="interest-content rt">
										<h4 className="interest-article">
											<Link to={ interest.link }>{ interest.title }</Link>
										</h4>
										<div className="keywords-container">
											<p className="interest-time">{ interest.time }</p>
										</div>
									</div>
								</div>
							)
						})
					}
				</div>
			</div>
		)
	}
}
