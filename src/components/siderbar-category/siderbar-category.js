import React from "react";
import "./siderbar-category.scss";

export default class SiderbarCategory extends React.Component {
	static defaultProps = {
		categoryList: [
			{
				name: "活动",
				subcategory: [
					{
						link: "",
						icon: "./assets/icons/icon-3a.png",
						text: "查看全年活动",
						className: "c1"
					},
					{
						link: "",
						icon: "./assets/icons/icon-3b.png",
						text: "购买活动联票",
						className: "c2"
					}
				]
			},
			{
				name: "招聘",
				subcategory: [
					{
						link: "",
						icon: "./assets/icons/icon-4a.png",
						text: "免费发布招聘信息",
						className: "d1"
					},
					{
						link: "/job",
						icon: "./assets/icons/icon-4b.png",
						text: "查看最新工作机会",
						className: "d2"
					}
				]
			},
			{
				name: "营销",
				subcategory: [
					{
						link: "",
						icon: "./assets/icons/icon-5a.png",
						text: "精准营销服务",
						className: "e1"
					},
					{
						link: "",
						icon: "./assets/icons/icon-5b.png",
						text: "举办在线讲堂",
						className: "e2"
					}
				]
			},
			{
				name: "China Travel News",
				subcategory: [
					{
						link: "",
						icon: "./assets/icons/icon-6a.png",
						text: "China",
						className: "f1"
					},
					{
						link: "",
						icon: "./assets/icons/icon-6b.png",
						text: "International",
						className: "f2"
					}
				]
			}
		]
	};
	render () {
		return (
			<div className="siderbar siderbar-category">
				<div className="container">
					<div className="close-siderbar">×</div>
					<div className="category-list-container">
						<div className="category-list">
							<h3 className="category-title">新闻</h3>
							<div className="category-group">
								<div className="category-item lt">
									<a className="category-link" href="/channel/14">
										<span className="category-icon a1"></span>
										<span className="category-name">编辑推荐</span>
									</a>
								</div>
								<div className="category-item lt">
									<a className="category-link" href="/channel/15">
										<span className="category-icon a2"></span>
										<span className="category-name">评论</span>
									</a>
								</div>
							</div>
							<div className="category-group">
								<div className="category-item lt">
									<a className="category-link" href="/channel/16">
										<span className="category-icon a3"></span>
										<span className="category-name">译讯</span>
									</a>
								</div>
								<div className="category-item lt">
									<a className="category-link" href="/channel/17">
										<span className="category-icon a4"></span>
										<span className="category-name">创业</span>
									</a>
								</div>
							</div>
							<div className="category-group">
								<div className="category-item lt">
									<a className="category-link" href="/channel/18">
										<span className="category-icon a5"></span>
										<span className="category-name">精选</span>
									</a>
								</div>
							</div>
							<div className="divide"></div>
							<div className="category-group">
								<div className="category-item lt">
									<a className="category-link" href="/channel/1">
										<span className="category-icon b1"></span>
										<span className="category-name">在线旅游</span>
									</a>
								</div>
								<div className="category-item lt newline">
									<a className="category-link" href="/channel/2">
										<span className="category-icon b2"></span>
										<span className="category-name">酒店</span>
									</a>
								</div>
							</div>
							<div className="category-group">
								<div className="category-item lt">
									<a className="category-link" href="/channel/3">
										<span className="category-icon b3"></span>
										<span className="category-name">航空公司</span>
									</a>
								</div>
								<div className="category-item lt newline">
									<a className="category-link" href="/channel/4">
										<span className="category-icon b4"></span>
										<span className="category-name">出入境及目的地</span>
									</a>
								</div>
							</div>
							<div className="category-group">
								<div className="category-item lt">
									<a className="category-link" href="/channel/5">
										<span className="category-icon b5"></span>
										<span className="category-name">投资并购</span>
									</a>
								</div>
								<div className="category-item lt newline">
									<a className="category-link" href="/channel/6">
										<span className="category-icon b6"></span>
										<span className="category-name">旅游分销商</span>
									</a>
								</div>
							</div>
							<div className="category-group">
								<div className="category-item lt">
									<a className="category-link" href="/channel/7">
										<span className="category-icon b7"></span>
										<span className="category-name">旅游科技</span>
									</a>
								</div>
								<div className="category-item lt newline">
									<a className="category-link" href="/channel/8">
										<span className="category-icon b8"></span>
										<span className="category-name">旅游分销系统</span>
									</a>
								</div>
							</div>
							<div className="category-group">
								<div className="category-item lt">
									<a className="category-link" href="/channel/10">
										<span className="category-icon b9"></span>
										<span className="category-name">邮轮</span>
									</a>
								</div>
								<div className="category-item lt newline">
									<a className="category-link" href="/channel/9">
										<span className="category-icon b10"></span>
										<span className="category-name">商务及奖励旅游</span>
									</a>
								</div>
							</div>
							<div className="category-group">
								<div className="category-item lt">
									<a className="category-link" href="/channel/11">
										<span className="category-icon b11"></span>
										<span className="category-name">租车</span>
									</a>
								</div>
								<div className="category-item lt newline">
									<a className="category-link" href="/channel/12">
										<span className="category-icon b12"></span>
										<span className="category-name">机场</span>
									</a>
								</div>
							</div>
							<div className="category-group">
								<div className="category-item lt">
									<a className="category-link" href="/channel/13">
										<span className="category-icon b13"></span>
										<span className="category-name">高铁</span>
									</a>
								</div>
								<div className="category-item lt newline">
									<a className="category-link" href="/channel/19">
										<span className="category-icon b14"></span>
										<span className="category-name">企业新闻</span>
									</a>
								</div>
							</div>
						</div>
						{
							this.props.categoryList.map((category, index) => {
								return <div className="category-list" key={ category.name }>
									<h3 className="category-title">{ category.name }</h3>
									{
										category.subcategory.map((subcategory, idx) => {
											return <div className="category-group" key={ subcategory.text }>
												<div className="category-item lt only-contain-one">
													<a className="category-link" href={ subcategory.link }>
														<span className={ "category-icon" + " " + subcategory.className }></span>
														<span className="category-name">{ subcategory.text }</span>
													</a>
												</div>
											</div>
										})
									}
								</div>
							})
						}
					</div>
				</div>
			</div>
		)
	}
}
