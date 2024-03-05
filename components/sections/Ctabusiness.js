
import Link from "next/link"

export default function Ctabusiness() {
    return (
        <>

            <section className="call-to-action">
                <div className="bg bg-image" style={{ backgroundImage: 'url(./images/background/bg-sap.png)' }} />
                <div className="auto-container">
                    <div className="outer-box wow fadeIn">
                        <h2 className="title"> SAP Business One ! Explorez la puissance de SAP Business One, la solution intégrée conçue pour transformer la gestion d'entreprise</h2>
                        <Link href="/page-contact" className="theme-btn btn-style-one light"><span className="btn-title">Demander une démo</span></Link>
                    </div>
                </div>
            </section>
        </>
    )
}
