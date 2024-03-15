import dynamic from "next/dynamic";

import Link from "next/link";
import Aboutrsm from "@/components/sections/About-rsm";
import Ctarsm from "../Ctarsm";
import Cta from "../Cta";
import Cta1 from "../Cta1";

export default function DataAnalyticsDetails() {
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
                      <h3 className="">Data Analytics : révélez le potentiel de vos données</h3>
                      <p className="" style={{textAlign: 'justify'}}>
                        Notre unité data vous accompagne dans l'utilisation stratégique de vos historiques et la prise de décision éclairée.
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
                      <h3 className="">Audit de vos sources de données</h3>
                      <p className="" style={{textAlign: 'justify'}}>
                      Nous identifierons le périmètre, qualité et volumes de données exploitables en interne ou depuis vos sources externes.
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
                      <h3 className="">Scénarios de valorisation</h3>
                      <p className="" style={{textAlign: 'justify'}}>
                      Nos data scientists vous présenteront des cas d'usage concrets pour optimiser vos opérations via l'analyse avancée.
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
                      <h3 className="">Plateforme self-service</h3>
                      <p className="" style={{textAlign: 'justify'}}>
                      Nous déployons pour vous une solution cloud sécurisée permettant analyses autonomes et partage de tableaux de bord.
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
                    <h3 className="">Accompagnement de projets data</h3>
                    <p className="" style={{textAlign: 'justify'}}>
                    Notre expertise vous guidera dans la conduite de vos premiers projets data, du choix des KPI au déploiement des modèles. 
                    <br />
                    Confiez-nous dès maintenant l'audit et la mise en valeur de votre patrimoine informationnel grâce au data analytics.
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
    
      {/* <Cta /> */}
      <Cta1 />

      
      
    </>
  );
}
