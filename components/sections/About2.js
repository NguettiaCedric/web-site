import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
  ssr: false,
})
import Link from "next/link"

export default function About2() {
    return (
        <>

            <section className="about-section-two">
                <div className="anim-icons">
                    <span className="icon icon-line4" />
                    <span className="icon icon-line5" />
                    <span className="icon icon-arrow1 bounce-x" />
                    <span className="icon icon-speaker zoom-one" />
                </div>
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="row">
                            {/* Content Column */}
                            <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                                <div className="inner-column">
                                    <div className="sec-title">
                                        <h3>Une visibilité à 360° sur toutes vos opérations</h3>
                                        <div className="text">
                                            <p className='text-justify'>
                                                Grâce à des modules dédiés à la comptabilité, aux finances, aux ventes, aux achats, à la logistique et aux projets, 
                                                SAP Business One vous permet de suivre en temps réel l'ensemble de vos activités : commandes clients, stocks, facturation, trésorerie, production, planning... 
                                                Depuis un seul tableau de bord, gagnez en réactivité pour piloter efficacement la performance de votre entreprise.
                                            {/* SAP Business One est la solution idéale pour les petites et moyennes entreprises cherchant à optimiser leurs opérations. Voici les raisons pour lesquelles vous devez l'utiliser pour votre gestion */}
                                            </p>
                                        </div>
                                    </div>
                                    {/* <div className="row">
                                        <div className="info-box col-lg-6 col-md-6">
                                            <div className="inner">
                                                <h5 className="title"><i className="icon fa fa-circle-check" /> INTÉGRATION COMPLÈTE DES PROCESSUS COMMERCIAUX</h5>
                                                <div className="text" style={{textAlign:'justify'}}>SAP Business One offre une intégration complète des processus de gestion des ventes, des achats, de l'inventaire, de la comptabilité et des relations avec les clients.</div>
                                            </div>
                                        </div>
                                        <div className="info-box col-lg-6 col-md-6">
                                            <div className="inner">
                                                <h5 className="title"><i className="icon fa fa-circle-check" /> ANALYSE ET REPORTING AVANCÉS</h5>
                                                <div className="text" style={{textAlign:'justify'}}>SAP Business One offre des capacités avancées d'analyse et de reporting, ce qui permet aux entreprises de prendre des décisions plus éclairées basées sur des données en temps réel.</div>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="bottom-box">
                                        <Link href="/page-about" className="theme-btn btn-style-one hvr-dark"><span className="btn-title">Demander une démo</span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* Image Column */}
                            <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                                <div className="inner-column wow fadeInLeft" style={{marginTop:' -70px'}}>
                                    <div className="image-box">
                                        <span className="icon-dots2" />
                                        <figure className="image-1 overlay-anim wow fadeInUp"><img src="/images/resource/sap-business-one.png" alt="" /></figure>
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
