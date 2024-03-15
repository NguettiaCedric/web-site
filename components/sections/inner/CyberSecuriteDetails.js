import dynamic from "next/dynamic";

import Link from "next/link";
import Aboutrsm from "@/components/sections/About-rsm";
import Ctarsm from "../Ctarsm";
import Cta1 from "../Cta1";

export default function CyberSecuriteDetails() {
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
                      <h3 className="">Cybersécurité : protégez vos systèmes et dados de manière pérenne</h3>
                      <p className="" style={{textAlign: 'justify'}}>
                        Notre équipe de spécialistes en sécurité du numérique vous accompagne dans la protection optimale de vos actifs immatériels.
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
                      <h3 className="">Audit de votre niveau de sécurité</h3>
                      <p className="" style={{textAlign: 'justify'}}>
                      Nos experts analysent vos infrastructures, applications et politiques de sécurité selon les meilleures pratiques.
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
                      <h3 className="">Scénarios de protection</h3>
                      <p className="" style={{textAlign: 'justify'}}>
                      Nous vous présentons des solutions sur-mesure de gestion des identités, détection d'intrusions, chiffrement et continuité d'activité.
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
                      <h3 className="">Supervision proactive</h3>
                      <p className="" style={{textAlign: 'justify'}}>
                      Grâce à notre plateforme de surveillance dédiée, nous détectons en temps réel toutes les anomalies et tentatives d'attaques.
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
                    <h3 className="">Formation et conduite du changement</h3>
                    <p className="" style={{textAlign: 'justify'}}>
                    Nous diffusons une culture de sécurité au sein de votre organisation via des sessions de sensibilisation tous publics.
                    <br />
                    Confiez-nous dès aujourd'hui l'audit et la protection pérenne de vos systèmes digitaux grâce à notre expertise en cybersécurité.
                      {/* <br />
                      
                      Confiez dès à présent l'audit approfondi de votre SI à nos experts. Nos références prestigieuses sur le marché sauront vous convaincre. */}
                    </p>                    
                  </div>                 
                </div>
              </div>

             {/*  <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="team-details__top-right ">
                  <div className="team-details__top-img">
                  <h3 className="">Plateforme self-service</h3>
                    <p className="" style={{textAlign: 'justify'}}>
                      Nous déployons pour vous une solution cloud sécurisée permettant analyses autonomes et partage de tableaux de bord.
                      
                    </p>  
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
