import React, { Component } from "react";

import "./banner.scss";

import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";

export default class Banner extends Component {
	constructor (props) {
		super(props)

		this.state = {
			bannerList: [
				{
					img: banner1,
					title: "游客需求裂变，海外目的地营销如何创新？",
					link: ""
				},
				{
					img: banner2,
					title: "Airbnb讲了一个好故事　那爱彼迎呢？",
					link: ""
				},
				{
					img: banner3,
					title: "电视广告在当今的旅游营销中如何发挥作用？",
					link: ""
				}
			]
		}
	}
	render () {
		return (
			<div className="banner">
				<div className="banner-items">
					{
						this.state.bannerList.map(banner => {
							return <div className="banner-item" key={ banner.title }>
								<a href={ banner.link }>
									<img src={ banner.img } alt={ banner.title } />
								</a>
								<div className="banner-item-info">
									<p className="banner-item-title">
										<a href={ banner.link }>{ banner.title }</a>
									</p>
								</div>
							</div>
						})
					}
				</div>
			</div>
		)
	}
}
