import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./channel.scss";

import AppHeader from "@/components/app-header/app-header";
import AppMenu from "@/components/app-menu/app-menu";
import SiderbarCategory from "@/components/siderbar-category/siderbar-category";
import SiderbarSearch from "@/components/siderbar-search/siderbar-search";
import Advertise from "@/components/advertise/advertise";

export default class Channel extends Component {
	constructor (props) {
		super(props)

		this.state = {
			channelList: [],
			advertise: {
				id: "xcode83",
				link: "",
				advimg: require("../../assets/advertise-1.jpg")
			}
		}
	}

	componentWillMount () {
		axios.get("http://localhost:3001/api/news")
			.then(req => {
				this.setState({
					channelList: req.data
				})
			})

	}

	render () {
		const { channelList } = this.state;
		return (
			<div className="channel-component">
				<AppHeader></AppHeader>
				<AppMenu></AppMenu>
				<SiderbarCategory></SiderbarCategory>
				<SiderbarSearch></SiderbarSearch>
				<div className="container">
					<div className="channel-lists">
						{
							channelList.map( (channel, index) => {
								return (
									<Fragment key={ channel.title }>
										<div className="channel-item" key={ channel.title }>
											<h4 className="channel-title">
												<Link to={ channel.link }>{ channel.title }</Link>
											</h4>
											<div className="times">{ channel.time }</div>
											<p className="channel-intro">{ channel.intro }</p>
										</div>
										{(index === 2) && <Advertise advertise={ this.state.advertise } key={ index } />}
									</Fragment>
								)
							})
						}
					</div>
					<div className="more-channel-btn" id="readmore">加载更多</div>
				</div>
			</div>
		)
	}
}
