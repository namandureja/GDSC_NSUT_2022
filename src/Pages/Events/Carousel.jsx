import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import { MdArrowBackIosNew } from "react-icons/md";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "../../Assets/Images/events-workshop.jpg";

const Carousel = () => {

	const pagination = {
		el: '.carousel-dots',
		type: 'bullets',
		clickable: true,
		bulletClass: 'carousel-dot',
		bulletActiveClass: 'carousel-dot-active',
	}

	const navigation = {
		nextEl: ".carousel-arrow.arrow-right",
		prevEl: ".carousel-arrow.arrow-left",
		clickable: true,
	}

	return (
		<>
			<Swiper
				className="carousel"
				loop={true}
				speed={800}
				slidesPerView={1}
				modules={[Pagination, Navigation]}
				pagination={pagination}
				navigation={navigation}
			>
				{
					[1, 2, 3].map(item => (
						<SwiperSlide key={item}>
							<div className={'carousel-item'}>
								<img src={Image} alt="hello" />
								<div className={'carousel-item-content'}>
									<h1 className={'carousel-item-title'}>UX Tech 2022</h1>
									<p className={'carousel-item-desc'}>A user interface and experience workshop</p>
								</div>
							</div>
						</SwiperSlide>
					))
				}
				<MdArrowBackIosNew className="carousel-arrow arrow-left" />
				<MdArrowBackIosNew className="carousel-arrow arrow-right" />
			</Swiper>
			<div className={'carousel-dots'}>
				<div className={'carousel-dot carousel-dot-active'}></div>
				<div className={'carousel-dot'}></div>
				<div className={'carousel-dot'}></div>
			</div>
		</>
	)
}

export default Carousel