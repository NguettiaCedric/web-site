
import Link from "next/link"

export default function About1({ addClass }) {
    return (
        <>

            <section className={`about-section ${addClass}`} style={{marginTop:'1px'}}>
                <div className="auto-container">
                    <div className="row">
                        {/* Content Column */}
                        <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2 wow fadeInRight">
                            <div className="inner-column">
                                <div className="sec-title">
                                    {/* <span className="sub-title">get to know us</span> */}
                                    <h2>A propos</h2>
                                    <div className="text" style={{textAlign:'justify'}}>
                                        Croissance Numerique est une société ivoirienne d’experts, spécialisée dans la transformation digitale du secteur agricole. Avec 7 ans d’expérience, Croissance Numerique se positionne comme l'accélérateur
                                        de la transition digitale du secteur agricole en Afrique francophone. Grâce à notre maîtrise de solutions de pointe comme les ERP SAP, les plateformes de paiement mobile ou les solutions de traçabilités SAP RSM,
                                        nous boostons la performance et la rentabilité de nos clients sur le long terme.
                                    </div>
                                </div>
                                {/* Info Box */}
                                {/* <div className="info-box">
                                    <div className="inner">
                                        <i className="icon flaticon-targeted-marketing" />
                                        <h5 className="title">Leading in marketing</h5>
                                        <div className="text">Knowledge of technologies rules better than anyone which we apply in our daily work</div>
                                    </div>
                                </div> */}
                                {/* Info Box */}
                                {/* <div className="info-box">
                                    <div className="inner">
                                        <i className="icon flaticon-diplomat" />
                                        <h5 className="title">Expert developers</h5>
                                        <div className="text">Knowledge of technologies rules better than anyone which we apply in our daily work</div>
                                    </div>
                                </div> */}
                                <div className="">
                                    {/* <div className="author-info">
                                        <div className="inner">
                                            <figure className="thumb"><img src="/images/resource/avatar.jpg" alt="" /></figure>
                                            <h5 className="name">Aleesha brown</h5>
                                            <span className="designation">CEO &amp; CO Founder</span>
                                        </div>
                                    </div> */}
                                    <Link href="/page-about" className="theme-btn btn-style-one"><span className="btn-title">En savoir plus</span></Link>
                                </div>
                            </div>
                        </div>
                        {/* Image Column */}
                        <div className="image-column col-lg-6 col-md-12 col-sm-12 wow fadeInLeft">
                            <div className="image-box">
                                <span className="icon-dots bounce-y" />
                                <span className="icon-circle zoom-one" />
                                <figure className="image-1 wow fadeIn"><img src="/images/resource/about-1.jpg" alt="" /></figure>
                                <figure className="image-2 wow fadeIn" data-wow-delay="600ms"><img src="/images/resource/about-2.jpg" alt="" /></figure>
                                <div className="exp-box">
                                    <div className="inner">
                                        <i className="icon flaticon-promotion" />
                                        <span className="count">7</span>
                                        <div className="text">ans d’expérience</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
