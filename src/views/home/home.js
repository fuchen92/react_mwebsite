import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./home.scss";

import AppHeader from "@/components/app-header/app-header";
import AppMenu from "@/components/app-menu/app-menu";
import SiderbarCategory from "@/components/siderbar-category/siderbar-category";
import SiderbarSearch from "@/components/siderbar-search/siderbar-search";
import Subscribe from "@/components/subscribe/subscribe"

import ListDefault from "@/components/list-default/list-default"

export default class Home extends Component {
	constructor (props) {
		super(props)
	}
	render () {
		return (
			<div className="home-layout">
				<AppHeader></AppHeader>
				<AppMenu></AppMenu>
				<SiderbarCategory></SiderbarCategory>
				<SiderbarSearch></SiderbarSearch>
				<ListDefault></ListDefault>
				<Subscribe></Subscribe>
			</div>
		)
	}
}
