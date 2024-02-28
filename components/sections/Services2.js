
import Link from "next/link"

export default function Services2() {
    return (
        <>

            <section className="services-section-two">
                <div className="bg bg-pattern-12" />
                <div className="auto-container">
                    <div className="sec-title text-center light">
                        <span className="sub-title">our services</span>
                        <h2>Explore what services <br />we’re offering</h2>
                    </div>
                    <div className="row">
                        {/* Service Block Two */}
                        <div className="service-block-two col-lg-4 col-md-6 coll-md-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="/images/resource/service2-1.jpg" alt="" /></figure>
                                </div>
                                <div className="title-box">
                                    <h5 className="title"><Link href="/page-service-details">Website <br />Development</Link></h5>
                                </div>
                                <div className="content-box">
                                    <i className="icon flaticon-digital-services" />
                                    <div className="text">Digital agency is an high test for business website work</div>
                                </div>
                            </div>
                        </div>
                        {/* Service Block Two */}
                        <div className="service-block-two col-lg-4 col-md-6 coll-md-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="/images/resource/service2-2.jpg" alt="" /></figure>
                                </div>
                                <div className="title-box">
                                    <h5 className="title"><Link href="/page-service-details">Graphic <br />designing</Link></h5>
                                </div>
                                <div className="content-box">
                                    <i className="icon flaticon-graphic-design" />
                                    <div className="text">Digital agency is an high test for business website work</div>
                                </div>
                            </div>
                        </div>
                        {/* Service Block Two */}
                        <div className="service-block-two col-lg-4 col-md-6 coll-md-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="/images/resource/service2-3.jpg" alt="" /></figure>
                                </div>
                                <div className="title-box">
                                    <h5 className="title"><Link href="/page-service-details">Digital <br />marketing</Link></h5>
                                </div>
                                <div className="content-box">
                                    <i className="icon flaticon-technology" />
                                    <div className="text">Digital agency is an high test for business website work</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
