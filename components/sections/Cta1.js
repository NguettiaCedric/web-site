
import Link from "next/link"

export default function Cta1() {
    return (
        <>

            <section className="call-to-action">
                <div className="bg bg-image" style={{ backgroundImage: 'url(./images/background/bg-rsm.png)' }} />
                <div className="auto-container">
                    <div className="outer-box wow fadeIn">
                        <h2 className="title"> Croissance Numerique <br />
                            Le défi de la transformation digitale</h2>
                        <Link href="/page-demo" className="theme-btn btn-style-one light"><span className="btn-title">Demander une démo</span></Link>
                    </div>
                </div>
            </section>
        </>
    )
}
