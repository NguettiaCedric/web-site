import Layout from "@/components/layout/Layout"
import RsmDetails from "@/components/sections/inner/RsmDetails"
import PageTitle from "@/components/sections/PageTitle"
import CTA from "@/components/sections/Ctarsm"
import Link from "next/link"

export default function Teampage() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="DEVELOPPEMENT WEB" />
                <section className=''>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6 col-lg-6'>
                                <h2>Développement web</h2>
                                <p className='text-justify' style={{textAlign:'justify'}}>
                                Découvrez notre service de développement web sur mesure, conçu pour transformer vos idées en solutions numériques percutantes. Que vous cherchiez à créer un site web élégant, une application web interactive ou une plateforme e-commerce robuste, notre équipe d'experts en développement web est là pour répondre à vos besoins.
                                </p>
                                <p className='text-justify' style={{textAlign:'justify'}}>
                                Grâce à notre approche personnalisée, nous travaillons en étroite collaboration avec vous à chaque étape du processus, de la conception initiale au déploiement final, pour nous assurer que votre vision devienne une réalité numérique.
                                </p>
                                <p className='text-justify' style={{textAlign:'justify'}}>
                                Avec notre expertise technique, notre engagement envers la qualité et notre souci du détail, nous sommes prêts à relever tous les défis et à vous fournir des solutions web exceptionnelles qui dépassent vos attentes. Confiez-nous votre prochain projet de développement web et laissez-nous vous aider à concrétiser votre vision en ligne.
                                </p>
                                <div className="mt-4">
                                    <Link href="/page-contact" className="theme-btn btn-style-one"><span className="btn-title">Demander un devis</span></Link>
                                </div>
                            </div>
                            <div className='col-md-6 col-lg-6'>
                                <img src="images/resource/dev.jpg" className='img-fluid rounded' alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}