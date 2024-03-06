
import Link from 'next/link'

export default function TeamInnerAbout() {
    return (
        <>

            <section className="team-section pt-0">
                <div className="auto-container">
                    <div className="sec-title text-center">
<<<<<<< HEAD
                        {/* <span className="sub-title">RENCONTREZ LES MEMBRES DE NOTRE ÉQUIPE</span> */}
                        <h2>Rencontrez l'équipe professionnelle<br />derrière le succès </h2>
=======
                        <h2>NOTRE EQUIPE</h2>
>>>>>>> 8f885a6d015dee0a4223ad3f69c4c6c26f53e2b0
                    </div>
                    <div className="row">
                        {/* Team block */}
                        <div className="team-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="info-box">
                                    <h4 className="name"><Link href="/page-team-details">Mike hardson</Link></h4>
                                    <span className="designation">designer</span>
                                </div>
                                <div className="image-box">
                                    <figure className="image"><Link href="/#"><img src="/images/resource/team-1.jpg" alt="" /></Link></figure>
                                    <div className="social-links">
                                        <Link href="/#"><i className="fab fa-twitter" /></Link>
                                        <Link href="/#"><i className="fab fa-facebook-f" /></Link>
                                        <Link href="/#"><i className="fab fa-pinterest-p" /></Link>
                                        <Link href="/#"><i className="fab fa-instagram" /></Link>
                                    </div>
                                    <span className="share-icon fa fa-plus" />
                                </div>
                            </div>
                        </div>
                        {/* Team block */}
                        <div className="team-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
                            <div className="inner-box">
                                <div className="info-box">
                                    <h4 className="name"><Link href="/page-team-details">Kevin martin</Link></h4>
                                    <span className="designation">designer</span>
                                </div>
                                <div className="image-box">
                                    <figure className="image"><Link href="/#"><img src="/images/resource/team-2.jpg" alt="" /></Link></figure>
                                    <div className="social-links">
                                        <Link href="/#"><i className="fab fa-twitter" /></Link>
                                        <Link href="/#"><i className="fab fa-facebook-f" /></Link>
                                        <Link href="/#"><i className="fab fa-pinterest-p" /></Link>
                                        <Link href="/#"><i className="fab fa-instagram" /></Link>
                                    </div>
                                    <span className="share-icon fa fa-plus" />
                                </div>
                            </div>
                        </div>
                        {/* Team block */}
                        <div className="team-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
                            <div className="inner-box">
                                <div className="info-box">
                                    <h4 className="name"><Link href="/page-team-details">Christine eve</Link></h4>
                                    <span className="designation">designer</span>
                                </div>
                                <div className="image-box">
                                    <figure className="image"><Link href="/#"><img src="/images/resource/team-3.jpg" alt="" /></Link></figure>
                                    <div className="social-links">
                                        <Link href="/#"><i className="fab fa-twitter" /></Link>
                                        <Link href="/#"><i className="fab fa-facebook-f" /></Link>
                                        <Link href="/#"><i className="fab fa-pinterest-p" /></Link>
                                        <Link href="/#"><i className="fab fa-instagram" /></Link>
                                    </div>
                                    <span className="share-icon fa fa-plus" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
