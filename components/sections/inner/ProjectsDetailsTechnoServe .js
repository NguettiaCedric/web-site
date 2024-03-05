import Link from 'next/link'

export default function ProjectsDetailsTechnoServe() {
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
							<h3 className="mb-4 mt-5">DOMAINE : Noix de Cajou</h3>
							<h3 className="mb-4 mt-5">DESTINATAIRES : Coopératives partenaires</h3>
							{/* <p className="">Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Asperiores, repellat aliquid. Est corrupti officiis dignissimos deserunt sunt minima iusto quia saepe tempora consectetur dolor deleniti voluptatum et, eos vitae pariatur molestiae odit quos enim voluptas nobis ullam voluptatem cum iste. Dolore modi, animi optio, dignissimos delectus pariatur similique harum eos. </p> */}
							<p className="mb-5">
								Description du projet : Nassara NASSARA est pionnière au Bénin en matière de production, 
								transformation et exportation des noix de cajou certifiées biologiques et commerce équitable, 
								elle a souhaité avoir un système de suivi et traçabilité afin de contrôler l’acquisition des 
								matières et aussi des relations avec les producteurs avec pour appui de financement TECHNOSERVE BENIN,
							<br />
							Elle a acquis la solution pour assurer ce suivi et gérer les producteurs afin de garantir l’approvisionnement continu de matières pour son usine et améliorer les relations productrices et consommateurs.

							<br />
							Description des services réels fournis dans le cadre de la mission :
							</p>

                            <ul className="list-style-two list-style-black mb-0">
								<li><i className="fa fa-check-circle"></i>Mise en place de la solution ;</li>
								<li><i className="fa fa-check-circle"></i>Enregistrer et constituer la base de données des coopératives partenaires des usines ;</li>
								<li><i className="fa fa-check-circle"></i>Géoréférencer les plantations des producteurs</li>
								<li><i className="fa fa-check-circle"></i>Géoréférencer les magasins installés dans les zones des coopératives partenaires ;</li>						
								<li><i className="fa fa-check-circle"></i>Prévoir la quantité de noix à acheter auprès des coopératives à partir de la production totale estimée par la coopérative ;</li>
								<li><i className="fa fa-check-circle"></i>Voir en temps réel les activités du personnel d’appui aux coopératives ;</li>
								<li><i className="fa fa-check-circle"></i>Utiliser les données numériques pour les audits ;</li>
								<li><i className="fa fa-check-circle"></i>Contrôler la qualité et la transparence au cours de l’approvisionnement des matières premières ;</li>
								<li><i className="fa fa-check-circle"></i>Attribuer un code par zone pour assurer la traçabilité ;</li>
								<li><i className="fa fa-check-circle"></i>La formation du personnel de la structure concernée sur l’utilisation du système ;</li>
								<li><i className="fa fa-check-circle"></i>Un rapport d’activité.</li>

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
