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
      <section className='container py-5'>
        <div className='row'>
        <div className="col-xl-6 col-lg-6 col-md-6 d-flex align-items-center">
          <div className="team-details__top-left">
            <div className="team-details__top-img">
              {" "}
              <img src="images/resource/sap-app.png" alt="" />
            </div>
          </div>
        </div>
          <div className='col-xl-6 col-lg-6 col-md-6'>
              <div className="team-details__top-right">
                <div className="team-details__top-content">
                  <p className="" style={{textAlign: 'justify'}}>
                  SAP Business One est un ERP complet qui intègre de manière standard les fonctionnalités universelles essentielles à toute entreprise :
                  </p>
                    <div className="info-box">
                        <div className="inner">
                            <h5 className="title"><i className="icon fa fa-circle-check" />Administration des ventes,</h5>
                        </div>
                    </div>
                    <div className="info-box">
                        <div className="inner">
                            <h5 className="title"><i className="icon fa fa-circle-check" />Comptabilité et gestion financière,</h5>
                        </div>
                    </div>
                    <div className="info-box">
                        <div className="inner">
                            <h5 className="title"><i className="icon fa fa-circle-check" />Stocks et logistique,</h5>
                        </div>
                    </div>
                    <div className="info-box">
                        <div className="inner">
                            <h5 className="title"><i className="icon fa fa-circle-check" />Gestion de projet,</h5>
                        </div>
                    </div>
                    <div className="info-box">
                        <div className="inner">
                            <h5 className="title"><i className="icon fa fa-circle-check" />Service client,</h5>
                        </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}
