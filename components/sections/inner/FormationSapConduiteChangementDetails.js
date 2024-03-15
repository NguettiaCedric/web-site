import dynamic from "next/dynamic";

import Link from "next/link";
import Aboutrsm from "@/components/sections/About-rsm";
import Ctarsm from "../Ctarsm";
import Cta from "../Cta";
import Cta1 from "../Cta1";

export default function FormationSapConduiteChangementDetails() {
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
                      <h3 className="">Formation SAP et conduite du changement : s'approprier pleinement vos outils SAP</h3>
                      <p className="" style={{textAlign: 'justify'}}>
                        Notre équipe d'experts certifiés SAP vous accompagne dans l'adoption 
                        réussie de vos solutions SAP Business One, SAP RSM ou SAP s/4 HANA.
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
                      <h3 className="">Programmes de formation sur-mesure</h3>
                      <p className="" style={{textAlign: 'justify'}}>
                      Nous élaborerons le plan de formation le plus adapté à vos 
                      besoins et à ceux de vos équipes utilisatrices, du débutant à l'expert SAP.
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
                    <h3 className="">Formations présentielles et e-learning</h3>
                    <p className="" style={{textAlign: 'justify'}}>
                    Vous bénéficierez de sessions pratiques en salle ou de parcours de formations digitales, selon vos contraintes.
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
                          <h3 className="">Accompagnement au changement</h3>
                          <p className="" style={{textAlign: 'justify'}}>
                          Par des ateliers dédiés, nous vous aiderons à préparer et mener à bien la transition vers vos nouveaux outils SAP.
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
                    <h3 className="">Support de suivi après formations</h3>
                    <p className="" style={{textAlign: 'justify'}}>
                       Notre expertise reste à votre disposition pour répondre à vos questions après les sessions et assurer la montée en compétence.
                      <br />
                      Confiez-nous dès aujourd'hui l'appropriation optimale de vos solutions SAP grâce à notre expertise reconnue en formation et conduite du changement.
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
      </section> */}


      {/* ********************************     ********************************** */}

      <section className="team-details bg bg-pattern-7">
        <div className=""></div>
          <div className="container pb-0">
            <div className="team-details__top pb-0">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 mt-0">
                  <div className="team-details__top-left">
                    <div className="team-details__top-content">
                      <h3 className="">Formation SAP et conduite du changement : s'approprier pleinement vos outils SAP</h3>
                      <p className="" style={{textAlign: 'justify'}}>
                        Notre équipe d'experts certifiés SAP vous accompagne dans l'adoption réussie de vos solutions SAP Business One, SAP RSM ou SAP s/4 HANA.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="team-details__top-right ">
                    <div className="team-details__top-content">
                        <h3 className="">Programmes de formation sur-mesure</h3>
                        <p className="" style={{textAlign: 'justify'}}>
                        Nous élaborerons le plan de formation le plus adapté à vos besoins 
                        et à ceux de vos équipes utilisatrices, du débutant à l'expert SAP.
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
                  <h3 className="">Formations présentielles et e-learning</h3>
                  <p className="" style={{textAlign: 'justify'}}>
                  Vous bénéficierez de sessions pratiques en salle ou de parcours de formations digitales, selon vos contraintes.
                  </p>                    
                </div>                 
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="team-details__top-right ">
                    <div className="team-details__top-content">
                        <h3 className="">Accompagnement au changement</h3>
                        <p className="" style={{textAlign: 'justify'}}>
                        Par des ateliers dédiés, nous vous aiderons à préparer et mener à bien la transition vers vos nouveaux outils SAP.
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
                  <h3 className="">Support de suivi après formations</h3>
                  <p className="" style={{textAlign: 'justify'}}>
                    Notre expertise reste à votre disposition pour répondre à vos questions après les sessions et assurer la montée en compétence.
                  <br />
                  Confiez-nous dès aujourd'hui l'appropriation optimale de vos solutions SAP grâce à notre expertise reconnue en formation et conduite du changement.
                  </p>                    
                </div>                 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <Ctarsm  /> */}
    <Cta1 />
      
    </>
  );
}
