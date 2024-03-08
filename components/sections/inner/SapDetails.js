import dynamic from "next/dynamic";
import CtaBusiness from "@/components/sections/Ctabusiness"
import Link from "next/link";
import About2 from "@/components/sections/About2";

export default function SapDetails() {
  return (
    <>
      {/* Team Details Start */}
      <section className="team-details">
        <div className="container pb-0">
          <div className="team-details__top pb-0">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
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
                    <h3 className="">Qu'est-ce que SAP Business One ?</h3>
                    <p className="" style={{textAlign: 'justify'}}>
                      SAP Business One est une solution de gestion complète qui
                      répond aux besoins en constante évolution des petites et
                      moyennes entreprises en croissance. Grâce à son
                      implantation facile, à son interface conviviale et à sa
                      grande puissance, elle aide les entreprises à mieux gérer
                      chacun des aspects de leurs opérations quotidiennes.
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
      
      {/* Pourquoi SAP */}
        <About2 />
      <CtaBusiness />
      <section className='py-5 container'>
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
      </section>
    </>
  );
}
