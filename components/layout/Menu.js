import Link from "next/link"

export default function Menu() {

    return (
        <>
            <ul className="navigation">
                <li><Link href="/">Accueil</Link></li>
                <li><Link href="/a-propos">A propos</Link></li>
                {/* <li className="current dropdown"><Link href="/">Home</Link>
                    <ul>
                        <li><Link href="/">Home page 01</Link></li>
                        <li><Link href="/index-2">Home page 02</Link></li>
                    </ul>
                </li> */}


                <li className="dropdown"><Link href="#">Services</Link>
                    <ul className="scrollable-menu">
                        <li><Link  className="menu-fs" href="/integration-sap-business-one">Intégration SAP Business One</Link></li>
                        <li><Link className="menu-fs"  href="/integration-sap-rsm">Intégration SAP RSM</Link></li>
                        <li><Link  className="menu-fs" href="/developpement-web">Développement web</Link></li>
                        <li><Link  className="menu-fs" href="/formation-sap-conduite-du-changement">Formation SAP & Conduite du changement</Link></li>
                        <li><Link  className="menu-fs" href="/support-maintenance">Support & Maintenance</Link></li>
                        <li><Link  className="menu-fs" href="/audit-de-systeme-information">Audit de Système d'information</Link></li>
                        <li><Link  className="menu-fs" href="/consulting-metier">Consulting métier</Link></li>
                        <li><Link  className="menu-fs" href="/data-analytics">Data Analytics</Link></li>
                        <li><Link  className="menu-fs" href="/cyber-securite">Cybersécurité</Link></li>
                    </ul>
                </li>

                {/* <li><Link  className="menu-fs" href="/support-maintenance">Support & Maintenance</Link></li> */}
                {/* <li><Link  className="menu-fs" href="/accompagnement-digital">Accompagnement Digital</Link></li> */}


                <li className="dropdown"><Link href="#">Solutions</Link>
                    <ul>
                        {/* <li><Link href="/page-about">About</Link></li> */}
                        <li><Link href="/sap-business-one">SAP Business One</Link></li>
                        <li><Link href="/sap-rsm">SAP RSM</Link></li>
                        <li><Link href="/switch">Switch</Link></li>
                        {/* <li><Link href="/formation">Formation</Link></li> */}
                    </ul>
                </li>
               
                {/* <li className="dropdown"><Link href="/page-projects">Projects</Link>
                    <ul>
                        <li><Link href="/page-projects">Projects Grid</Link></li>
                        <li><Link href="/page-project-details">Project Details</Link></li>
                    </ul>
                </li> */}
                {/* <li className="dropdown"><Link href="/news-grid">News</Link>
                    <ul>
                        <li><Link href="/news-grid">News Grid</Link></li>
                        <li><Link href="/news-details">News Details</Link></li>
                    </ul>
                </li> */}
                <li><Link href="/page-projets">Projets réalisés</Link></li>
                <li><Link href="#">Blog</Link></li>
                {/* <li><Link href="/page-demo">Demande de demo</Link></li> */}
                <li><Link href="/page-contact">Contact</Link></li>
                
            </ul>
        </>
    )
}
