'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
}

export default function Slider1() {
    return (
        <>

            <section className="banner-section">
                <Swiper {...swiperOptions} className="banner-carousel owl-carousel owl-theme default-navs">
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: 'url(images/main-slider/slider1.jpg)' }} />
                        <div className="auto-container">
                            <div className="content-box">
                                <h1 className="title animate-1">SAP <br/> Business One</h1>
                                {/* <br />
                                <br /> */}
                                <div className="btn-box animate-2 mt-3">
                                    <Link href="/sap-business-one" className="theme-btn btn-style-one hover-light"><span className="btn-title">En savoir plus</span></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: 'url(images/main-slider/slider2.jpg)' }} />
                        <div className="auto-container">
                            <div className="content-box">
                                <h1 className="title animate-1 slider-text">SAP <br />  RSM  </h1>
                                
                                <div className="btn-box animate-2">
                                    <Link href="/sap-rsm" className="theme-btn btn-style-one hover-light"><span className="btn-title">En savoir plus</span></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: 'url(images/main-slider/slider3.jpg)' }} />
                        <div className="auto-container">
                            <div className="content-box">
                                <h1 className="title animate-1">Développement d’applications</h1>
                                {/* <br />
                                <br /> */}
                                <div className="btn-box animate-2 mt-3">                                 
                                    <Link href="/switch" className="theme-btn btn-style-one hover-light"><span className="btn-title">En savoir plus</span></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="owl-nav" style={{zIndex:"999"}}>
                        <div className="owl-prev h1p">
                            <span className="fa fa-long-arrow-alt-left" />
                        </div>
                        <div className="owl-next h1n">
                            <span className="fa fa-long-arrow-alt-right" />
                        </div>
                    </div>
                </Swiper>


            </section>
        </>
    )
}
