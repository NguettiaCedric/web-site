
import Link from "next/link"

export default function Projects1() {
    return (
        <>

            <section className="projects-section p-2">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        {/* <span className="sub-title">our portfolio</span> */}
                        <h2 className="mt-2">Découvrez nos <br/> projets</h2>
                    </div>
                    <div className="outer-box">
                        <div className="row">
                            {/* Project Block */}
                            <div className=" project-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/page-project-details"><img src="/images/resource/img-Cargill.jpg" alt="" /></Link></figure>
                                    </div>
                                    <div className="content-box">
                                        <Link href="/page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right" /></Link>
                                        <span className="cat">Nous avons mis en place une instance de système de Management, Dépôt d'épargne,Traçabilité...</span>
                                        <h4 className="title"><Link href="/page-project-details" >Cargill</Link></h4>
                                    </div>
                                </div>
                            </div>
                            {/* Project Block */}
                            <div className=" project-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/page-project-details"><img src="/images/resource/img-TechnoServe.jpg" alt="" /></Link></figure>
                                    </div>
                                    <div className="content-box">
                                        <Link href="/page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right" /></Link>
                                        <span className="cat">Nous avons mis en place dans le domaine de la noix de cajou, un système de géoréférence des plantations des producteurs ...</span>
                                        <h4 className="title"><Link href="/page-project-details" >TechnoServe & Tolaro Global</Link></h4>
                                    </div>
                                </div>
                            </div>
                            {/* Project Block */}
                            <div className=" project-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/page-project-details"><img src="/images/resource/img-fairtrade01-.jpg" alt="" /></Link></figure>
                                    </div>
                                    <div className="content-box">
                                        <Link href="/page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right" /></Link>
                                        <span className="cat">Dans le domaine du CACAO, nous avons implanté dans plus 50 coopératives un système de Management
                                         pour garantir l’approvisionnement des matières premières...</span>
                                        <h4 className="title"><Link href="/page-project-details" >Fairtrade</Link></h4>
                                    </div>
                                </div>
                            </div>
                            {/* Project Block */}
                            <div className=" project-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/page-project-details"><img src="/images/resource/img-fairtrade01-.jpg" alt="" /></Link></figure>
                                    </div>
                                    <div className="content-box">
                                        <Link href="/page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right" /></Link>
                                        <span className="cat">Nous avons Implémenter dans le domaine du CACAO un système de Management pour garantir l’approvisionnement des matières premières à l’usine et assurer la traçabilité.</span>
                                        <h4 className="title"><Link href="/page-project-details" >CADESA</Link></h4>
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
