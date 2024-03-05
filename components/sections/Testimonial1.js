'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 2,
        // spaceBetween: 30,
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
        },

				breakpoints:{
            320: {
                slidesPerView: 1,
                // spaceBetween: 30,
            },
            575: {
                slidesPerView: 2,
                // spaceBetween: 30,
            },
            767: {
                slidesPerView: 2,
                // spaceBetween: 30,
            },
            991: {
                slidesPerView: 2,
                // spaceBetween: 30,
            },
            1199: {
                slidesPerView: 2,
                // spaceBetween: 30,
            },
            1350: {
                slidesPerView: 2,
                // spaceBetween: 30,
            },
        }
    };

export default function Testimonial1() {
    return (
        <>

            <section className="testimonial-section">
                <div className="bg bg-pattern-7" />
                <div className="auto-container">
                    <div className="row">
                        {/* Title Column */}
                        <div className="title-column col-lg-6 col-md-12">
                            <div className="inner-column">
                                <div className="sec-title">
                                    {/* <span className="sub-title">Témoignage</span> */}
                                    <h2>Témoignages</h2>
                                </div>
                                <div className="info-box">
                                    <i className="icon flaticon-recommend" />
                                    {/* <div className="text">We’re trusted by more then<br /> 3800 satisfied &amp; happy customers</div> */}
                                </div>
                            </div>
                        </div>
                        {/* Testimonial Column */}
                        <div className="testimonial-column col-lg-6 col-md-12">
                            <div className="inner-column">
                                <Swiper {...swiperOptions} className="testimonial-carousel owl-carousel default-navs">
                                    {/* Testimonial Block */}
                                    <SwiperSlide className="testimonial-block">
                                        <div className="inner-box">
                                            <div className="content-box">
                                                <div className="text">
                                                    "Je suis ravi de l'excellent service fourni par Croissance Numerique. 
                                                    Rapidité, efficacité et professionnalisme sont au rendez-vous. Une expérience client au top !"
                                                    
                                                </div>
                                            </div>
                                            <div className="info-box">
                                                <div className="rating">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
                                                <figure className="thumb"><img src="/images/resource/dg-cargill.jpg" alt="" /></figure>
                                                <h5 className="name">Lionel Soulard</h5>
                                                <span className="designation">DG de Cargill CI</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    {/* Testimonial Block */}
                                    <SwiperSlide className="testimonial-block">
                                        <div className="inner-box">
                                            <div className="content-box">
                                                <div className="text">
                                                "L'équipe de Croissance Numerique est tout simplement exceptionnelle. 
                                                Leur attention personnalisée m'a fait sentir pris(e) en charge dès le premier jour. Merci pour votre dévouement!"
                                                </div>
                                            </div>
                                            <div className="info-box">
                                                <div className="rating">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
                                                <figure className="thumb"><img src="/images/resource/dj-ecorigine.jpg" alt="" /></figure>
                                                <h5 className="name">Ismael Koné</h5>
                                                <span className="designation">DG ECORIGINE SA </span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    {/* Testimonial Block */}
                                    <SwiperSlide className="testimonial-block">
                                        <div className="inner-box">
                                            <div className="content-box">
                                                <div className="text">
                                                "Mon expérience avec Croissance Numerique a été tout simplement inoubliable. 
                                                Des services de qualité, une équipe à l'écoute, je suis plus que satisfait de mon choix."
                                                    
                                                </div>
                                            </div>
                                            <div className="info-box">
                                                <div className="rating">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
                                                <figure className="thumb"><img src="/images/resource/pdgTechnoServe.jpg" alt="pdgTechnoServe.jpg" /></figure>
                                                <h5 className="name">William Warshauer</h5>
                                                <span className="designation">PDG de TechnoServe</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    {/* Testimonial Block */}
                                   {/*  <SwiperSlide className="testimonial-block">
                                        <div className="inner-box">
                                            <div className="content-box">
                                                <div className="text">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy data foster to collaborative thinking.</div>
                                            </div>
                                            <div className="info-box">
                                                <div className="rating">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
                                                <figure className="thumb"><img src="/images/resource/testi-thumb-1.jpg" alt="" /></figure>
                                                <h5 className="name">Donald hardson</h5>
                                                <span className="designation">Co Founder</span>
                                            </div>
                                        </div>
                                    </SwiperSlide> */}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
