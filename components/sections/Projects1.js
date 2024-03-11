
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

                    {/* ===== Vue desktop projets =====*/}                       
                    <div className="outer-box projets-desktop">                        
                        <div className="row">
                            {/* Project Block */}
                            <div className=" project-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/projet-cargill"><img src="/images/resource/img-Cargill.jpg" alt="" /></Link></figure>
                                    </div>
                                    <div className="content-box">
                                        <Link href="/projet-cargill" className="icon"><i className="fa fa-long-arrow-alt-right" /></Link>
                                        <span className="cat">Nous avons mis en place une instance de système de Management, Dépôt d'épargne...</span>
                                        <h4 className="title"><Link href="/projet-cargill" >Cargill</Link></h4>
                                    </div>
                                </div>
                            </div>
                            {/* Project Block */}
                            <div className=" project-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/projet-TechnoServe"><img src="/images/resource/img-tec02.jpg" alt="" /></Link></figure>
                                    </div>
                                    <div className="content-box">
                                        <Link href="/projet-TechnoServe" className="icon"><i className="fa fa-long-arrow-alt-right" /></Link>
                                        <span className="cat">
                                        Nous avons mis en place dans le domaine de la noix de cajou...</span>
                                        <h4 className="title"><Link href="/projet-TechnoServe" >TechnoServe & Tolaro Global</Link></h4>
                                    </div>
                                </div>
                            </div>
                            {/* Project Block */}
                            <div className=" project-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/projet-Fairtrade"><img src="/images/resource/img-fairtrade01-.jpg" alt="" /></Link></figure>
                                    </div>
                                    <div className="content-box">
                                        <Link href="/projet-Fairtrade " className="icon"><i className="fa fa-long-arrow-alt-right" /></Link>
                                        <span className="cat">Dans le domaine du CACAO, nous avons implanté dans plus de 50 coopératives...</span>
                                        <h4 className="title"><Link href="/projet-Fairtrade" >Fairtrade</Link></h4>
                                    </div>
                                </div>
                            </div>
                            {/* Project Block */}
                            <div className=" project-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/projet-CADESA"><img src="/images/resource/img-cadesa01.jpg" alt="" /></Link></figure>
                                    </div>
                                    <div className="content-box">
                                        <Link href="/projet-CADESA" className="icon"><i className="fa fa-long-arrow-alt-right" /></Link>
                                        <span className="cat">Nous avons implémenter dans le domaine du CACAO un système de Management...</span>
                                        <h4 className="title"><Link href="/projet-CADESA" >CADESA</Link></h4>
                                    </div>
                                </div>
                            </div>  
                        </div>             
                    </div>
                    {/* ===== Vue desktop projets ===== */}


                    {/* =====  Vue mobile projets ==== */}                       
                    <div className="outer-box projets-mobile">                        
                        <div className="row">
                            {/* Project Block */}
                            <div className="project-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/projet-cargill"><img src="/images/resource/img-Cargill.jpg" alt="" /></Link></figure>
                                    </div>
                                    <div className="yellow-box">
                                        <h4 className="title"><Link href="/projet-cargill">Cargill</Link></h4>
                                        <Link href="/projet-cargill" className="icon"><i className="fa fa-long-arrow-alt-right cercle-mobile" /></Link>
                                            <br />
                                        <span className="cat mobile-text">Nous avons mis en place une instance de système de Management, Dépôt d'épargne...</span>
                                        {/* <Link href="/projet-cargill" className="icon"><i className="fa fa-long-arrow-alt-right cercle-mobile" /></Link> */}
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
                                        <h4 className="title"><Link href="/projet-TechnoServe">TechnoServe & Tolaro Global</Link></h4>
                                        <span className="cat mobile-text">Nous avons mis en place dans le domaine de la noix de cajou...</span>
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
                                        <h4 className="title"><Link href="/projet-Fairtrade">Fairtrade</Link></h4>
                                        <span className="cat mobile-text">Dans le domaine du CACAO, nous avons implanté dans plus de 50 coopératives...</span>
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
                                        <h4 className="title"><Link href="/projet-CADESA">CADESA</Link></h4>
                                        <span className="cat mobile-text">Nous avons implémenter dans le domaine du CACAO un système de Management...</span>
                                        <Link href="/projet-CADESA" className="icon"><i className="fa fa-long-arrow-alt-right" /></Link>
                                    </div>
                                </div>
                            </div>                                              
                        </div>                   
                    </div>
                    {/* ==== Vue mobile projets ====  */}

                </div>
            </section>
        </>
    )
}
