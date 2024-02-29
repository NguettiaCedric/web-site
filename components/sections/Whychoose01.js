
import Link from "next/link"
export default function Whychoose01() {
    return (
        <>

            <section className="why-choose-us" style={{marginTop:'-60px'}}>
                <div className="anim-icons">
                    <span className="icon icon-arrow1" />
                </div>
                <div className="auto-container">
                    <div className="row">
                        {/* Content Column */}
                        <div className="content-column col-lg-6 col-md-12">
                            <div className="inner-column wow fadeInRight">
                                <div className="sec-title">
                                    {/* <i className="sub-title">company benefits</i> */}
                                    <h2 >A propos</h2>
                                    {/* <h4 className="other-title">Proin est lacus, sagittis lobortis iaculise get.</h4> */}
                                    <div className="text"  style={{textAlign:'justify'}}>Croissance Numerique est une société ivoirienne d’experts, spécialisée dans la transformation digitale du secteur agricole. Avec 7 ans d’expérience, Croissance Numerique se positionne comme l'accélérateur
                                        de la transition digitale du secteur agricole en Afrique francophone. Grâce à notre maîtrise de solutions de pointe comme les ERP SAP, les plateformes de paiement mobile ou les solutions de traçabilités SAP RSM,
                                        nous boostons la performance et la rentabilité de nos clients sur le long terme.
                                    </div>
                                    <div className="btn-box animate-2" style={{marginTop:'11px', marginBottom:'-24px'}}>                                        <Link href="/page-about" className="theme-btn btn-style-one hover-light"><span className="btn-title">En savoir plus</span></Link>
                                    </div>
                                    <span className="icon icon-arrow3" />
                                </div>
                                <div className="info-outer">
                                    <div className="row">
                                        <div className="info-box col-lg-4 col-md-4">
                                            <div className="inner">
                                                <i className="icon flaticon-success" />
                                                <h5 className="title">Integration de solution</h5>
                                            </div>
                                        </div>
                                        <div className="info-box col-lg-4 col-md-4">
                                            <div className="inner">
                                                <i className="icon flaticon-job-promotion" />
                                                <h5 className="title">Accompagnement Digital</h5>
                                            </div>
                                        </div>
                                        <div className="info-box col-lg-4 col-md-4">
                                            <div className="inner">
                                                <i className="icon flaticon-marketing" />
                                                <h5 className="title">Développement d'appliation</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Image Column */}
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="image-box">
                                    <figure className="image anim-overlay"><img src="/images/resource/why-us.jpg" alt="" /></figure>
                                    {/* <div className="rounded-text">
                                        <img src="/images/resource/round-text.png" alt="" />
                                        <span className="letter">D</span>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
