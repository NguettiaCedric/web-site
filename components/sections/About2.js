import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
  ssr: false,
})
import Link from "next/link"

export default function About2() {
    return (
        <>

            <section className="about-section-two">
                <div className="anim-icons">
                    <span className="icon icon-line4" />
                    <span className="icon icon-line5" />
                    <span className="icon icon-arrow1 bounce-x" />
                    <span className="icon icon-speaker zoom-one" />
                </div>
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="row">
                            {/* Content Column */}
                            <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                                <div className="inner-column">
                                    <div className="sec-title">
                                        <span className="sub-title">Welcome to Agency</span>
                                        <h2>Leading the best digital agency in town</h2>
                                        <div className="text">There are many variations of simply free text passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't slightly.</div>
                                    </div>
                                    <div className="row">
                                        <div className="info-box col-lg-6 col-md-6">
                                            <div className="inner">
                                                <h5 className="title"><i className="icon fa fa-circle-arrow-right" /> Digital marketing</h5>
                                                <div className="text">Knowledge of technologies rules better than anyone</div>
                                            </div>
                                        </div>
                                        <div className="info-box col-lg-6 col-md-6">
                                            <div className="inner">
                                                <h5 className="title"><i className="icon fa fa-circle-arrow-right" /> Quality results</h5>
                                                <div className="text">Knowledge of technologies rules better than anyone</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Skills*/}
                                    <div className="skills">
                                        {/*Skill Item*/}
                                        <div className="skill-item">
                                            <div className="skill-header">
                                                <h5 className="skill-title">Marketing</h5>
                                            </div>
                                            <div className="skill-bar">
                                                <div className="bar-inner">
                                                    <div className="bar progress-line" style={{width:"77%"}}>
                                                        <div className="skill-percentage">
                                                            <div className="count-box">
                                                                <CounterUp count={77} time={3} />
                                                                %</div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom-box">
                                        <Link href="/page-about" className="theme-btn btn-style-one hvr-dark"><span className="btn-title">Discover more</span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* Image Column */}
                            <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                                <div className="inner-column wow fadeInLeft">
                                    <div className="image-box">
                                        <span className="icon-dots2" />
                                        <figure className="image-1 overlay-anim wow fadeInUp"><img src="/images/resource/about2-1.jpg" alt="" /></figure>
                                        <figure className="image-2 overlay-anim wow fadeInRight"><img src="/images/resource/about2-2.jpg" alt="" /></figure>
                                        <div className="exp-box">
                                            <div className="inner">
                                                <i className="icon flaticon-promotion" />
                                                <span className="count">38+</span>
                                                <h6 className="title">Work Experience</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
