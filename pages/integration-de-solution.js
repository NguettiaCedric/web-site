import Layout from "@/components/layout/Layout"
import RsmDetails from "@/components/sections/inner/RsmDetails"
import PageTitle from "@/components/sections/PageTitle"
import CTA from "@/components/sections/Ctarsm"
import Link from "next/link"

export default function Teampage() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="INTEGRATION DE SOLUTION" />
                <section className=''>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6 col-lg-6'>
                                <img src="images/resource/sap-1.jpg" className='img-fluid rounded' alt="" />
                            </div>
                            <div className='col-md-6 col-lg-6'>
                                <h2>Intégration de SAP Business One</h2>
                                <p className='text-justify' style={{textAlign:'justify'}}>
                                Découvrez SAP Business One, la solution de gestion d'entreprise conçue pour propulser votre entreprise vers de nouveaux sommets. Avec son intégration complète des processus commerciaux, sa personnalisation flexible et ses capacités avancées d'analyse, SAP Business One simplifie la gestion quotidienne tout en offrant une visibilité accrue et une prise de décision éclairée. Ne laissez pas les défis opérationnels freiner votre croissance ; explorez dès aujourd'hui comment SAP Business One peut dynamiser votre entreprise et la mener vers le succès.
                                </p>
                                
                                <div className="mt-4">
                                    <Link href="/page-contact" className="theme-btn btn-style-one"><span className="btn-title">Demander un devis</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className='row py-5'>
                            <div className='col-md-6 col-lg-6'>
                                <h2>Intégration de SAP RSM</h2>
                                <p className='text-justify' style={{textAlign:'justify'}}>
                                Découvrez SAP RSM, la solution de gestion agricole innovante qui révolutionne la façon dont les exploitants agricoles gèrent leurs opérations. Avec SAP RSM, vous bénéficiez d'une suite complète d'outils conçus pour simplifier la gestion des cultures, améliorer la traçabilité des produits, optimiser la planification des cultures et maximiser la productivité. Que vous soyez un petit agriculteur ou une grande exploitation agricole, SAP RSM vous offre la possibilité de prendre des décisions éclairées basées sur des données en temps réel, de garantir la durabilité de vos pratiques agricoles et de répondre aux exigences croissantes en matière de traçabilité alimentaire.
                                </p>
                                
                                <div className="mt-4">
                                    <Link href="/page-contact" className="theme-btn btn-style-one"><span className="btn-title">Demander un devis</span></Link>
                                </div>
                            </div>
                            <div className='col-md-6 col-lg-6'>
                                <img src="images/resource/sap-rural.png" className='img-fluid rounded' alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}