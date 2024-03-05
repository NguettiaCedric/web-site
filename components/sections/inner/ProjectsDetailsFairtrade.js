import Link from 'next/link'

export default function ProjectsDetailsFairtrade() {
    return (
        <>

<section className="project-details">
		<div className="container">
			<div className="row">
				<div className="col-xl-12">
					<div className="project-details__top">
						<div className="project-details__img"> <img src="images/resource/project-details.jpg" alt=""/> </div>
					</div>
				</div>
			</div>
			{/* <div className="row justify-content-center">
				<div className="col-xl-10">
					<div className="project-details__content-right">
						<div className="project-details__details-box">
							<div className="row">
								<div className="col">
									<p className="project-details__client">Date</p>
									<h4 className="project-details__name">10 January, 2023</h4>
								</div>
								<div className="col">
									<p className="project-details__client">Client</p>
									<h4 className="project-details__name">Kodesolution Ltd</h4>
								</div>
								<div className="col">
									<p className="project-details__client">Website</p>
									<h4 className="project-details__name">www.domain.com</h4>
								</div>
								<div className="col">
									<p className="project-details__client">Location</p>
									<h4 className="project-details__name">New York, USA</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}
			<div className="project-details__content">
				<div className="row">
					<div className="col-xl-12">
						<div className="project-details__content-left">
							<h3 className="mb-4 mt-5">DOMAINE : Cacao</h3>
							<h3 className="mb-4 mt-5">DESTINATAIRES : Coopératives partenaires</h3>
							{/* <p className="">Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Asperiores, repellat aliquid. Est corrupti officiis dignissimos deserunt sunt minima iusto quia saepe tempora consectetur dolor deleniti voluptatum et, eos vitae pariatur molestiae odit quos enim voluptas nobis ullam voluptatem cum iste. Dolore modi, animi optio, dignissimos delectus pariatur similique harum eos. </p> */}
							<p className="mb-5">
							Implémenter le Système de Management pour garantir l’approvisionnement des matières premières et assurer la traçabilité au niveau des coops certifiées Fairtrade

							 <br />

							Description des services réels fournis dans le cadre de la mission :
							</p>

                            <ul className="list-style-two list-style-black mb-0">
								<li><i className="fa fa-check-circle"></i>Mise en place de l'instance ;</li>
								<li><i className="fa fa-check-circle"></i>Enregistrer et constituer la base de données des coopératives partenaires des usines ;</li>
								<li><i className="fa fa-check-circle"></i>Géoréférencer les plantations des producteurs ;</li>
								<li><i className="fa fa-check-circle"></i>Géoréférencer les magasins installés dans les zones des coopératives partenaires ;</li>

                            </ul>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-xl-12">
					<div className="project-details__pagination-box">
						<ul className="project-details__pagination list-unstyled clearfix">
							{/* <li className="next">
								<div className="icon"> <Link href="/#" aria-label="Previous"><i className="lnr lnr-icon-arrow-left"></i></Link> </div>
								<div className="content">Previous</div>
							</li> */}
							<li className="count"><Link href="/#"></Link></li>
							<li className="count"><Link href="/#"></Link></li>
							<li className="count"><Link href="/#"></Link></li>
							<li className="count"><Link href="/#"></Link></li>
							{/* <li className="previous">
								<div className="content">Next</div>
								<div className="icon"> <Link href="/#" aria-label="Previous"><i className="lnr lnr-icon-arrow-right"></i></Link> </div>
							</li> */}
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
        </>
    )
}
