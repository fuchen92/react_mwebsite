import React from "react";
import "./siderbar-search.scss";

export default class SiderbarSearch extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			isShowSearch: false
		}
	}

	render () {
		var showSearchClass = this.state.isShowSearch ? "siderbar-search-active" : "";
		return (
			<div className={ `siderbar siderbar-search ${ showSearchClass }` }>
				<div className="container">
					<div className="search-bar">
						<div className="search-arrow lt"></div>
						<div className="search-btn rt">搜索</div>
						<div className="search-input-container">
							<input className="search-input" type="text" id="searchInput" placeholder="请输入关键字（搜索功能未实现）" />
						</div>
					</div>
				</div>
			</div>
		)
	}
}
