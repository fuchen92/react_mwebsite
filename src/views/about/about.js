import React, { Component } from "react";
import Swiper from "swiper";

import bannerText from "@/assets/about-banner-text.png";
import aboutpnga from "@/assets/about-a.png";
import aboutpngb from "@/assets/about-b.png";
import "@/assets/css/swiper-3.4.2.min.css";
import "./about.scss";

import HeaderTop from "@/components/header-top/header-top";

export default class About extends Component {
    constructor (props) {
        super(props)

        this.state = {
            productList: [
				{
					link: "",
					img: require("../../assets/logos/about-product_1.png"),
					intro: "中文资讯平台，通过网站、微信、邮件等多渠道传递最有价值的旅游业资讯。"
				},
				{
					link: "",
					img: require("../../assets/logos/about-product_2.png"),
					intro: "英文资讯平台，为海外旅游业者提供最具价值的中国旅游业资讯信息。"
				},
				{
					link: "",
					img: require("../../assets/logos/about-product_3.png"),
					intro: "每年定期举办的峰会、开放日、讲堂、竞赛、培训会等活动，满足旅游业不同行业及职能层级嘉宾对细分话题及精准交流合作的需求。"
				},
				{
					link: "",
					img: require("../../assets/logos/about-product_4.png"),
					intro: "为旅游业内企业招人，业内人士求职的招聘服务平台。"
				},
				{
					link: "",
					img: require("../../assets/logos/about-product_5.png"),
					intro: "帮助企业提升品牌影响力，拓展旅游业合作伙伴的整合营销服务。"
				}
			],
			commentList: [
				{
					img: require("../../assets/aboutphotos/worktogether.jpg"),
					intro: "在线旅游无疑是目前国内最具挑战、竞争和故事性的领域之一。更重要的是，它还有着无限的想象空间和趣味。坚持垂直的深度和新闻的品质，聚焦旅游科技和创业孵化，相信习大大，足以产生影响行业的力量。",
					name: "习大大",
					company: "中华人民共和国",
					job: "主席"
				},
				{
					img: require("../../assets/aboutphotos/worktogether.jpg"),
					intro: "习大大，前瞻、深度、中肯，让创新者启发，让决策者明智。",
					name: "习大大",
					company: "中华人民共和国",
					job: "主席"
				},
				{
					img: require("../../assets/aboutphotos/worktogether.jpg"),
					intro: "为旅业提供真正有价值的独立意见，习大大创见未来！",
					name: "习大大",
					company: "中华人民共和国",
					job: "主席"
				},
				{
					img: require("../../assets/aboutphotos/worktogether.jpg"),
					intro: "作为旅游业最炙手可热的领域，在线旅游几乎每个月都会有大事发生，习大大总是能够及时为大家带来关于每件大事的最新资讯和深度报道，希望今后能够继续客观、公正地为各界人士提供新鲜、专业的行业新闻和资讯。",
					name: "习大大",
					company: "中华人民共和国",
					job: "主席"
				},
				{
					img: require("../../assets/aboutphotos/worktogether.jpg"),
					intro: "习大大以专业的视角、专注的精神挖掘行业最新资讯，且颇具前瞻性，在信息过剩的今天，始终走在行业前沿，成为检阅行业发展状况、研究行业发展趋势的平台，同时也是专业人士汇聚交流的信息平台。愿习大大坚持摸索、不断创新，与大众共享价值，为行业发展服务。",
					name: "习大大",
					company: "中华人民共和国",
					job: "主席"
				},
				{
					img: require("../../assets/aboutphotos/worktogether.jpg"),
					intro: "聚行业精英，汇行业智慧，传行业声音，展行业未来！十年风雨探索路，习大大铸就辉煌历程。未来，希望习大大能够持续发挥行业权威媒体的领航作用，并在新的征途中再谱新篇！",
					name: "习大大",
					company: "中华人民共和国",
					job: "主席"
				},
				{
					img: require("../../assets/aboutphotos/worktogether.jpg"),
					intro: "做企业就是做趋势，习大大让我们及时掌握有效资讯，紧跟市场发展，祝习大大越办越精彩！",
					name: "习大大",
					company: "中华人民共和国",
					job: "主席"
				},
				{
					img: require("../../assets/aboutphotos/worktogether.jpg"),
					intro: "一直以来，习大大是我们创业者获取国际国内旅游财经资讯的重要渠道，很多深度的分析报告启发了我们的思维；未来的竞争日益激烈，方生方死，愿习大大给大家更多更及时的能量，成为旅游行业向上的推动力量。",
					name: "习大大",
					company: "中华人民共和国",
					job: "主席"
				}
			],
			partnerList: [
				[
                    require("../../assets/logos/ctrip.png"),
                    require("../../assets/logos/fliggy.png"),
                    require("../../assets/logos/xinmeida.png")
                ],
				[
                    require("../../assets/logos/ly.png"),
                    require("../../assets/logos/tuniu.png"),
                    require("../../assets/logos/lvmama.png")
                ],
				[
                    require("../../assets/logos/huazhu.png"),
                    require("../../assets/logos/homeinns.png"),
                    require("../../assets/logos/hnair.png")
                ],
				[
                    require("../../assets/logos/ceair.png"),
                    require("../../assets/logos/plateno.png"),
                    require("../../assets/logos/sohoto.png")
                ],
				[
                    require("../../assets/logos/amadeus.png"),
                    require("../../assets/logos/travelport.png"),
                    require("../../assets/logos/sabre.png")
                ],
				[
                    require("../../assets/logos/rentalcars.png"),
                    require("../../assets/logos/oag.png"),
                    require("../../assets/logos/bestwestern.png")
                ],
				[
                    require("../../assets/logos/baidu.png"),
                    require("../../assets/logos/tencent.png"),
                    require("../../assets/logos/google.png")
                ],
				[
                    require("../../assets/logos/facebook.png"),
                    require("../../assets/logos/yaduo.png"),
                    require("../../assets/logos/shiji.png")
                ],
				[
                    require("../../assets/logos/qyer.png"),
                    require("../../assets/logos/tripadvisor.png"),
                    require("../../assets/logos/zuche.png")
                ],
				[
                    require("../../assets/logos/talkingdata.png"),
                    require("../../assets/logos/worldpay.png"),
                    require("../../assets/logos/social-touch.png")
                ]
			]
        }
    }

    componentDidMount () {
        new Swiper(".swiper-container", {
			pagination: {
                el: ".swiper-pagination"
            }
		});
    }

    render () {
        const { productList, commentList, partnerList } = this.state;
        return (
            <div className="about">
                <HeaderTop />
                <div className="about-banner">
                    <div className="banner-title">
                        <img className="banner-img" src={ bannerText } alt="banner" />
                    </div>
                    <p className="banner-text">习大大 是全球领先的旅游商业和科技媒体。我们致力于以独立的新闻态度，关注和报道影响旅游业发展的新趋势、新模式和新科技。</p>
                </div>
                <div className="slogan">
                    <div className="container">
                        <div className="comma-container">
                            <img className="comma-a lt" src={ aboutpnga } alt="" />
                        </div>
                        <div className="slogan-description">
                            <p>我们的口号是什么？</p>
                            <p>搞事</p>
                            <p>搞事</p>
                            <p>搞事</p>
                            <p>我们的口号是什么？</p>
                            <p>搞事</p>
                            <p>搞事</p>
                            <p>搞事</p>
                            <p>搞事</p>
                        </div>
                        <div className="comma-container">
                            <img className="comma-b rt" src={ aboutpngb } alt="" />
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="container">
                        <h3 className="slide-title">我们的产品</h3>
                        <div className="swiper-container slide-container">
                            <ul className="swiper-wrapper">
                                {
                                    productList.map( (product, index) => {
                                        return (
                                            <li className="swiper-slide" key={ index }>
                                                <div className="slide-logo-container">
                                                    <a href={ product.link }>
                                                        <i className="slide-logo" style={{ backgroundImage: `url( ${product.img} )` }}></i>
                                                    </a>
                                                </div>
                                                <p className="slide-intro">{ product.intro }</p>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <div className="swiper-pagination slide-pagination">
                                <span className="swiper-pagination-bullet"></span>
                                <span className="swiper-pagination-bullet"></span>
                                <span className="swiper-pagination-bullet"></span>
                                <span className="swiper-pagination-bullet"></span>
                                <span className="swiper-pagination-bullet"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <div className="container">
                        <h3 className="slide-title">业界寄语</h3>
                        <div className="swiper-container slide-container">
                            <ul className="swiper-wrapper">
                                {
                                    commentList.map( (comment, index) => {
                                        return (
                                            <li className="swiper-slide" key={ index }>
                                                <div className="slide-logo-container">
                                                    <i className="slide-logo comment-photo" style={{ backgroundImage: `url( ${comment.img} )` }}></i>
                                                </div>
                                                <p className="slide-intro">{ comment.intro }</p>
                                                <p className="comment-from">
                                                    { comment.name } <strong>{ comment.company }</strong> { comment.job }
                                                </p>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <div className="swiper-pagination slide-pagination">
                                <span className="swiper-pagination-bullet"></span>
                                <span className="swiper-pagination-bullet"></span>
                                <span className="swiper-pagination-bullet"></span>
                                <span className="swiper-pagination-bullet"></span>
                                <span className="swiper-pagination-bullet"></span>
                                <span className="swiper-pagination-bullet"></span>
                                <span className="swiper-pagination-bullet"></span>
                                <span className="swiper-pagination-bullet"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="partner">
                    <div className="container">
                        <h3 className="partner-title">我们的合作伙伴</h3>
                        <div className="partner-container">
                            {
                                partnerList.map( (partner, index) => {
                                    return (
                                        <div className="partner-list" key={ partner }>
                                            {
                                                partner.map( (partnerItem) => {
                                                    return (
                                                        <div className="partner-item" key={ partnerItem }>
                                                            <img className="partner-item-logo" src={ partnerItem } alt="" />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}