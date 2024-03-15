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

export default function SliderB1() {
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
                                    <h3>Une mise en œuvre sur-mesure pour un démarrage rapide</h3>
                                    <p>
                                        Forts de leur expertise reconnue sur SAP Business One, 
                                        nos experts ERP chez Croissance Numerique vous accompagnent pas à pas dans le déploiement,
                                        la formation et le support de votre solution.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Testimonial Column */}
                        <div className="testimonial-column col-lg-6 col-md-12">
                            <div className="inner-column">
                                <Swiper {...swiperOptions} className="testimonial-carousel owl-carousel default-navs">
                                  
                                    <SwiperSlide className="testimonial-block">
                                        <div className="inner-box">
                                            <div className="content-box1">
                                                <div className="text">
                                                    <div className="info-box1">
                                                        <div className="inner">
                                                            <h5 className="title"><i className="icon fa fa-circle-check" /> Audit de votre système d'information existant et analyse de vos besoins métiers</h5>
                                                        </div>
                                                    </div>
                                                    <div className="info-box1">
                                                        <div className="inner">
                                                            <h5 className="title"><i className="icon fa fa-circle-check" /> Choix de la version cloud ou sur site en fonction de vos contraintes techniques et organisationnelles</h5>
                                                        </div>
                                                    </div>
                                                    <div className="info-box1">
                                                        <div className="inner">
                                                            <h5 className="title"><i className="icon fa fa-circle-check" /> Paramétrage du système (modules activés, plan de comptes, catalogue produits...)</h5>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide className="testimonial-block">
                                        <div className="inner-box">
                                            <div className="content-box1">
                                                <div className="text">
                                                    <div className="info-box1">
                                                        <div className="inner">
                                                            <h5 className="title"><i className="icon fa fa-circle-check" /> Import des données existantes depuis votre ancien système</h5>
                                                        </div>
                                                    </div>
                                                    <div className="info-box1">
                                                        <div className="inner">
                                                            <h5 className="title"><i className="icon fa fa-circle-check" /> Personnalisation de l'interface et des workflows selon vos process</h5>
                                                        </div>
                                                    </div>
                                                    <div className="info-box1">
                                                        <div className="inner">
                                                            <h5 className="title"><i className="icon fa fa-circle-check" /> Formation des super-utilisateurs en interne</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide className="testimonial-block">
                                        <div className="inner-box">
                                            <div className="content-box1">
                                                <div className="text">
                                                    <div className="text">
                                                        <div className="info-box1">
                                                            <div className="inner">
                                                                <h5 className="title"><i className="icon fa fa-circle-check" />	Tests et recettes fonctionnelles</h5>
                                                            </div>
                                                        </div>
                                                        <div className="info-box1">
                                                            <div className="inner">
                                                                <h5 className="title"><i className="icon fa fa-circle-check" /> Accompagnement au démarrage et montée en charge</h5>
                                                            </div>
                                                        </div>
                                                        <div className="info-box1">
                                                            <div className="inner">
                                                                <h5 className="title"><i className="icon fa fa-circle-check" /> Assistance à la bascule de l'ancien vers le nouveau système</h5>
                                                            </div>
                                                        </div>
                                                        <div className="info-box1">
                                                            <div className="inner">
                                                                <h5 className="title"><i className="icon fa fa-circle-check" /> Support et maintenance dans la durée</h5>
                                                            </div>
                                                        </div>
                                                    </div>                                              
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
