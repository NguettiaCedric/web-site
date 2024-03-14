
import Link from "next/link"

export default function Services1() {
    return (
        <>

            {/************************   *********************************/}

            <section className="services-section" style={{marginTop: '-65px'}}>
                <div className="bg-shape" />
                <div className="bg bg-pattern-1" />
                <div className="auto-container">
                    <div className="sec-title light">
                        <div className="row">
                            <div className="col-lg-7">
                                <h2>Découvrez nos services</h2>
                            </div>
                            <div className="col-lg-5" style={{display: 'flex',justifyContent:'end'}}>
                                <a class="theme-btn btn-style-one servie-buttom" href="/page-demo"><span class="btn-title" style={{fontSize:'18px',}}>Demande de demo</span></a>                               
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
                                    <h5 className="title"><Link href="/integration-de-solution"> Integration de solution</Link></h5>
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
                                    <h5 className="title"><Link href="/accompagnement-digital">Accompagnement Digital</Link></h5>
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
                                    <h5 className="title">Développement d'appliations</h5>
                                </div>
                                <div className="hover-content">
                                    <i className="icon  flaticon-web-development" />
                                    <h5 className="title"><Link href="/developpement-web">Application <br />Développements</Link></h5>
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
                                    <h5 className="title">Intégration SAP Business One <br/> <br/> </h5>
                                </div>
                                <div className="hover-content">
                                    <i className="icon flaticon-visitor" />
                                    <h5 className="title"><Link href="/switch">Intégration SAP Business One <br /></Link></h5>
                                    <div className="text">There are many variations of passages of available but the majority.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/************************   *********************************/}


            {/************************   *********************************/}
            <section className="services-section" style={{marginTop: '-65px'}}>
                <div className="bg-shape" />
                <div className="bg bg-pattern-1" />
                <div className="auto-container"> 
                    <div className="sec-title light">
                        {/* <div className="row">
                            <div className="col-lg-7">
                                <h2>Découvrez nos services</h2>
                            </div>
                            <div className="col-lg-5" style={{display: 'flex',justifyContent:'end'}}>
                                <a class="theme-btn btn-style-one servie-buttom" href="/page-demo"><span class="btn-title" style={{fontSize:'18px',}}>Demande de demo</span></a>                               
                            </div>
                        </div> */}
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
                                    <h5 className="title">Intégration SAP RSM</h5>
                                </div>
                                <div className="hover-content">
                                    <i className="icon flaticon-design" />
                                    <h5 className="title"><Link href="/integration-de-solution"> Intégration SAP RSM</Link></h5>
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
                                    <h5 className="title">Formation SAP & Conduite du changement</h5>
                                </div>
                                <div className="hover-content">
                                    <i className="icon flaticon-megaphone" />
                                    <h5 className="title"><Link href="/accompagnement-digital">Formation SAP & Conduite du changement</Link></h5>
                                    <div className="text">Nous vous accompagnons à travers la transition vers des solutions numériques.</div>
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
                                    <h5 className="title">Support & Maintenance <br/> <br/> </h5>
                                </div>
                                <div className="hover-content">
                                    <i className="icon flaticon-visitor" />
                                    <h5 className="title"><Link href="/switch">Support & Maintenance <br /></Link></h5>
                                    <div className="text">There are many variations of passages of available but the majority.</div>
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
                                    <h5 className="title">Audit de Système d'information</h5>
                                </div>
                                <div className="hover-content">
                                    <i className="icon  flaticon-web-development" />
                                    <h5 className="title"><Link href="/developpement-web">Audit de Système d'information</Link></h5>
                                    <div className="text">Nous mettons notre expertise à votre service pour vous guider tout au long du développement d'applications.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/************************   *********************************/}
            

            {/************************   *********************************/}
            <section className="services-section" style={{marginTop: '-65px'}}>
                <div className="bg-shape" />
                <div className="bg bg-pattern-1" />
                <div className="auto-container"> 
                    <div className="sec-title light">
                        {/* <div className="row">
                            <div className="col-lg-7">
                                <h2>Découvrez nos services</h2>
                            </div>
                            <div className="col-lg-5" style={{display: 'flex',justifyContent:'end'}}>
                                <a class="theme-btn btn-style-one servie-buttom" href="/page-demo"><span class="btn-title" style={{fontSize:'18px',}}>Demande de demo</span></a>                               
                            </div>
                        </div> */}
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
                                    <h5 className="title">Consulting métier</h5>
                                </div>
                                <div className="hover-content">
                                    <i className="icon flaticon-design" />
                                    <h5 className="title"><Link href="/integration-de-solution">Consulting métier</Link></h5>
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
                                    <h5 className="title">Data Analytics</h5>
                                </div>
                                <div className="hover-content">
                                    <i className="icon flaticon-megaphone" />
                                    <h5 className="title"><Link href="/accompagnement-digital">Data Analytics</Link></h5>
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
                                    <h5 className="title">Cybersécurité</h5>
                                </div>
                                <div className="hover-content">
                                    <i className="icon  flaticon-web-development" />
                                    <h5 className="title"><Link href="/developpement-web">Cybersécurité</Link></h5>
                                    <div className="text">Nous mettons notre expertise à votre service pour vous guider tout au long du développement d'applications.</div>
                                </div>
                            </div>
                        </div>
                        {/* Service Block */}
                       {/*  <div className="service-block col-lg-3 col-md-6 coll-md-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="/images/resource/swtich-solution.png" alt="swtich" /></figure>
                                </div>
                                <div className="content-box">
                                    <i className="icon flaticon-visitor" />
                                    <h5 className="title">Cybersécurité <br/> <br/> </h5>
                                </div>
                                <div className="hover-content">
                                    <i className="icon flaticon-visitor" />
                                    <h5 className="title"><Link href="/switch">Cybersécurité </Link></h5>
                                    <div className="text">There are many variations of passages of available but the majority.</div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
            {/* ***********************   *********************************/}

        </>
    )
}
