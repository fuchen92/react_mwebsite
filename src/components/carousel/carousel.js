import React, { Component } from "react";

import Swiper from "swiper"

import "@/assets/css/swiper-3.4.2.min.css";
import "./carousel.scss";

export default class Carousel extends Component {

	componentDidMount () {
		var carousel1 = new Swiper(".carousel-one", {
			spaceBetween: 20,
			slidesPerView: "1.6",
			freeMode: true
		});

		var carousel2 = new Swiper(".carousel-two", {
			spaceBetween: 20,
			slidesPerView: "1.6",
			freeMode: true
		});
	}

	render () {
		const { carouselList, propclass, advertise } = this.props;

		return (
			<div className={ `carousel swiper-container ${ propclass }` }>
				<ul className="swiper-wrapper">
					{
						carouselList.map(carousel => {
							return (
								<li className="carousel-item swiper-slide" key={ carousel.title }>
									<div className="news-img-container">
										<a href={ carousel.link }>
											<img src={ carousel.img } alt={ carousel.title } />
										</a>
									</div>
									<p className="news-img-intro">
										<a href={ carousel.link }>{ carousel.title }</a>
									</p>
									{ (carousel.time !== null) && <p className="news-img-intro">{ carousel.time }</p> }
								</li>
							)
						})
					}
				</ul>
				{ advertise }
			</div>
		)
	}
}
