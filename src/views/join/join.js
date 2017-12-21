import React, { Component } from "react";

import Swiper from "swiper";

import bannerText from "@/assets/join-banner-text.png";
import "@/assets/css/swiper-3.4.2.min.css";
import "./join.scss";

import HeaderTop from "@/components/header-top/header-top";

export default class Join extends Component {
	constructor (props) {
		super(props)

		this.state = {
			teamList: [
				require("../../assets/join-1.jpg"),
				require("../../assets/join-2.jpg"),
				require("../../assets/join-3.jpg"),
				require("../../assets/join-4.jpg")
			],
			workList: [
				{
					img: require("../../assets/worktogether/worktogether.jpg"),
					name: "Fuchen",
					text: "不甘平凡，就和 TDer 一起，不断挑战自己的舒适圈！！！"
				},
				{
					img: require("../../assets/worktogether/worktogether.jpg"),
					name: "Fuchen",
					text: "这儿促人向上，充满斗志，期待你的加入 :)"
				},
				{
					img: require("../../assets/worktogether/worktogether.jpg"),
					name: "Fuchen",
					text: "这里年轻并充满活力，和朝气蓬勃的伙伴们一起不断突破、不断创造，在习大大你将发现超乎想象的自己。"
				},
				{
					img: require("../../assets/worktogether/worktogether.jpg"),
					name: "Fuchen",
					text: "看前一小时雷厉风行提方案的人，午休刷着B站傻笑，我时常觉得眩晕。这样一群人偶尔18岁，偶尔48岁。"
				},
				{
					img: require("../../assets/worktogether/worktogether.jpg"),
					name: "Fuchen",
					text: "有一份令人幸福的工作是什么体验？干有理想的活，做有情怀的人。"
				},
				{
					img: require("../../assets/worktogether/worktogether.jpg"),
					name: "Fuchen",
					text: "我们的征途是星辰大海。To be, or not to be. That is the question."
				},
				{
					img: require("../../assets/worktogether/worktogether.jpg"),
					name: "Fuchen",
					text: "你很有逗逼的天分，来和我们一起闯荡江湖。"
				},
				{
					img: require("../../assets/worktogether/worktogether.jpg"),
					name: "Fuchen",
					text: "如果你爱她/他，就让她/他来习大大，因为这里的人专业得让人敬佩；如果你恨她/他，就让她/他来习大大，因为这里的人逗逼得让人无语。"
				},
				{
					img: require("../../assets/worktogether/worktogether.jpg"),
					name: "Fuchen",
					text: "Don't set yourself boundaries. 在习大大，请不要吝啬你的想法，请不要停止思考的步伐。对了，我现在缺一名同桌，一线临窗位，能观蓝天能赏日落，你要不要来？"
				},
				{
					img: require("../../assets/worktogether/worktogether.jpg"),
					name: "Fuchen",
					text: "来让身和心都在路上，我还没观过世界。这里，我世界观的起始。"
				}
			]
		}
	}

	componentDidMount () {
		new Swiper(".team-container", {
			pagination: {
				el: ".swiper-pagination"
			}
		});

		new Swiper(".together-container", {
			spaceBetween: 15,
			slidesPerView: 1.2,
			centeredSlides: true,
			loop: true
		});
	}

	render () {
		const { teamList, workList } = this.state;

		return (
			<div className="join">
				<HeaderTop />
				<div className="join-banner">
					<div className="banner-title">
						<img className="banner-img" src={ bannerText } alt="" />
					</div>
					<p className="banner-text">习大大 是全球领先的旅游商业和科技媒体。我们致力于以独立的新闻态度，关注和报道影响旅游业发展的新趋势、新模式和新科技。</p>
				</div>
				<div className="our-team">
					<div className="container">
						<div className="swiper-container team-container">
							<ul className="swiper-wrapper">
								{
									teamList.map( (team, index) => {
										return (
											<li className="swiper-slide team-item" key={ team }>
												<img className="team-photo" src={ team } alt="" />
											</li>
										)
									})
								}
							</ul>
							<div className="swiper-pagination team-pagination">
								<span className="swiper-pagination-bullet"></span>
								<span className="swiper-pagination-bullet"></span>
								<span className="swiper-pagination-bullet"></span>
								<span className="swiper-pagination-bullet"></span>
							</div>
						</div>
					</div>
				</div>
				<div className="work-together">
					<div className="container">
						<h3 className="work-title">你将与谁一起工作</h3>
						<div className="work-together-wrapper">
							<div className="swiper-container together-container work-together-content">
								<ul className="swiper-wrapper work-together-list">
									{
										workList.map( (work, index) => {
											return (
												<li className="swiper-slide work-together-item" key={ work.text }>
													<div className="work-together-photo">
														<img className="work-together-img" src={ work.img } alt="" />
													</div>
													<h4 className="work-together-name">{ work.name }</h4>
													<p className="welcome-text">{ work.text }</p>
												</li>
											)
										})
									}
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="job">
					<div className="container">
						<h3 className="job-title">我们在找这些小伙伴</h3>
						<div className="job-list">
							<div className="job-item">
								<div className="job-icon job-icon-one"></div>
								<p className="job-name">.NET 工程师</p>
								<div className="job-intro">
									<p className="job-site">1 名, 坐标广州</p>
									<p className="job-description">
										在这里你要做什么：1、根据业务需求编写系统需求和设计文档；2、程序编写及相关测试工作；3、系统后续相关维护、分析工作。
									</p>
									<p className="job-description">我们期望中的你：1、计算机或相关专业专科以上学历，1 年以上网站开发经验；2、精通 C#、.NET MVC 编程，对 .NET FrameWork 有一定的认识；3、熟悉至少一种关系型数据库；4、熟悉软件测试流程，熟悉版本控制管理；5、熟悉 HTML5、JavaScript、jQuery、Ajax 等前端技术；6、具有良好的沟通能力和团队合作精神，勇于接受挑战，对新技术充满激情。</p>
									<p className="job-apply">申请该职位，请将简历发送至<br /><a className="email-link" href="">fuchen@qq.com</a>。
									</p>
								</div>
							</div>
							<div className="job-item">
								<div className="job-icon job-icon-two"></div>
								<p className="job-name">海外新媒体销售</p>
								<div className="job-intro">
									<p className="job-site">1 名, 坐标广州</p>
									<p className="job-description">
										在这里你要做什么，为公司拉动销售，养活小伙伴们。说得具体些，你需要：1、负责开拓海外企业，有针对性的销售我们的产品；2、负责跟进及维护海外客户；保持良好的合作关系；3、负责海外客户反馈，根据市场需求和客户反馈定期提出产品反馈意见。
									</p>
									<p className="job-description">我们期望中的你：1、出色的英语水平（专八 / BEC 高级）；2、勇于拓展新领域客户，善长分析思考，善于自我学习、提升；3、主观能动性高，出色的销售能力，抗压能力强；4、有 1 年以上销售或电话销售经验；5、心态积极乐观，正能量满满。</p>
									<p className="job-apply">申请该职位，请将简历发送至<br /><a className="email-link" href="">fuchen@qq.com</a>。
									</p>
								</div>
							</div>
							<div className="job-item">
								<div className="job-icon job-icon-three"></div>
								<p className="job-name">新媒体销售</p>
								<div className="job-intro">
									<p className="job-site">1 名, 坐标广州</p>
									<p className="job-description">
										在这里你要做什么：1、独立负责开拓适合 “活动联票” 产品线的新客户；2、负责制定 “活动联票” 产品线的销售策略、业绩规划；3、根据客户对 “活动联票” 产品线的反馈和建议，定期反馈产品的修改建议。绝对加分项：优秀的英语能力（如 BEC 中级及以上）。
									</p>
									<p className="job-description">我们期望中的你：1、让人拍手叫好的销售主动性；2、善长分析思考，善于自我学习、提升；3、1 年以上电话销售经验；4、心态积极乐观，正能量满满。</p>
									<p className="job-apply">申请该职位，请将简历发送至<br /><a className="email-link" href="">fuchen@qq.com</a>。
									</p>
								</div>
							</div>
						</div>
						<p className="job-tips">
							没有发现合适的岗位？自定义一个吧！把你能够胜任的工作内容告诉我们。如果合适，我们会认真考虑。
						</p>
					</div>
				</div>
			</div>
		)
	}
}
