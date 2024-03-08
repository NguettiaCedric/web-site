import Link from 'next/link'

export default function ProjectInner() {
    return (
        <>

            <section className="projects-section">
                {/* Vue desktop */}
                <div className="auto-container projets-desktop">
                        <div className="row">
                            {/* Project Block */}
                            <div className=" project-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/projet-cargill"><img src="/images/resource/img-Cargill.jpg" alt="" /></Link></figure>
                                    </div>
                                    <div className="content-box">
                                        <Link href="/projet-cargill" className="icon"><i className="fa fa-long-arrow-alt-right" /></Link>
                                        <span className="cat">Nous avons mis en place une instance de système de Management, Dépôt d'épargne,Traçabilité...</span>
                                        <h4 className="title"><Link href="/projet-cargill" >Cargill</Link></h4>
                                    </div>
                                </div>
                            </div>
                            {/* Project Block */}
                            <div className=" project-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/projet-TechnoServe"><img src="/images/resource/img-tec02.jpg" alt="" /></Link></figure>
                                    </div>
                                    <div className="content-box">
                                        <Link href="/projet-TechnoServe" className="icon"><i className="fa fa-long-arrow-alt-right" /></Link>
                                        <span className="cat">Nous avons mis en place dans le domaine de la noix de cajou, un système de géoréférence...</span>
                                        <h4 className="title"><Link href="/projet-TechnoServe" >TechnoServe & Tolaro Global</Link></h4>
                                    </div>
                                </div>
                            </div>
                            {/* Project Block */}
                            <div className=" project-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/projet-Fairtrade"><img src="/images/resource/img-fairtrade01-.jpg" alt="" /></Link></figure>
                                    </div>
                                    <div className="content-box">
                                        <Link href="/projet-Fairtrade" className="icon"><i className="fa fa-long-arrow-alt-right" /></Link>
                                        <span className="cat">Dans le domaine du CACAO, nous avons implanté dans plus 50 coopératives un système de Management
                                         pour garantir...</span>
                                        <h4 className="title"><Link href="/projet-Fairtrade" >Fairtrade</Link></h4>
                                    </div>
                                </div>
                            </div>
                            {/* Project Block */}
                            <div className=" project-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/projet-CADESA"><img src="/images/resource/img-cadesa01.jpg" alt="" /></Link></figure>
                                    </div>
                                    <div className="content-box">
                                        <Link href="/projet-CADESA" className="icon"><i className="fa fa-long-arrow-alt-right" /></Link>
                                        <span className="cat">Nous avons Implémenter dans le domaine du CACAO un système de Management pour garantir l’approvisionnement des matières premières...</span>
                                        <h4 className="title"><Link href="/projet-CADESA" >CADESA</Link></h4>
                                    </div>
                                </div>
                            </div>
                            {/* Project Block */}
                            




                           
                        </div>
                </div>
                {/* Vue desktop */}

                {/* Vue mobile */}
                <div className="auto-container projets-mobile">
                        <div className="row">
                            {/* Project Block */}
                            <div className="project-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/projet-cargill"><img src="/images/resource/img-Cargill.jpg" alt="" /></Link></figure>
                                    </div>
                                    <div className="yellow-box">
                                        <h4 className="title"><Link href="/projet-cargill p-2">Cargill</Link></h4>
                                        <span className="cat">Nous avons mis en place une instance de système de Management, Dépôt d'épargne...</span>
                                        <Link href="/projet-cargill" className="icon"><i className="fa fa-long-arrow-alt-right" /></Link>
                                    </div>
                                </div>
                            </div> 
                            {/* Project Block */}
                            <div className="project-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/projet-TechnoServe"><img src="/images/resource/img-tec02.jpg" alt="" /></Link></figure>
                                    </div>
                                    <div className="yellow-box">
                                        <h4 className="title"><Link href="/projet-TechnoServe p-2">TechnoServe & Tolaro Global</Link></h4>
                                        <span className="cat">Nous avons mis en place dans le domaine de la noix de cajou...</span>
                                        <Link href="/projet-TechnoServe" className="icon"><i className="fa fa-long-arrow-alt-right" /></Link>
                                    </div>
                                </div>
                            </div> 
                            {/* Project Block */}
                            <div className="project-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/projet-Fairtrade"><img src="/images/resource/img-fairtrade01-.jpg" alt="" /></Link></figure>
                                    </div>
                                    <div className="yellow-box">
                                        <h4 className="title"><Link href="/projet-Fairtrade p-2">Fairtrade</Link></h4>
                                        <span className="cat">Dans le domaine du CACAO, nous avons implanté dans plus de 50 coopératives...</span>
                                        <Link href="/projet-Fairtrade" className="icon"><i className="fa fa-long-arrow-alt-right" /></Link>
                                    </div>
                                </div>
                            </div> 
                            {/* Project Block */}
                            <div className="project-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/projet-CADESA"><img src="/images/resource/img-cadesa01.jpg" alt="" /></Link></figure>
                                    </div>
                                    <div className="yellow-box">
                                        <h4 className="title"><Link href="/projet-CADESA p-2">CADESA</Link></h4>
                                        <span className="cat">Nous avons implémenter dans le domaine du CACAO un système de Management...</span>
                                        <Link href="/projet-CADESA" className="icon"><i className="fa fa-long-arrow-alt-right" /></Link>
                                    </div>
                                </div>
                            </div>                                              
                        </div> 
                </div>
                {/* Vue mobile */}

            </section>
        </>
    )
}
