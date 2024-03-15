import dynamic from "next/dynamic";

import Link from "next/link";
import Aboutrsm from "@/components/sections/About-rsm";
import Ctarsm from "../Ctarsm";
import Cta1 from "../Cta1";

export default function AuditSystemeInformationDetails() {
  return (
    <>
      {/* Team Details Start */}
      <section className="team-details bg bg-pattern-7">
        <div className=""></div>
          <div className="container pb-0">
            <div className="team-details__top pb-0">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 mt-5">
                  <div className="team-details__top-left">
                    <div className="team-details__top-content">
                      <h3 className="">Audit de système d'information : analysez vos process avec nos experts</h3>
                      <p className="" style={{textAlign: 'justify'}}>
                        Notre équipe de consultants vous accompagne dans l'évaluation approfondie de vos process métiers et systèmes d'information.
                      </p>
                    </div>
                  </div>
                </div>

                {/* <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="team-details__top-right ">
                    <div className="team-details__top-img">
                      {" "}
                      <img src="images/resource/rsm-2.png" alt="" />
                      <div className="team-details__big-text"></div>
                    </div>
                  </div>
                </div> */}

                <div className="col-xl-6 col-lg-6 col-md-6 mt-5">
                  <div className="team-details__top-left">
                    <div className="team-details__top-content">
                      <h3 className="">Diagnostic fonctionnel et technique</h3>
                      <p className="" style={{textAlign: 'justify'}}>
                      Grâce à des ateliers dédiés, nous auditerons minutieusement vos applications métiers et infrastructures IT.
                      </p>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
      </section>

      <section className="team-details">
        {/* <div className=""></div> */}
        <div className="container pb-3">
          <div className="team-details__top pb-0">
            <div className="row">

            <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="team-details__top-right ">
                  <div className="team-details__top-content">
                      <h3 className="">Benchmark de vos pratiques</h3>
                      <p className="" style={{textAlign: 'justify'}}>
                      Nos consultants positionneront votre situation par rapport aux meilleures pratiques du marché et normes en vigueur.
                      </p>

                  </div>
                </div>
              </div> 

              {/* <div className="col-xl-6 col-lg-6 col-md-6">              
                <div className="team-details__top-left">
                  <div className="team-details__top-img">
                      {" "}
                      <img src="images/resource/rsm-01.png" alt="" />
                      <div className="team-details__big-text"></div>
                    </div>
                </div>
              </div> */}

              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="team-details__top-right ">
                  <div className="team-details__top-content">
                      <h3 className="">Feuille de route digitale personnalisée</h3>
                      <p className="" style={{textAlign: 'justify'}}>
                      A l'issue de l'audit, nous vous remettrons un plan d'action détaillé et chiffré pour accélérer votre transformation.
                      </p>
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </section>


      <section className="team-details bg bg-pattern-7">
        {/* <div className=""></div> */}
        <div className="container pb-4">
          <div className="team-details__top pb-0">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                
                <div className="team-details__top-left">
                  <div className="team-details__top-content">
                    <h3 className="">Accompagnement au changement</h3>
                    <p className="" style={{textAlign: 'justify'}}>
                    Nous vous assisterons dans la conduite et le suivi des projets préconisés, du choix des solutions au déploiement.
                      <br />
                      Confiez dès à présent l'audit approfondi de votre SI à nos experts. Nos références prestigieuses sur le marché sauront vous convaincre.
                    </p>                    
                  </div>                 
                </div>
              </div>

              {/* <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="team-details__top-right ">
                <div className="team-details__top-img">
                    {" "}
                    <img src="images/resource/rsm-002.png" alt="" />
                    <div className="team-details__big-text"></div>
                  </div>
                </div>
              </div> */}



            </div>
          </div>
        </div>
      </section>
    
      {/* <Ctarsm  /> */}
      <Cta1  />
      

      

    

    {/* <section className="about-section-two">
        <div className="anim-icons">
            <span className="icon icon-line4" />
            <span className="icon icon-line5" />
            <span className="icon icon-arrow1 bounce-x" />
            <span className="icon icon-speaker zoom-one" />
        </div>
        <div className="auto-container">
            <div className="outer-box">
                <div className="row">
                  
                    <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                        <div className="inner-column">
                            <div className="sec-title">
                                <h2>Un déploiement sur-mesure par des experts du secteur</h2>
                            </div>
                            
                            <p>
                              Nos consultants SAP, spécialistes de l'agriculture, vous accompagnent dans la mise en œuvre :
                            </p>

                            <div className="info-box">
                                <div className="inner">
                                    <h5 className="title"><i className="icon fa fa-circle-check" /> Audit de vos processus et analyse des besoins</h5>
                                </div>
                            </div>
                            <div className="info-box">
                                <div className="inner">
                                    <h5 className="title"><i className="icon fa fa-circle-check" /> Paramétrage sur-mesure des modules SAP RSM</h5>
                                </div>
                            </div>
                            <div className="info-box">
                                <div className="inner">
                                    <h5 className="title"><i className="icon fa fa-circle-check" /> Formation de vos équipes clés et support personnalisé</h5>
                                </div>
                            </div>

                            <div className="info-box">
                                <div className="inner">
                                    <h5 className="title"><i className="icon fa fa-circle-check" /> Maintenance continue pour des performances optimales</h5>
                                </div>
                            </div>

                            <div className="info-box">
                                <div className="inner">
                                    <h5 className="title"><i className="icon fa fa-circle-check" />	Augmentez la rentabilité de votre exploitation avec SAP RSM !</h5>
                                </div>
                            </div>
                    
                            <p>
                              Contactez dès aujourd'hui nos experts Croissance Numerique pour une démonstration de cette solution ERP puissante et parfaitement adaptée au secteur agricole.
                            </p>
                       
                       
                       
                        </div>
                    </div>
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
      </section> */}


      {/* Pourquoi SAP */}
        {/* <Aboutrsm /> */}
      
    </>
  );
}
