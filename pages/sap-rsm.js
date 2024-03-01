import Layout from "@/components/layout/Layout"
import RsmDetails from "@/components/sections/inner/RsmDetails"
import PageTitle from "@/components/sections/PageTitle"
import CTA from "@/components/sections/Ctarsm"
import Link from "next/link"

export default function Teampage() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="SAP RSM" />
                <RsmDetails  />
                <CTA  />
                <section  className="auto-container" style={{backgroundColor: '#f5f5f5;'}}>
        <div className="container" data-aos="fade-up">
            <div className="row ">
                <div className="col-lg-6 video-box">
                    <img src="images/resource/rsm-phone.png" alt="" />
                </div>

                <div className="col-lg-6 d-flex flex-column justify-content-center about-content">

                    <p style={{textAlign:'justify'}}>
                        Connectez les petits exploitants agricoles à votre chaîne d’approvisionnement agricole et obtenez
                        une transparence totale sur la source de vos matières premières. Avec la solution SAP Rural Sourcing
                        Management, vous pouvez mieux gérer vos données de durabilité grâce à des informations enregistrées
                        numériquement sur les producteurs, leurs exploitations agricoles et leurs communautés à chaque
                        niveau de la chaîne de valeur.
                    </p>

                    <div className="info-box">
                        <div className="inner">
                            <h5 className="title"><i className="icon fa fa-circle-arrow-right" />CAPACITÉS DE SUIVI ET DE TRAÇABILITÉ, DE LA FERME À LA TABLE</h5>
                        </div>
                    </div>
                    <div className="info-box">
                        <div className="inner">
                            <h5 className="title"><i className="icon fa fa-circle-arrow-right" />ANALYSE DE L'APPROVISIONNEMENT EN MATIÈRES PREMIÈRES AGRICOLES</h5>
                        </div>
                    </div>
                    <div className="info-box">
                        <div className="inner">
                            <h5 className="title"><i className="icon fa fa-circle-arrow-right" />RESPECT DE LA RÉGLEMENTATION AGRICOLE</h5>
                            <div className="text" style={{textAlign:'justify'}}>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                    <Link href="/page-contact" className="theme-btn btn-style-one"><span className="btn-title">Demander une démo</span></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
            </Layout>
        </>
    )
}