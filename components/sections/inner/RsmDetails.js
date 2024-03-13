import dynamic from "next/dynamic";

import Link from "next/link";
import Aboutrsm from "@/components/sections/About-rsm";
import Ctarsm from "../Ctarsm";

export default function RsmDetails() {
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
                      <h3 className="">Gestion efficace de vos opérations agricoles avec SAP Rural Sourcing Management</h3>
                      <p className="" style={{textAlign: 'justify'}}>
                        Optimisez votre chaîne d'approvisionnement rurale grâce à la solution de traçabilité la plus flexible du marché, 
                        SAP Rural Sourcing Management (SAP RSM). Spécialement conçue pour les exploitations agricoles, 
                        cette solution de gestion intégrée vous offre une visibilité totale sur l'ensemble de vos activités.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="team-details__top-right ">
                    <div className="team-details__top-img">
                      {" "}
                      <img src="images/resource/rsm-2.png" alt="" />
                      <div className="team-details__big-text"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>

      <section className="team-details ">
        {/* <div className=""></div> */}
        <div className="container pb-0">
          <div className="team-details__top pb-0">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">              
                <div className="team-details__top-left">
                  <div className="team-details__top-img">
                      {" "}
                      <img src="images/resource/rsm-01.png" alt="" />
                      <div className="team-details__big-text"></div>
                    </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="team-details__top-right ">
                  <div className="team-details__top-content">
                      <h3 className="">Contrôlez l'intégralité de votre cycle de production agricole</h3>
                      <p className="" style={{textAlign: 'justify'}}>
                        Grâce aux modules dédiés de SAP RSM, suivez en temps réel chaque étape clé :
                      </p>

                      <div className="info-box">
                          <div className="inner">
                              <h5 className="title"><i className="icon fa fa-circle-check" /> Planification des cultures et calendrier des semis/récoltes</h5>
                          </div>
                      </div>
                      <div className="info-box">
                          <div className="inner">
                              <h5 className="title"><i className="icon fa fa-circle-check" /> Gestion des stocks de semences, fertilisants et produits phytosanitaires</h5>
                          </div>
                      </div>
                      <div className="info-box">
                          <div className="inner">
                              <h5 className="title"><i className="icon fa fa-circle-check" /> Suivi des équipements agricoles et de l'affectation des ressources humaines</h5>
                          </div>
                      </div>
                      <div className="info-box">
                          <div className="inner">
                              <h5 className="title"><i className="icon fa fa-circle-check" /> Traçabilité des livraisons et de la logistique aval</h5>
                          </div>
                      </div>

                      <p>
                         Depuis un tableau de bord centralisé, supervisez vos opérations terrain pour maximiser la productivité de votre exploitation.
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
                    <h3 className="">Renforcez votre agilité avec des outils d'analyse prédictive</h3>
                    <p className="" style={{textAlign: 'justify'}}>
                    L'interface intuitive de SAP RSM, accessible sur le terrain via des applications mobiles utilisables hors connexion, 
                    vous permet de rationaliser vos processus. 
                    Anticipez les aléas grâce aux fonctionnalités d'analyse prédictive : :
                    </p>

                    <div className="info-box">
                        <div className="inner">
                            <h5 className="title"><i className="icon fa fa-circle-check" /> Prévisions météorologiques pour ajuster vos calendriers</h5>
                        </div>
                    </div>
                    <div className="info-box">
                        <div className="inner">
                            <h5 className="title"><i className="icon fa fa-circle-check" /> Modélisation des risques phytosanitaires</h5>
                        </div>
                    </div>
                    <div className="info-box">
                        <div className="inner">
                            <h5 className="title"><i className="icon fa fa-circle-check" /> Projections sur les fluctuations des cours des matières premières agricoles</h5>
                        </div>
                    </div>
                    
                    <p>
                      Prenez des décisions éclairées en quelques clics pour vous adapter aux imprévus et saisir les opportunités de marché.
                    </p>
                     
                  </div>
                  

                </div>
              </div>


              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="team-details__top-right ">

                <div className="team-details__top-img">
                    {" "}
                    <img src="images/resource/rsm-002.png" alt="" />
                    <div className="team-details__big-text"></div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <Ctarsm  />

      <section className="team-details">
        {/* <div className=""></div> */}
        <div className="container pb-4">
          <div className="team-details__top pb-0">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                    
                    <div className="team-details__top-left">

                      <div className="team-details__top-img">
                          {" "}
                          <img src="images/resource/rsm-03.png" alt="" />
                          <div className="team-details__big-text"></div>

                      </div>

                      

                    </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="team-details__top-right ">
                      <div className="team-details__top-content">
                          <h3 className="">Un déploiement sur-mesure par des experts du secteur</h3>
                          <p className="" style={{textAlign: 'justify'}}>
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
                                  <h5 className="title"><i className="icon fa fa-circle-check" /> Augmentez la rentabilité de votre exploitation avec SAP RSM !</h5>
                              </div>
                          </div>    
                          <div>
                            Contactez dès aujourd'hui nos experts Croissance Numerique pour une démonstration de cette solution ERP puissante et parfaitement adaptée au secteur agricole.  
                          </div>   
                      </div>
                    </div>
                </div>     
                <div className="mt-4" style={{textAlign: "center"}}>
                  <a class="theme-btn btn-style-one light" href="/page-contact"><span class="btn-title">Connectez-nous</span></a>

                </div>  
              </div>
          </div>
        </div>
      </section>

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
