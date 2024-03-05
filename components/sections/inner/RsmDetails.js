import dynamic from "next/dynamic";

import Link from "next/link";
import Aboutrsm from "@/components/sections/About-rsm";

export default function RsmDetails() {
  return (
    <>
      {/* Team Details Start */}
      <section className="team-details">
        <div className=""></div>
        <div className="container pb-0">
          <div className="team-details__top pb-0">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="team-details__top-right">
                  <div className="team-details__top-content">
                    <h3 className="">Qu'est-Ce Que SAP RSM ?</h3>
                    <p className="" style={{textAlign: 'justify'}}>
                    SAP RSM (Rural Sourcing Management), Gestion de l'approvisionnement rural en français est une application commerciale mobile reliant les petits exploitants agricoles et les fournisseurs des zones rurales à la chaîne d'approvisionnement des entreprises agroalimentaires mondiales et des entreprises de produits de consommation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="team-details__top-left">
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
      
      {/* Pourquoi SAP */}
        <Aboutrsm />
      
    </>
  );
}
