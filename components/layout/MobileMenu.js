'use client'
import Link from "next/link"
import { useState } from 'react'

export default function MobileMenu() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    const handleMobileMenu = () => {
        document.body.classList.remove("mobile-menu-visible")
   }

    return (
        <>
            <ul className="navigation clearfix">
                {/*Keep This Empty / Menu will come through Javascript*/}
                <li className=""><Link onClick={() => { handleMobileMenu()}} href="/">Accueil</Link></li>                    
                <li className=""><Link onClick={() => { handleMobileMenu()}} href="/a-propos">A propos</Link></li>                    
                               
                {/* <li><Link href="/page-about">About</Link></li> */}
                <li className="dropdown"><Link href="/page-team">Services</Link>
                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                        <li><Link onClick={() => { handleMobileMenu()}} href="/integration-de-solution">Integration De Solutions</Link></li>
                        <li><Link onClick={() => { handleMobileMenu()}} href="/accompagnement-digital">Accompagnement Digital</Link></li>
                        <li><Link onClick={() => { handleMobileMenu()}} href="/developpement-web">Développement Web</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => handleClick(2)}><i className="fa fa-angle-down" /></div>
                </li>
                <li className="dropdown"><Link href="/page-services">Solutions</Link>
                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                        <li><Link onClick={() => { handleMobileMenu()}} href="/sap-business-one">SAP Business One</Link></li>
                        <li><Link onClick={() => { handleMobileMenu()}} href="/sap-rsm">SAP RSM</Link></li>
                        <li><Link onClick={() => { handleMobileMenu()}} href="/switch">Switch</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => handleClick(3)}><i className="fa fa-angle-down" /></div>
                </li>

                <li className=""><Link onClick={() => { handleMobileMenu()}} href="/page-projets">Projets réalisés</Link>
                    {/* <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                        <li><Link href="/page-projects">Projects Grid</Link></li>
                        <li><Link href="/page-project-details">Project Details</Link></li>
                    </ul> */}
                    {/* <div className="dropdown-btn" onClick={() => handleClick(4)}><i className="fa fa-angle-down" /></div> */}
                </li>

                <li className=""><Link href="#">Blog</Link></li> 

                <li className=""><Link onClick={() => { handleMobileMenu()}} href="/page-contact">Contact</Link></li> 
                <li className=""><Link onClick={() => { handleMobileMenu()}} href="/page-demo">Demande Demo</Link></li> 
                
                {/* <li className="dropdown"><Link href="/news-grid">News</Link>
                    <ul style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                        <li><Link href="/news-grid">News Grid</Link></li>
                        <li><Link href="/news-details">News Details</Link></li>
                    </ul>
                    </li>
                <li><Link href="/page-contact">Contact</Link></li> */}
                {/* <div className="dropdown-btn" onClick={() => handleClick(5)}><i className="fa fa-angle-down" /></div> */}
            </ul>

        </>
    )
}
