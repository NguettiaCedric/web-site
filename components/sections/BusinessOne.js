
import Link from "next/link"

export default function BusinessOne({ addClass }) {
    return (
        <>

            <section className={`about-section ${addClass}`} style={{marginTop:'1px'}}>
                <div className="auto-container">
                    <div className="row">
                        {/* Content Column */}
                        <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2 wow fadeInRight">
                            <div className="inner-column">
                                <div className="sec-title">
                                    {/* <span className="sub-title">get to know us</span> */}
                                    <h2>Découvrez la solution SAP Business One</h2>
                                    <div className="text" style={{textAlign:'justify'}}>
                                    Est un logiciel qui offre une suite complète d'outils de gestion intégrés pour aider les entreprises à gérer efficacement leurs opérations commerciales, y compris la gestion des ventes, des achats, des stocks, de la comptabilité, des ressources humaines et plus encore.
                                    SAP Business One permet aux entreprises de rationaliser leurs processus métier, d'améliorer leur visibilité sur les opérations et de prendre des décisions stratégiques basées sur des données en temps réel.
                                    </div>
                                </div>
                                {/* Info Box */}
                                
                                <div className="desktop-only" style={{marginTop:'-9px'}}>                                   
                                    <Link href="/page-about" className="theme-btn btn-style-one"><span className="btn-title">Découvrir</span></Link>
                                </div>
                            </div>
                        </div>
                        {/* Image Column */}
                        <div className="image-column col-lg-6 col-md-12 col-sm-12 wow fadeInLeft">
                            <div className="image-box">
                                <span className="icon-dots bounce-y" />
                                {/* <span className="icon-circle zoom-one" /> */}
                                <figure className="image-1 wow fadeIn"><img src="/images/resource/sap-busines.png" alt="" /></figure>                               
                            </div>

                            <div className="desktop-only-1">
                                <Link href="/page-about" className="theme-btn btn-style-one"><span className="btn-title">Découvrir</span></Link>
                            </div>
                        </div>
                                               
                    </div>
                </div>
            </section>
        </>
    )
}
