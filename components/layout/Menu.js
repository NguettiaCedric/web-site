import Link from "next/link"

export default function Menu() {

    return (
        <>
            <ul className="navigation">
                <li><Link href="#">Accueil</Link></li>
                <li><Link href="#">A propos</Link></li>
                {/* <li className="current dropdown"><Link href="/">Home</Link>
                    <ul>
                        <li><Link href="/">Home page 01</Link></li>
                        <li><Link href="/index-2">Home page 02</Link></li>
                    </ul>
                </li> */}


                <li className="dropdown"><Link href="#">Services</Link>
                    <ul>
                        <li><Link href="#">Integration de Solutions</Link></li>
                        <li><Link href="">Accompagnement Digital</Link></li>
                        <li><Link href="">Développement web</Link></li>
                    </ul>
                </li>

                <li className="dropdown"><Link href="#">Solutions</Link>
                    <ul>
                        {/* <li><Link href="/page-about">About</Link></li> */}
                        <li><Link href="#">SAP Business One</Link></li>
                        <li><Link href="/page-team">SAP RSM</Link></li>
                        <li><Link href="/page-team-details">Switch</Link></li>
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
                <li><Link href="#">Projets réalisés</Link></li>
                <li><Link href="/page-contact">Contact</Link></li>
            </ul>
        </>
    )
}
