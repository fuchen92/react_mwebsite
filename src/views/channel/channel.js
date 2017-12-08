import React, { Component } from "react"

import AppHeader from "@/components/app-header/app-header";
import AppMenu from "@/components/app-menu/app-menu";
import SiderbarCategory from "@/components/siderbar-category/siderbar-category";
import SiderbarSearch from "@/components/siderbar-search/siderbar-search";

export default class Channel extends Component {
	render () {
		return (
			<div className="channel-component">
				<AppHeader></AppHeader>
				<AppMenu></AppMenu>
				<SiderbarCategory></SiderbarCategory>
				<SiderbarSearch></SiderbarSearch>
			</div>
		)
	}
}
