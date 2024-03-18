
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
                            <Link href="integration-sap-business-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="/images/resource/b1.png" alt="Business One" /></figure>
                                    </div>
                                    <div className="content-box">
                                        {/* <i className="icon flaticon-visitor" /> */}
                                        {/* <i class="fa-thin fa-grid-2"></i> */}
                                        <i class="icon fa-solid fa-grid-2"></i>
                                        <h5 className="title">Intégration SAP Business One <br/> <br/> </h5>
                                    </div>
                                    <div className="hover-content">
                                        {/* <i className="icon flaticon-visitor" /> */}
                                        <i class="icon fa-solid fa-grid-2"></i>
                                        <h5 className="title"><Link href="integration-sap-business-one">Intégration SAP Business One <br /></Link></h5>
                                        <div className="text">SAP Business One est la solution ERP incontournable pour les PME africaines ...</div>
                                    </div>
                                </div>
                            </Link>                            
                        </div>
                        {/* Service Block */}
                        {/* <div className="service-block col-lg-3 col-md-6 coll-md-12 wow fadeInUp">
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
                        </div> */}
                        {/* Service Block */}
                        <div className="service-block col-lg-3 col-md-6 coll-md-12 wow fadeInUp">
                            <Link href="/integration-sap-rsm">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="/images/resource/r1sm.png" alt="SAP RSM" /></figure>
                                    </div>
                                    <div className="content-box">
                                        {/* <i className="icon flaticon-design" /> */}
                                        <i class="icon fa-solid fa-mobile"></i>
                                        <h5 className="title">Intégration SAP RSM</h5>
                                    </div>
                                    <div className="hover-content">
                                        {/* <i className="icon flaticon-design" /> */}
                                        <i class="icon fa-solid fa-mobile"></i>
                                        <h5 className="title"><Link href="/integration-sap-rsm"> Intégration SAP RSM</Link></h5>
                                        <div className="text">La solution SAP RSM est essentielle pour piloter efficacement vos opérations agricoles ...</div>
                                    </div>
                                </div>
                            </Link>
                            
                        </div>
                        {/* Service Block */}
                        <div className="service-block col-lg-3 col-md-6 coll-md-12 wow fadeInUp">
                            <Link href="/accompagnement-digital">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="/images/resource/digital1-solution.png" alt="solution digital" /></figure>
                                    </div>
                                    <div className="content-box">
                                        {/* <i className="icon flaticon-megaphone" /> */}
                                        <i class="icon fa-solid fa-thought-bubble"></i>
                                        <h5 className="title">Accompagnement Digital</h5>
                                    </div>
                                    <div className="hover-content">
                                        {/* <i className="icon flaticon-megaphone" /> */}
                                        <i class="icon fa-solid fa-thought-bubble"></i>
                                        <h5 className="title"><Link href="/accompagnement-digital">Accompagnement Digital</Link></h5>
                                        <div className="text">Nous vous accompagnons à travers la transition vers des solutions numériques.</div>
                                    </div>
                                </div>
                            </Link>                       
                        </div>
                        {/* Service Block */}
                        
                        <div className="service-block col-lg-3 col-md-6 coll-md-12 wow fadeInUp">
                            <Link  href="/formation-sap-conduite-du-changement">
                                <div className="inner-box"> 
                                    <div className="image-box">
                                        <figure className="image"><img src="/images/resource/dev-solution.png" alt="" /></figure>
                                    </div>
                                    <div className="content-box">
                                        <i className="icon  flaticon-web-development" />
                                        <h5 className="title">Développement Web</h5>
                                    </div>
                                    <div className="hover-content">
                                        <i className="icon  flaticon-web-development" />
                                        <h5 className="title"><Link href="/developpement-web">Développement Web</Link></h5>
                                        <div className="text">Découvrez notre service de développement web sur mesure, conçu pour transformer vos idées ...</div>
                                    </div>
                                </div>
                            </Link>                         
                        </div>

                       
                        {/* Service Block */}
                        {/* <div className="service-block col-lg-3 col-md-6 coll-md-12 wow fadeInUp">
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
                        </div> */}
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
                        {/* <div className="service-block col-lg-3 col-md-6 coll-md-12 wow fadeInUp">
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
                        </div> */}
                        {/* Service Block */}

                        <div className="service-block col-lg-3 col-md-6 coll-md-12 wow fadeInUp">
                            <Link  href="/formation-sap-conduite-du-changement">
                                <div className="inner-box"> 
                                    <div className="image-box">
                                        <figure className="image"><img src="/images/resource/formation.png" alt="formation" /></figure>
                                    </div>
                                    <div className="content-box">
                                        {/* <i className="icon flaticon-web-development" /> */}
                                        {/* <i class="icon fa-thin fa-gears"></i> */}
                                        <i class="icon fa-solid fa-desktop"></i>
                                        {/* <i class="icon fa-solid fa-gears"></i> */}
                                        {/* <i class="icon fa-solid fa-users-line"></i> */}
                                        <h5 className="title">Formation SAP & Conduite du changement</h5>
                                    </div>
                                    <div className="hover-content">
                                        {/* <i class="icon fa-thin fa-gears"></i> */}
                                        {/* <i class="icon fa-solid fa-gears"></i> */}
                                        {/* <i class="icon fa-solid fa-users-line"></i> */}
                                        <i class="icon fa-solid fa-desktop"></i>

                                        {/* <i className="icon  flaticon-web-development" /> */}
                                        <h5 className="title"><Link href="/formation-sap-conduite-du-changement">Formation SAP & Conduite du changement</Link></h5>
                                        <div className="text">Notre équipe d'experts certifiés SAP vous accompagne dans l'adoption réussie de vos solutions SAP Business One, SAP RSM ou SAP s/4 HANA.</div>
                                    </div>
                                </div>
                            </Link>                         
                        </div>
                        {/* Service Block */}

                        <div className="service-block col-lg-3 col-md-6 coll-md-12 wow fadeInUp">
                            <Link  href="/support-maintenance">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="/images/resource/supportmaintenance.png" alt="solution digital" /></figure>
                                    </div>
                                    <div className="content-box">
                                        {/* <i className="icon flaticon-megaphone" /> */}
                                        <i class="icon fa-solid fa-gears"></i>
                                        <h5 className="title">Support & Maintenance</h5>
                                    </div>
                                    <div className="hover-content">
                                        {/* <i className="icon flaticon-megaphone" /> */}
                                        <i class="icon fa-solid fa-gears"></i>
                                        <h5 className="title"><Link href="/support-maintenance">Support & Maintenance</Link></h5>
                                        <div className="text">Notre équipe de support SAP certifiée vous accompagne dans la gestion optimale de vos systèmes SAP au quotidien.</div>
                                    </div>
                                </div>
                            </Link>                           
                        </div>
                        
                        {/* Service Block */}
                        <div className="service-block col-lg-3 col-md-6 coll-md-12 wow fadeInUp">
                            <Link href="/audit-de-systeme-information">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="/images/resource/audit.png" alt="Audit" /></figure>
                                    </div>
                                    <div className="content-box">
                                        {/* <i className="icon flaticon-visitor" /> */}
                                        <i class="icon fa-solid fa-file-spreadsheet"></i>
                                        <h5 className="title">Audit de Système d'information</h5>
                                    </div>
                                    <div className="hover-content">
                                        {/* <i className="icon flaticon-visitor" /> */}
                                        <i class="icon fa-solid fa-file-spreadsheet"></i>
                                        <h5 className="title"><Link href="/audit-de-systeme-information">Audit de Système d'information</Link></h5>
                                        <div className="text">Notre équipe de consultants vous accompagne dans l'évaluation approfondie de vos process métiers et systèmes d'information.</div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        {/* Service Block */}

                        <div className="service-block col-lg-3 col-md-6 coll-md-12 wow fadeInUp">
                            <Link Link href="/consulting-metier">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="/images/resource/consulting-metier.png" alt="Consultant Metier" /></figure>
                                    </div>
                                    <div className="content-box">
                                        {/* <i className="icon flaticon-design" /> */}
                                        <i class="icon fa-solid fa-people-arrows"></i>
                                        <h5 className="title">Consulting métier</h5>
                                    </div>
                                    <div className="hover-content">
                                        {/* <i className="icon flaticon-design" /> */}
                                        <i class="icon fa-solid fa-people-arrows"></i>
                                        <h5 className="title"><Link href="/consulting-metier">Consulting métier</Link></h5>
                                        <div className="text">Notre équipe de consultants sectoriels vous accompagne dans l'optimisation de vos process métier.</div>
                                        
                                    </div>
                                </div>
                            </Link>
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
                            <Link href="/data-analytics">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="/images/resource/dataAnalyse.png" alt="data Analyse" /></figure>
                                    </div>
                                    <div className="content-box">
                                        {/* <i className="icon flaticon-megaphone" /> */}
                                        {/* <i class="icon fa-sharp fa-light fa-desktop"></i> */}
                                        <i class="icon fa-solid fa-sliders"></i>
                                        <h5 className="title">Data Analytics</h5>
                                    </div>
                                    <div className="hover-content">
                                        {/* <i className="icon flaticon-megaphone" /> */}
                                        {/* <i class="icon fa-sharp fa-light fa-desktop"></i> */}
                                        <i class="icon fa-solid fa-sliders"></i>
                                        <h5 className="title"><Link href="/data-analytics">Data Analytics</Link></h5>
                                        <div className="text">Notre unité data vous accompagne dans l'utilisation stratégique de vos historiques et la prise de décision éclairée.</div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        {/* Service Block */}
                        <div className="service-block col-lg-3 col-md-6 coll-md-12 wow fadeInUp">
                            <Link href="/cyber-securite">
                                <div className="inner-box"> 
                                    <div className="image-box">
                                        <figure className="image"><img src="/images/resource/cyberSecurity.png" alt="Cyber sécurité" /></figure>
                                    </div>
                                    <div className="content-box">
                                        {/* <i className="icon  flaticon-web-development"  /> */}
                                        {/* <i class="icon fas fa-lock"></i> */}
                                        <i class="icon fa-duotone fa-lock-keyhole"></i>
                                        {/* <i className="fi fi-brands-youtube"></i> */}
                                        <h5 className="title">Cybersécurité</h5>
                                    </div>
                                    <div className="hover-content">
                                        {/* <i className="icon  flaticon-web-development"  /> */}
                                        {/* <i class="icon fas fa-lock"></i> */}
                                        <i class="icon fa-duotone fa-lock-keyhole"></i>
                                        {/* <i className="fi fi-brands-youtube"></i> */}
                                        {/* <figure className="image"><img src="/images/resource/security01.png" alt="Cyber sécurité" /></figure> */}

                                        <h5 className="title"><Link href="/cyber-securite">Cybersécurité</Link></h5>
                                        <div className="text">Notre équipe de spécialistes en sécurité du numérique vous accompagne dans la protection optimale de vos actifs immatériels.</div>
                                    </div>
                                </div>
                            </Link>
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
