import dynamic from "next/dynamic";

import Link from "next/link";
import Aboutrsm from "@/components/sections/About-rsm";
import Ctarsm from "../Ctarsm";

export default function IntegrationSapRsmDetails() {
  return (
    <>
      {/* <section className="team-details bg bg-pattern-7">
        <div className=""></div>
          <div className="container pb-0">
            <div className="team-details__top pb-0">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 mt-5">
                  <div className="team-details__top-left">
                    <div className="team-details__top-content">
                      <h3 className="">Intégration SAP RSM : la traçabilité agricole au service de vos performances</h3>
                      <p className="" style={{textAlign: 'justify'}}>
                        La solution SAP RSM est essentielle pour piloter efficacement vos opérations
                       agricoles et assurer la traçabilité de bout en bout.
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
                      <h3 className="">Audit de vos process agricoles</h3>
                      <p className="" style={{textAlign: 'justify'}}>
                      Nos experts analyseront vos activités de production, récolte, stockage et 
                      commercialisation afin d'évaluer vos enjeux et besoins en traçabilité.
                      </p>

                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </section>


      <section className="team-details bg bg-pattern-7">
        <div className="container pb-4">
          <div className="team-details__top pb-0">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                
                <div className="team-details__top-left">
                  <div className="team-details__top-content">
                    <h3 className="">Paramétrage dédié à l'agriculture</h3>
                    <p className="" style={{textAlign: 'justify'}}>
                    Nous configurerons entièrement SAP RSM avec les fonctionnalités spécifiques au secteur : 
                    gestion des cultures, planning de récolte, suivi machine.
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
                          <h3 className="">Traçabilité digitale des produits</h3>
                          <p className="" style={{textAlign: 'justify'}}>
                          Grâce à SAP RSM, vous disposerez d'une fiche digitale unique pour chaque produit agricole, du champ à l'assiette.
                          </p> 

                      </div>
                    </div>
                </div>  
              </div>
          </div>
        </div>
      </section>


      <section className="team-details bg bg-pattern-7">
        <div className="container pb-4">
          <div className="team-details__top pb-0">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                
                <div className="team-details__top-left">
                  <div className="team-details__top-content">
                    <h3 className="">Tableau de bord agricole avancé </h3>
                    <p className="" style={{textAlign: 'justify'}}>
                      Pilotez en temps réel vos rendements, volumes, certification et 
                      assurez la qualité optimale le long de la chaîne d'approvisionnement.
                      
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
      </section>  */}


    {/* ***********************     *********************************** */}


    <section className="team-details bg bg-pattern-7">
        <div className=""></div>
          <div className="container pb-0">
            <div className="team-details__top pb-0">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 mt-0">
                  <div className="team-details__top-left">
                    <div className="team-details__top-content">
                      <h3 className="">Intégration SAP RSM : la traçabilité agricole au service de vos performances</h3>
                      <p className="" style={{textAlign: 'justify'}}>
                      La solution SAP RSM est essentielle pour piloter efficacement vos opérations agricoles 
                      et assurer la traçabilité de bout en bout.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="team-details__top-right ">
                    <div className="team-details__top-content">
                        <h3 className="">Audit de vos process agricoles</h3>
                        <p className="" style={{textAlign: 'justify'}}>
                        Nos experts analyseront vos activités de production, récolte, stockage 
                        et commercialisation afin d'évaluer vos enjeux et besoins en traçabilité.
                        </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </section>

    <section className="team-details">
      <div className="container pb-0">
        <div className="team-details__top pb-0">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              
              <div className="team-details__top-left">
                <div className="team-details__top-content">
                  <h3 className="">Paramétrage dédié à l'agriculture</h3>
                  <p className="" style={{textAlign: 'justify'}}>
                  Nous configurerons entièrement SAP RSM avec les fonctionnalités spécifiques au secteur : gestion des cultures, planning de récolte, suivi machine.
                  </p>                    
                </div>                 
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="team-details__top-right ">
                    <div className="team-details__top-content">
                        <h3 className="">Traçabilité digitale des produits</h3>
                        <p className="" style={{textAlign: 'justify'}}>
                        Grâce à SAP RSM, vous disposerez d'une fiche digitale unique pour chaque produit agricole, du champ à l'assiette.
                        </p> 

                    </div>
                  </div>
            </div> 

          </div>
        </div>
      </div>
    </section>

    <section className="team-details bg bg-pattern-7">
      <div className="container pb-4">
        <div className="team-details__top pb-0">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              
              <div className="team-details__top-left">
                <div className="team-details__top-content">
                  <h3 className="">Tableau de bord agricole avancé</h3>
                  <p className="" style={{textAlign: 'justify'}}>
                  Pilotez en temps réel vos rendements, volumes, certification...et assurez la qualité optimale le long de la chaîne d'approvisionnement.
  
                  </p>                    
                </div>                 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Ctarsm  />
      
    </>
  );
}
