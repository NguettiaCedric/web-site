
import Link from "next/link"

export default function Services1() {
    return (
        <>

            <section className="services-section" style={{marginTop: '-65px'}}>
                <div className="bg-shape" />
                <div className="bg bg-pattern-1" />
                <div className="auto-container">
                    <div className="sec-title light">
                        <div className="row">
                            <div className="col-lg-7">
                                {/* <span className="sub-title">our services</span> */}
                                <h2>Découvrez nos services</h2>
                            </div>
                            <div className="col-lg-5">
                                {/* <div className="text">There are many variations of passages of available but majority alteration in some form, by humou or randomised words.</div> */}
                                {/* <a class="theme-btn btn-style-one" href="" ><span class="btn-title">Demande de demo</span></a> */}
                                <li class="theme-btn btn-style-one" style={{marginLeft: '11px',}}><Link href="/page-demo"><span class="btn-title">Demande de demo</span></Link></li>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* Service Block */}
                        <div className="service-block col-lg-3 col-md-6 coll-md-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="/images/resource/integration-solution.png" alt="" /></figure>
                                </div>
                                <div className="content-box">
                                    <i className="icon flaticon-design" />
                                    <h5 className="title">Integration de solution</h5>
                                </div>
                                <div className="hover-content">
                                    <i className="icon flaticon-design" />
                                    <h5 className="title"><Link href="/page-service-details"> Integration de solution</Link></h5>
                                    <div className="text">Nous vous accompagnons dans l'integration de solution.</div>
                                </div>
                            </div>
                        </div>
                        {/* Service Block */}
                        <div className="service-block col-lg-3 col-md-6 coll-md-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="/images/resource/digital1-solution.png" alt="solution digital" /></figure>
                                </div>
                                <div className="content-box">
                                    <i className="icon flaticon-megaphone" />
                                    <h5 className="title">Accompagnement Digital</h5>
                                </div>
                                <div className="hover-content">
                                    <i className="icon flaticon-megaphone" />
                                    <h5 className="title"><Link href="/page-service-details">Accompagnement Digital</Link></h5>
                                    <div className="text">Nous vous accompagnons à travers la transition vers des solutions numériques.</div>
                                </div>
                            </div>
                        </div>
                        {/* Service Block */}
                        <div className="service-block col-lg-3 col-md-6 coll-md-12 wow fadeInUp">
                            <div className="inner-box"> 
                                <div className="image-box">
                                    <figure className="image"><img src="/images/resource/dev-solution.png" alt="" /></figure>
                                </div>
                                <div className="content-box">
                                    <i className="icon  flaticon-web-development" />
                                    <h5 className="title">Développement d'appliation</h5>
                                </div>
                                <div className="hover-content">
                                    <i className="icon  flaticon-web-development" />
                                    <h5 className="title"><Link href="/page-service-details">Application <br />Développement</Link></h5>
                                    <div className="text">Nous mettons notre expertise à votre service pour vous guider tout au long du développement d'applications.</div>
                                </div>
                            </div>
                        </div>
                        {/* Service Block */}
                        <div className="service-block col-lg-3 col-md-6 coll-md-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="/images/resource/swtich-solution.png" alt="swtich" /></figure>
                                </div>
                                <div className="content-box">
                                    <i className="icon flaticon-visitor" />
                                    <h5 className="title">Switch <br/> <br/> </h5>
                                </div>
                                <div className="hover-content">
                                    <i className="icon flaticon-visitor" />
                                    <h5 className="title"><Link href="/page-service-details">Switch <br /></Link></h5>
                                    <div className="text">There are many variations of passages of available but the majority.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
