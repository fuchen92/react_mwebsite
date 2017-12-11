import React, { Component } from "react";

import Banner from "@/components/banner/banner";

export default class ListDefault extends Component {
	render () {
		return (
			<div className="listDefault-component container">
				<Banner />
				这是 listdefault 组件
			</div>
		)
	}
}
