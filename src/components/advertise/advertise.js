import React, { Component } from "react";

import "./advertise.scss";

export default class Advertise extends Component {
	render () {
		const { id, link, advimg } = this.props.advertise;

		if (advimg !== " " || advimg.length !== 0) {
			return (
				<div id={ id }>
					<div className="advertise">
						<a href={ link }>
							<img src={ advimg } alt={ link } />
						</a>
					</div>
				</div>
			)
		} else {
			return null;
		}
	}
}
