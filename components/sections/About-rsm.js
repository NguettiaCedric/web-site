import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
  ssr: false,
})
import Link from "next/link"

export default function Aboutrsm() {
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
                                        <h2>Pourquoi Choisir SAP RSM ?</h2>
                                    </div>
                                    <div className="info-box">
                                        <div className="inner">
                                            <h5 className="title"><i className="icon fa fa-circle-arrow-right" />SURVEILLEZ, SUIVEZ ET TRACEZ VOTRE CHAÎNE D'APPROVISIONNEMENT</h5>
                                            <div className="text" style={{textAlign:'justify'}}>Reliez les processus agricoles et logistiques pour former une chaîne de visibilité afin de garantir une traçabilité complète et de surveiller les améliorations de la production de la ferme à l'assiette.</div>
                                        </div>
                                    </div>
                                    <div className="info-box">
                                        <div className="inner">
                                            <h5 className="title"><i className="icon fa fa-circle-arrow-right" />ANALYSEZ LES DONNÉES À TOUT MOMENT ET EN TOUT LIEU</h5>

                                            <p style={{textAlign:'justify'}}>
                                            Accédez et analysez rapidement un grand volume de données en temps réel pour examiner et vérifier chaque source d’origine agricole de vos produits
                                            </p>
                                    </div>
                                    <div className="info-box">
                                        <div className="inner">
                                            <h5 className="title"><i className="icon fa fa-circle-arrow-right" />SE CONFORMER AUX RÉGLEMENTATIONS ACTUELLES ET FUTURES</h5>
                                            <div className="text" style={{textAlign:'justify'}}>
                                                <p style={{textAlign:'justify'}}>
                                                Gérez vos collaborateurs, vos processus, vos données et vos actifs pour garantir que toutes les réglementations agricoles actuelles et futures sont respectées avec précision.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom-box">
                                        <Link href="/page-contact" className="theme-btn btn-style-one hvr-dark"><span className="btn-title">Demander une démo</span></Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            {/* Image Column */}
                            <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                                <div className="inner-column wow fadeInLeft">
                                    <div className="image-box">
                                        <span className="icon-dots2" />
                                        <figure className="image-1 overlay-anim wow fadeInUp"><img src="/images/resource/sap-rural.png" alt="" /></figure>
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
