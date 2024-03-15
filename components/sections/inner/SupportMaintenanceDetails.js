import dynamic from "next/dynamic";

import Link from "next/link";
import Aboutrsm from "@/components/sections/About-rsm";
import Ctarsm from "../Ctarsm";
import Cta1 from "../Cta1";

export default function SupportMaintenanceDetails() {
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
                      <h3 className="">Support & Maintenance SAP : une assistance experte pour la pleine utilisation de vos solutions</h3>
                      <p className="" style={{textAlign: 'justify'}}>
                      Notre équipe de support SAP certifiée vous accompagne dans la gestion optimale de vos systèmes SAP au quotidien.
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
                      <h3 className="">Assistance technique dédiée</h3>
                      <p className="" style={{textAlign: 'justify'}}>
                      Nos experts répondent à toutes vos demandes par téléphone, mail ou via notre plateforme de support en ligne sécurisée.
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
                      <h3 className="">Maintenance applicative préventive</h3>
                      <p className="" style={{textAlign: 'justify'}}>
                      Nous assurons les mises à jour régulières de vos solutions SAP Business One, 
                      SAP RSM ou SAP s/4HANA pour bénéficier des dernières fonctionnalités.
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
                      <h3 className="">Supervision et monitoring 24/7</h3>
                      <p className="" style={{textAlign: 'justify'}}>
                        Grâce à notre solution de télésurveillance dédiée, nous suivons en permanence 
                        la disponibilité et performances de vos systèmes SAP.
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
                    <h3 className="">Support utilisateurs avancé</h3>
                    <p className="" style={{textAlign: 'justify'}}>
                      Formations complémentaires, assemblées utilisateurs, assistance métier personnalisée : nous sommes à vos côtés au quotidien.
                      <br />
                      Confiez-nous dès aujourd'hui la gestion experte et pérenne de vos solutions SAP avec notre offre complète de Support & Maintenance.
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
    
      <Cta1  />

    
      
    </>
  );
}
