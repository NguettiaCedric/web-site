import dynamic from "next/dynamic";
import CtaBusiness from "@/components/sections/Ctabusiness"
import Link from "next/link";
import About2 from "@/components/sections/About2";
import Testimonial1 from "../Testimonial1";
import Slider1 from "../Slider1";
import SliderB1 from "../SliderB1";

export default function SapDetails() {
  return (
    <>
      {/* Team Details Start */}
      <section className="team-details">
        <div className="container pb-0">
          <div className="team-details__top pb-0">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 mt-5">
                <div className="team-details__top-left">
                  <div className="team-details__top-img">
                    {" "}
                    <img src="images/resource/sap-1.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="team-details__top-right">
                  <div className="team-details__top-content">
                    <h3 className="">Trouvez la solution ERP idéale pour piloter la croissance de votre PME avec SAP Business One</h3>
                    <p className="" style={{textAlign: 'justify'}}>
                    SAP Business One est la référence en matière de solution de gestion intégrée spécialement conçue pour les petites 
                    et moyennes entreprises. Reconnue pour sa facilité d'utilisation et sa puissance, elle vous apporte tous les outils 
                    nécessaires pour optimiser et centraliser la gestion de vos processus métier au quotidien.


                      {/* SAP Business One est une solution de gestion complète qui
                      répond aux besoins en constante évolution des petites et
                      moyennes entreprises en croissance. Grâce à son
                      implantation facile, à son interface conviviale et à sa
                      grande puissance, elle aide les entreprises à mieux gérer
                      chacun des aspects de leurs opérations quotidiennes. */}
                    </p>
                    <p className="text-justify" style={{textAlign: 'justify'}}>
                      De la comptabilité à la budgétisation, en passant par les
                      achats et la gestion des stocks, jusqu’aux ventes, la
                      gestion de la relation client et la gestion de projet…
                      tout est réuni en un seul et même endroit ! Avec SAP
                      Business One, vous avez la certitude que vos processus de
                      gestion resteront efficaces, protégés et rentables !
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Add to day */}

      <section className="team-details mb-5">
        <div className="container pb-0">
          <div className="team-details__top pb-0">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 mt-0">
                  <div className="team-details__top-left">
                    <div className="team-details__top-content">
                      <h3 className="">Une visibilité à 360° sur toutes vos opérations</h3>
                      <p className="" style={{textAlign: 'justify'}}>
                        Grâce à des modules dédiés à la comptabilité, aux finances, aux ventes, aux achats, à la logistique et aux projets, 
                        SAP Business One vous permet de suivre en temps réel l'ensemble de vos activités : commandes clients, stocks, facturation, trésorerie, production, planning... 
                        Depuis un seul tableau de bord, gagnez en réactivité pour piloter efficacement la performance de votre entreprise.
                      </p>
                      {/* <p className="text-justify" style={{textAlign: 'justify'}}>
                        De la comptabilité à la budgétisation, en passant par les
                        achats et la gestion des stocks, jusqu’aux ventes, la
                        gestion de la relation client et la gestion de projet…
                        tout est réuni en un seul et même endroit ! Avec SAP
                        Business One, vous avez la certitude que vos processus de
                        gestion resteront efficaces, protégés et rentables !
                      </p> */}
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="team-details__top-right">
                    <div className="team-details__top-img">
                      {" "}
                      <img src="images/resource/sap-business-one.png" alt="" />
                    </div>
                  </div>
                </div>
              
            </div>
          </div>
        </div>
      </section>
                      
      {/* Add to day */}
      
      {/* Pourquoi SAP */}
        {/* <About2 /> */}
      <CtaBusiness />
      {/* <section className='py-5 container'>
        <div className='row'>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="team-details__top-left">
              <div className="team-details__top-img">
                <img src="images/resource/sap-app.png" alt="SAP B1" />
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-6'>
            <p style={{textAlign:'justify'}}>
              Obtenez un meilleur contrôle sur votre entreprise ou votre filiale avec SAP Business One. Rationalisez les processus clés, obtenez une meilleure compréhension de votre entreprise et prenez des décisions basées sur des informations en temps réel, afin de générer une croissance rentable.
            </p>
              <div className="info-box">
                  <div className="inner">
                      <h5 className="title"><i className="icon fa fa-circle-check" /> Déploiement sur site ou dans le cloud</h5>
                  </div>
              </div>
              <div className="info-box">
                  <div className="inner">
                      <h5 className="title"><i className="icon fa fa-circle-check" /> Intégration avec la plateforme SAP HANA</h5>
                  </div>
              </div>
              <div className="info-box">
                  <div className="inner">
                      <h5 className="title"><i className="icon fa fa-circle-check" /> Déploiement rapide</h5>
                  </div>
              </div>
          </div>
        </div>
      </section> */}
                    
      {/* Add to day */}
      <section className="team-details mb-5">
        <div className="container pb-0">
          <div className="team-details__top pb-0">
            <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="team-details__top-left">
                  <div className="team-details__top-img">
                    {" "}
                    <img src="images/resource/sap-b10.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 mt-5">
                  <div className="team-details__top-right">
                    <div className="team-details__top-content">
                      <h3 className="">Productivité et flexibilité pour libérer votre potentiel</h3>
                      <p className="" style={{textAlign: 'justify'}}>
                      Son ergonomie éprouvée et sa synchronisation dans le cloud offrent une expérience utilisateur intuitive et une accessibilité permanente à vos données, 
                      que ce soit depuis votre bureau ou en mobilité. 
                      Prenez des décisions éclairées en quelques clics pour faire évoluer sereinement 
                      vos process au rythme de votre développement.
                      </p>
                      {/* <p className="text-justify" style={{textAlign: 'justify'}}>
                        De la comptabilité à la budgétisation, en passant par les
                        achats et la gestion des stocks, jusqu’aux ventes, la
                        gestion de la relation client et la gestion de projet…
                        tout est réuni en un seul et même endroit ! Avec SAP
                        Business One, vous avez la certitude que vos processus de
                        gestion resteront efficaces, protégés et rentables !
                      </p> */}
                    </div>
                  </div>
              </div>                  
            </div>
          </div>
        </div>
      </section>                  
      {/* Add to day */}

      {/* <Testimonial1 /> */}
      {/* <Slider1 /> */}
      <SliderB1 />
     
    </>
  );
}
