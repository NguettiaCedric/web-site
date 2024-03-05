
import Link from "next/link"

export default function Ctarsm() {
    return (
        <>

            <section className="call-to-action">
                <div className="bg bg-image" style={{ backgroundImage: 'url(./images/background/bg-rsm.png)' }} />
                <div className="auto-container">
                    <div className="outer-box wow fadeIn">
                        <h2 className="title"> SAP RSM !
Découvrez la puissance de SAP RSM, la solution intégrée conçue pour révolutionner la gestion agricole.</h2>
                        <Link href="/page-contact" className="theme-btn btn-style-one light"><span className="btn-title">Demander une démo</span></Link>
                    </div>
                </div>
            </section>
        </>
    )
}
