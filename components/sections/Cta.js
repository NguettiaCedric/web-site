
import Link from "next/link"

export default function Cta() {
    return (
        <>

            <section className="call-to-action">
                <div className="bg bg-image" style={{ backgroundImage: 'url(./images/background/1.jpg)' }} />
                <div className="auto-container">
                    <div className="outer-box wow fadeIn">
                        <figure className="small-image"><img src="/images/resource/img.jpg" alt="" /></figure>
                        <h3 className="title">Croissance Numerique <span className="selected">l'accélérateur de la transition</span> <br />digitale du secteur agricole <br />en Afrique francophone</h3>
                        <Link href="/page-contact" className="theme-btn btn-style-one light"><span className="btn-title">En savoir plus</span></Link>
                    </div>
                </div>
            </section>
        </>
    )
}