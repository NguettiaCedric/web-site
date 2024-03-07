import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header2({ scroll, isSearch, handleSearch, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <header className={`main-header header-style-two ${isSearch ? "moblie-search-active" : ""}`}>
                {/* Header Top */}
                <div className="header-top">
                    <div className="inner-container">
                        <div className="top-left">
                            {/* Info List */}
                            <ul className="list-style-one">
                                <li><i className="fa fa-envelope" /> <Link href="/mailto:contact@croissancenumerique.ci">contact@croissancenumerique.ci</Link></li>
                                <li><i className="fa fa-map-marker" /> ATTOBAN, 30 ème arrondissement </li>
                                <li><i className="fa fa-map-marker" /> +225 07 07 17 04 07</li>
                            </ul>
                        </div>
                        <div className="top-right">
                            {/* <ul className="useful-links">
                                <li><Link href="/#">Help</Link></li>
                                <li><Link href="/#">Support</Link></li>
                                <li><Link href="/#">Contact</Link></li>
                            </ul> */}
                           <ul className="social-icon-one" style={{alignItems: 'center',}}>
                                {/* <li><Link href="/#"><span className="fab fa-twitter" /></Link></li> */}
                                <li><Link href="https://www.facebook.com/croissancenumerique?mibextid=ZbWKwL"><span className="fab fa-facebook-square" style={{color:'#ffdd14'}} /></Link></li>
                                <li><Link href="https://www.linkedin.com/company/croissance-num%C3%A9rique/"><span className="fa-brands fa-linkedin" style={{color:'#ffdd14'}}/></Link></li>
                                <li class="theme-btn btn-style-one" style={{marginLeft: '11px',}}><Link href="/page-demo"><span class="btn-title">Demande de demo</span></Link></li>
                                {/* 
                                <li><Link href="/#"><span className="fab fa-facebook-square" /></Link></li>
                                <li><Link href="/#"><span className="fab fa-pinterest-p" /></Link></li>
                                <li><Link href="/#"><span className="fab fa-instagram" /></Link></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Header Top */}
                <div className="header-lower">
                    {/* Main box */}
                    <div className="main-box">
                        <div className="logo-box">
                            <div className="logo"><Link href="/"><img src="/images/logo-cn0.png" style={{ height: '50px' }} alt="" title="Tronis" /></Link></div>
                        </div>
                        {/*Nav Box*/}
                        <div className="nav-outer">
                            <nav className="nav main-menu">
                                <Menu />
                            </nav>
                            {/* Main Menu End*/}
                        </div>
                            {/* Header Search */}
                        {/* <div className="outer-box">
                            <button className="ui-btn ui-btn search-btn" onClick={handleSearch}>
                                <span className="icon lnr lnr-icon-search" />
                            </button>
                            <Link href="/tel:+92(8800)9806" className="info-btn">
                                <i className="icon lnr-icon-phone-handset" />
                                <small>Call Anytime</small>
                                +92 (8800) - 9850
                            </Link>
                        </div> */}
                        <div className="mobile-nav-toggler" onClick={handleMobileMenu}><span className="icon lnr-icon-bars" /></div>
                            {/* Mobile Nav toggler */}
                    </div>
                </div>
                {/* Mobile Menu  */}
                <div className="mobile-menu">
                    <div className="menu-backdrop" onClick={handleMobileMenu} />
                    {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                    <nav className="menu-box">
                        <div className="upper-box">
                            <div className="nav-logo"><Link href="/"><img src="/images/logo-cn0.png" alt=""  /></Link></div>
                            <div className="close-btn" onClick={handleMobileMenu}><i className="icon fa fa-times" /></div>
                        </div>
                        <MobileMenu />
                        <ul className="contact-list-one">
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <i className="icon lnr-icon-phone-handset" />
                                    <span className="title">Mobile</span>
                                    <Link href="+225 07 07 17 04 07">+225 07 07 17 04 07</Link>
                                </div>
                            </li>
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-envelope1" />
                                    <span className="title">Email</span>
                                    <Link href="mailto:contact@croissancenumerique.ci">contact@croissancenumerique.ci</Link>
                                </div>
                            </li>
                            {/* <li>
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-clock" />
                                    <span className="title">Send Email</span>
                                    Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                                </div>
                            </li> */}
                        </ul>
                        <ul className="social-links">
                            <li><Link href="https://www.facebook.com/croissancenumerique?mibextid=ZbWKwL" target="blank"><span className="fab fa-facebook-square" style={{color:'#ffdd14'}} /></Link></li>
                            <li><Link href="https://www.linkedin.com/company/croissance-num%C3%A9rique/" target="blank"><span className="fa-brands fa-linkedin" style={{color:'#ffdd14'}}/></Link></li>
                            
                            {/* <li><Link href="/#"><i className="fab fa-pinterest" /></Link></li>
                            <li><Link href="/#"><i className="fab fa-instagram" /></Link></li> */}
                        </ul>
                    </nav>
                </div>{/* End Mobile Menu */}
                {/* Header Search */}
                {/* <div className="search-popup">
                    <span className="search-back-drop" onClick={handleSearch} />
                    <button className="close-search" onClick={handleSearch}><span className="fa fa-times" /></button>
                    <div className="search-inner">
                        <form method="post" action="">
                            <div className="form-group">
                                <input type="search" name="search-field" placeholder="Search..." required />
                                <button type="submit"><i className="fa fa-search" /></button>
                            </div>
                        </form>
                    </div>
                </div> */}
                {/* End Header Search */}
                {/* Sticky Header  */}
                <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
                    <div className="auto-container">
                        <div className="inner-container">
                            {/*Logo*/}
                            <div className="logo">
                                <Link href="/"><img src="/images/logo-cn.png" alt="" /></Link>
                            </div>
                            {/*Right Col*/}
                            <div className="nav-outer">     
                                {/* Main Menu */}
                                <nav className="main-menu">
                                    <div className="navbar-collapse show collapse clearfix">
                                        <Menu />
                                    </div>
                                </nav>{/* Main Menu End*/}
                                {/*Mobile Navigation Toggler*/}
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><span className="icon lnr-icon-bars" /></div>
                            </div>
                        </div>
                    </div>
                </div>{/* End Sticky Menu */}
            </header >

        </>
    )
}
