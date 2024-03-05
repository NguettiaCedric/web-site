import Layout from "@/components/layout/Layout"
import RsmDetails from "@/components/sections/inner/RsmDetails"
import PageTitle from "@/components/sections/PageTitle"
import CTA from "@/components/sections/Ctarsm"
import Link from "next/link"

export default function Teampage() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="ACCOMPAGNEMENT DIGITAL" />
                <section className=''>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6 col-lg-6'>
                                <img src="images/resource/social-media.png" className='img-fluid rounded' alt="" />
                            </div>
                            <div className='col-md-6 col-lg-6'>
                                <h2>Accompagnement Digital</h2>
                                <p className='text-justify' style={{textAlign:'justify'}}>
                                Que vous soyez une entreprise établie cherchant à renforcer sa présence en ligne ou une start-up ambitieuse cherchant à développer sa stratégie numérique, notre équipe d'experts en accompagnement digital est là pour vous guider à chaque étape du parcours.
                                </p>
                                <p className='text-justify' style={{textAlign:'justify'}}>
                                De la définition de votre stratégie digitale à la mise en œuvre de campagnes de marketing numérique efficaces, nous travaillons en étroite collaboration avec vous pour identifier les opportunités, surmonter les défis et atteindre vos objectifs commerciaux.
                                </p>
                                <p className='text-justify' style={{textAlign:'justify'}}>
                                Avec notre approche axée sur les résultats, notre expertise multidisciplinaire et notre engagement envers votre succès, nous sommes prêts à être votre partenaire de confiance dans votre transformation digitale. Confiez-nous votre vision et laissez-nous vous accompagner dans votre voyage vers le succès numérique.
                                </p>
                                <div className="mt-4">
                                    <Link href="/page-contact" className="theme-btn btn-style-one"><span className="btn-title">Demander un devis</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}