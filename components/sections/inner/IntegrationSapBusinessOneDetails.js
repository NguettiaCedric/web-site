import dynamic from "next/dynamic";

import Link from "next/link";
import Aboutrsm from "@/components/sections/About-rsm";
import Ctarsm from "../Ctarsm";
import Ctabusiness from "../Ctabusiness";

export default function IntegrationSapBusinessOneDetails() {
  return (
    <>
      {/* Team Details Start */}
     {/*  <section className="team-details bg bg-pattern-7">
        <div className=""></div>
          <div className="container pb-0">
            <div className="team-details__top pb-0">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 mt-5">
                  <div className="team-details__top-left">
                    <div className="team-details__top-content">
                      <h3 className="">Intégration SAP Business One : maîtrisez votre ERP de A à Z</h3>
                      <p className="" style={{textAlign: 'justify'}}>
                        SAP Business One est la solution ERP incontournable pour les PME africaines.
                        Permettez-nous de vous l'implémenter de la meilleure des manières.
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
                      <h3 className="">Un audit approfondi de vos besoins</h3>
                      <p className="" style={{textAlign: 'justify'}}>
                      Notre équipe d'experts SAP commencera par auditer minutieusement votre système d'information et process métier. 
                      Cet audit nous permettra d'établir la meilleure feuille de route pour votre projet SAP.
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
                    <h3 className="">Paramétrage sur-mesure de l'ERP</h3>
                    <p className="" style={{textAlign: 'justify'}}>
                    Nous configurerons entièrement SAP Business One selon les spécificités métiers identifiées : plan de comptes personnalisé, 
                    workflow adapté, interfaçage avec vos autres applications.
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
                          <h3 className="">Import simplifié de vos données existantes</h3>
                          <p className="" style={{textAlign: 'justify'}}>
                          Grâce à notre expertise data, nous migrerons rapidement et en toute sérénité vos historiques financiers 
                          et commerciaux vers votre nouvel ERP SAP Business One.
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
                    <h3 className="">Import simplifié de vos données existantes</h3>
                    <p className="" style={{textAlign: 'justify'}}>
                    Grâce à notre expertise data, nous migrerons rapidement et en toute sérénité vos historiques 
                    financiers et commerciaux vers votre nouvel ERP SAP Business One.
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
                          <h3 className="">Formation approfondie de vos équipes</h3>
                          <p className="" style={{textAlign: 'justify'}}>
                          Notre activité de formation SAP certifiée vous donnera toutes les clés pour maîtriser 
                          pleinement votre nouvel outil de gestion au quotidien.<br />
                          Confiez-nous dès à présent la mise en place réussie de votre ERP SAP Business One. 
                          Nos références prestigieuses sur le marché sauront vous convaincre.
                          </p> 

                      </div>
                    </div>
                </div>     
                
              </div>
          </div>
        </div>
      </section> */}



    <section className="team-details bg bg-pattern-7">
        <div className=""></div>
          <div className="container pb-0">
            <div className="team-details__top pb-0">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 mt-0">
                  <div className="team-details__top-left">
                    <div className="team-details__top-content">
                      <h3 className="">Intégration SAP Business One : maîtrisez votre ERP de A à Z</h3>
                      <p className="" style={{textAlign: 'justify'}}>
                        SAP Business One est la solution ERP incontournable pour les PME africaines.
                        Permettez-nous de vous l'implémenter de la meilleure des manières.
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

              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="team-details__top-right ">
                  <div className="team-details__top-content">
                      <h3 className="">Un audit approfondi de vos besoins</h3>
                      <p className="" style={{textAlign: 'justify'}}>
                      Notre équipe d'experts SAP commencera par auditer minutieusement votre système d'information et process métier. 
                      Cet audit nous permettra d'établir la meilleure feuille de route pour votre projet SAP.
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
                  <h3 className="">Paramétrage sur-mesure de l'ERP</h3>
                  <p className="" style={{textAlign: 'justify'}}>
                  Nous configurerons entièrement SAP Business One selon les spécificités métiers identifiées : plan de comptes personnalisé, 
                  workflow adapté, interfaçage avec vos autres applications.
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

            <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="team-details__top-right ">
                    <div className="team-details__top-content">
                        <h3 className="">Import simplifié de vos données existantes</h3>
                        <p className="" style={{textAlign: 'justify'}}>
                        Grâce à notre expertise data, nous migrerons rapidement et en toute sérénité vos historiques financiers 
                        et commerciaux vers votre nouvel ERP SAP Business One.
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
                  <h3 className="">Formation approfondie de vos équipes</h3>
                  <p className="" style={{textAlign: 'justify'}}>
                  Notre activité de formation SAP certifiée vous donnera toutes les clés pour maîtriser pleinement votre nouvel outil de gestion au quotidien.
                  <br/>
                  Confiez-nous dès à présent la mise en place réussie de votre ERP SAP Business One. Nos références prestigieuses sur le marché sauront vous convaincre.
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

            {/*  <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="team-details__top-right ">
                    <div className="team-details__top-content">
                        <h3 className="">Import simplifié de vos données existantes</h3>
                        <p className="" style={{textAlign: 'justify'}}>
                        Grâce à notre expertise data, nous migrerons rapidement et en toute sérénité vos historiques financiers 
                        et commerciaux vers votre nouvel ERP SAP Business One.
                        </p> 

                    </div>
                  </div>
            </div>  */}


          </div>
        </div>
      </div>
    </section>
    <Ctabusiness  />
     
      
    </>
  );
}
