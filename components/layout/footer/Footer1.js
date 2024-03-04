import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer className="main-footer">
                <div className="bg bg-pattern-6" />
                {/* Footer Uppper */}
                <div className="footer-upper">
                    <div className="auto-container">
                        <div className="row">
                            {/* Contact info Block */}
                            <div className="contact-info-block col-lg-4 col-md-6">
                                <div className="inner">
                                    <i className="icon fa fa-phone-square" />
                                    <span className="sub-title">Appeler</span>
                                    <div className="text"><Link href="/tel:+225 07 07 540 555">+225 07 07 540 555</Link></div>
                                </div>
                            </div>
                            {/* Contact info Block */}
                            <div className="contact-info-block col-lg-4 col-md-6">
                                <div className="inner">
                                    <i className="icon fa fa-envelope" />
                                    <span className="sub-title">Email</span>
                                    <div className="text"><Link href="/mailto:contact@croissancenumerique.ci">contact@croissancenumerique.ci</Link></div>
                                </div>
                            </div>
                            {/* Contact info Block */}
                            <div className="contact-info-block col-lg-4 col-md-6">
                                <div className="inner">
                                    <i className="icon fa fa-map-marker" />
                                    <span className="sub-title">Adresse</span>
                                    <div className="text">ATTOBAN, 30 ème arrondissement</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Widgets Section */}
                <div className="widgets-section">
                    <div className="auto-container">
                        <div className="row">
                            {/* Footer COlumn */}
                            <div className="footer-column col-xl-5 col-lg-4 col-md-12">
                                <div className="footer-widget about-widget">
                                    <div className="widget-content">
                                        <div className="logo"><Link href="/#"> <img src="/images/logo-cn0.png" alt="logo"  style={{width:'100px'}}/></Link></div>
                                        <div className="text-white">Croissance Numerique l'accélérateur de la transition digitale <br /> du secteur agricole en Afrique francophone.</div>
                                        <ul className="social-icon-two">
                                            {/* <li><Link href="/#"><i className="fab fa-twitter" /></Link></li> */}
                                            <li><Link href="https://www.facebook.com/croissancenumerique?mibextid=ZbWKwL"><i className="fab fa-facebook" /></Link></li>
                                            <li><Link href="https://www.linkedin.com/company/croissance-num%C3%A9rique/"><i className="fab fa-linkedin" /></Link></li>
                                            {/* <li><Link href="/#"><i className="fab fa-pinterest" style={{color:'#ffdd14'}} /></Link></li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Footer COlumn */}
                            <div className="footer-column col-xl-4 col-lg-4 col-md-6">
                                <div className="widget links-widget">
                                    <h5 className="widget-title">Liens Utiles</h5>
                                    <div className="widget-content">
                                                                                
                                        <ul className="user-links">
                                            <li><Link href="/" className="text-white">Accueil</Link></li>
                                            <li><Link href="/#" className="text-white">A propos</Link></li>
                                            <li><Link href="/sap-business-one" className="text-white">SAP Business One</Link></li>
                                            <li><Link href="/sap-rsm" className="text-white">SAP RSM</Link></li>
                                            <li><Link href="/switch" className="text-white">Switch</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>



                            {/* Footer COlumn */}
                            <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="widget newsletter-widget">
                                    <h5 className="widget-title">Nos services</h5>
                                    <div className="widget-content">
                                        <div className="subscribe-form">
                                            <ul className="user-links">
                                                <li><Link href="/integration-de-solution" className="text-white">Integration de Solutions</Link></li>
                                                <li><Link href="/accompagnement-digital" className="text-white">Accompagnement Digital</Link></li>
                                                <li><Link href="/developpement-web" className="text-white">Développement web</Link></li>
                                            </ul>
                                            {/* <form method="post" action="#">
                                                <div className="form-group">
                                                    <input type="email" name="email" className="email" placeholder="Email Address" required />
                                                </div>
                                                <div className="form-group">
                                                    <button type="button" className="theme-btn btn-style-one hover-light"><span className="btn-title">Subscribe</span></button>
                                                </div>
                                            </form> */}


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  Footer Bottom */}
                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="copyright-text">© Copyright tous droits réservés <Link href="https://croissancenumerique.ci">croissancenumerique.ci</Link></div>
                    </div>
                </div>
            </footer>

        </>
    )
}
