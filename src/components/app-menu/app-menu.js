import React from "react";
import { NavLink } from "react-router-dom";
import "./app-menu.scss";

export default class AppMenu extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			menuList: [
				{ link: "/", text: "首页" },
				{ link: "/channel/1", text: "在线旅游" },
				{ link: "/channel/2", text: "酒店" },
				{ link: "/channel/3", text: "航空公司" },
				{ link: "/channel/4", text: "出入境及目的地" },
				{ link: "/channel/5", text: "投资并购" },
				{ link: "/channel/6", text: "旅游分销商" },
				{ link: "/channel/7", text: "旅游科技" },
				{ link: "/channel/8", text: "旅游分销系统" },
				{ link: "/channel/9", text: "商务及奖励旅游" },
				{ link: "/channel/10", text: "邮轮" },
				{ link: "/channel/11", text: "租车" },
				{ link: "/channel/12", text: "机场" },
				{ link: "/channel/13", text: "高铁" },
				{ link: "/channel/14", text: "推荐" },
				{ link: "/channel/15", text: "评论" },
				{ link: "/channel/16", text: "译讯" },
				{ link: "/channel/17", text: "创业" },
				{ link: "/channel/18", text: "精选" },
				{ link: "/channel/19", text: "企业新闻" }
			]
		}
	}
	render () {
		return (
			<div className="nav-menu">
				<div className="container">
					<ul className="menu-list">
						{
							this.state.menuList.map((item, index) => {
								return <li className="menu-item" key={ index }>
									<NavLink className="menu-link" activeClassName="menu-active" to={ item.link } exact>{ item.text }</NavLink>
								</li>
							})
						}
					</ul>
				</div>
			</div>
		)
	}
}
