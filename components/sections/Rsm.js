
import Link from "next/link"

export default function Rsm({ addClass }) {
    return (
        <>

            <section className={`about-section ${addClass}`} style={{marginTop:'0px'}}>
                <div className="auto-container">
                    <div className="row">
                        {/* Content Column */}
                        <div className="content-column col-lg-6 col-md-12 col-sm-12 wow fadeInLeft ">
                            <div className="inner-column ">
                                <div className="sec-title">
                                    {/* <span className="sub-title">get to know us</span> */}
                                    <h2>Découvrez la solution SAP RSM</h2>
                                    <div className="text" style={{textAlign:'justify'}}>
                                    Gagnez en contrôle sur votre entreprise ou filiale avec SAP Business One. 
                                    Ce logiciel de gestion pour petites entreprises relie et rationalise vos processus, et s'adapte à votre croissance.
                                    </div>
                                </div>
                                <div className="desktop-only">
                                    <Link href="/sap-rsm" className="theme-btn btn-style-one"><span className="btn-title">Découvrir</span></Link>
                                </div>
                            </div>
                        </div>
                        {/* Image Column */}
                        <div className="image-column col-lg-6 col-md-12 col-sm-12 wow order-2  fadeInRight">
                            <div className="image-box">
                                <span className="icon-dots bounce-y" />
                                {/* <span className="icon-circle zoom-one" /> */}
                                <figure className="image-1 wow fadeIn"><img src="/images/resource/rsm01.png" alt="" /></figure>
                                
                            </div>

                            <div className="desktop-only-1 my-3">
                                <Link href="/sap-rsm" className="theme-btn btn-style-one"><span className="btn-title">Découvrir</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
