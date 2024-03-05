import Link from 'next/link'

export default function ProjectsDetailsCadesa() {
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
							<h3 className="mb-4 mt-5">DESTINATAIRES : Coopératives partenaires dgdgdgdg</h3>
							{/* <p className="">Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Asperiores, repellat aliquid. Est corrupti officiis dignissimos deserunt sunt minima iusto quia saepe tempora consectetur dolor deleniti voluptatum et, eos vitae pariatur molestiae odit quos enim voluptas nobis ullam voluptatem cum iste. Dolore modi, animi optio, dignissimos delectus pariatur similique harum eos. </p> */}
							<p className="mb-5">
							Description du projet : Cargill West Africa stations d'achat, 
							d'équipes commerciales, de développement durable et de recherche sur les cultures travaille en étroite collaboration
							avec les producteurs de cacao et les communautés pour s'approvisionner en fèves cultivées localement pour notre
							opération de transformation de pointe qui produit des produits à base de cacao pour les clients de l'alimentation
							et de la confiserie du monde entier. Elle utilise la solution pour la gestion des coopératives et assurer
							la traçabilité de cacao. <br />

							Description des services réels fournis dans le cadre de la mission :
							</p>

                            <ul className="list-style-two list-style-black mb-0">
								<li><i className="fa fa-check-circle"></i>Mise en place de l'instance du système de Management</li>
								<li><i className="fa fa-check-circle"></i>Création (lecture, mise à jour, suppression) d'une certification Farmer sur le Web</li>
								<li><i className="fa fa-check-circle"></i>Créer (lire, mettre à jour, supprimer) un quota sur le Web</li>
								<li><i className="fa fa-check-circle"></i>Effectuer un achat sur le mobile pour un agriculteur avec un ou deux quotas (UTZ et RFA). Tous les scénarios (single Bag, multi-bag, bulk, retardé) et les variations de celui-ci.</li>						
								<li><i className="fa fa-check-circle"></i>Lors du transfert des grains, la sélection de l'entrepôt est effectuée par défaut sur le dernier entrepôt</li>
								<li><i className="fa fa-check-circle"></i>Enregistrement de la création du compte</li>
								<li><i className="fa fa-check-circle"></i>Dépôt d'épargne</li>
								<li><i className="fa fa-check-circle"></i>Retrait d'épargne</li>
								<li><i className="fa fa-check-circle"></i>Traçabilité</li>
								<li><i className="fa fa-check-circle"></i>Connexion du système de traçabilité avec une solution ERP</li>

                            </ul>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-xl-12">
					<div className="project-details__pagination-box">
						<ul className="project-details__pagination list-unstyled clearfix">
							<li className="next">
								<div className="icon"> <Link href="/#" aria-label="Previous"><i className="lnr lnr-icon-arrow-left"></i></Link> </div>
								<div className="content">Previous</div>
							</li>
							<li className="count"><Link href="/#"></Link></li>
							<li className="count"><Link href="/#"></Link></li>
							<li className="count"><Link href="/#"></Link></li>
							<li className="count"><Link href="/#"></Link></li>
							<li className="previous">
								<div className="content">Next</div>
								<div className="icon"> <Link href="/#" aria-label="Previous"><i className="lnr lnr-icon-arrow-right"></i></Link> </div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
        </>
    )
}
