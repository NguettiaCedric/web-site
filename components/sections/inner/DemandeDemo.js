
import Link from 'next/link'

export default function DemandeDemo() {
    return (
        <>
			<section className="contact-details">
				<div className="container ">
					<div className="row">
						<div className="sec-title">
							<span className="sub-title">Envoi de mail</span>
							<h2>veuillez remplir ces champs SVP</h2>
						</div>
						<div className="col-xl-7 col-lg-6">
							<form id="contact_form" name="contact_form" className="" action="" method="get">
								<div className="row">
									<div className="col-sm-6">
									<label for="name" style={{fontWeight: 'bold'}} >Nom & Prénoms</label><span class="text-danger"> *</span>
										<div className="mb-3">
											<input id='name' name="name" className="form-control" type="text" placeholder="Nom & Prénoms"/>
										</div>
									</div>
									<div className="col-sm-6">
										<label for="email" style={{fontWeight: 'bold'}} >Email</label><span class="text-danger"> *</span>
										<div className="mb-3">
											<input id='email' name="form_email" className="form-control required email" type="email" placeholder="Email"/>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-6">
										<label for="telephone" style={{fontWeight: 'bold'}} >Téléphone</label><span class="text-danger"> *</span>
										<div className="mb-3">
											<input id='telephone' name="telephone" className="form-control required" type="text" placeholder="Telephone"/>
										</div>
									</div>
									<div className="col-sm-6">
										{/* <div className="mb-3">
											<input name="form_phone" className="form-control" type="text" placeholder="Industrie"/>
										</div> */}
										<div className="mb-3">
											<label for="industrie" style={{fontWeight: 'bold'}} >Industrie</label><span class="text-danger"> *</span>
											<select id='industrie' name="industrie" className="form-control">
												<option value="">Sélectionnez une industrie</option>
												<option value="Distribution et commerce de gros">Distribution et commerce de gros</option>
												<option value="Manufacturier">Manufacturier</option>
												<option value="Alimentation">Alimentation</option>
												<option value="Agriculture">Agriculture</option>
												<option value="Pharmaceutique/Produits naturels">Pharmaceutique/Produits naturels</option>
												<option value="Produits de consommation">Produits de consommation</option>
												<option value="Industrie chimique">Industrie chimique</option>
												<option value="Energie et mines">Energie et mines</option>
												<option value="Vente au détail">Vente au détail</option>
												<option value="Vente au détail">Vente au détail</option>
												<option value="Services">Services</option>
												<option value="Autre">Autre</option>
												{/* Ajoutez autant d'options que nécessaire avec les valeurs appropriées */}
											</select>
										</div>

									</div>
								</div>
								<div className="row">
									<div className="col-sm-6">
										<label for="compagnie" style={{fontWeight: 'bold'}} >Compagnie</label><span class="text-danger"> *</span>
										<div className="mb-3">
											<input id='compagnie' name="compagnie" className="form-control required" type="text" placeholder="Croissance Numerique"/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="mb-3">
											<label for="objet" style={{fontWeight: 'bold'}} >Objet</label><span class="text-danger"> *</span>
											<select id='objet' name="objet" className="form-control">
												<option value="Choisisez une démonstration">Choisisez une démonstration</option>
												<option value="Demo SAP Business One">Demo SAP Business One</option>
												<option value="Demo RSM">Demo RSM</option>
												{/* Ajoutez autant d'options que nécessaire avec les valeurs appropriées */}
											</select>
										</div>
									</div>
								</div>
								<div className="mb-3">
								<label for="Message" style={{fontWeight: 'bold'}} >Message</label><span class="text-danger"> *</span>
									<textarea name="form_message" className="form-control required" rows="7" placeholder="Message"></textarea>
								</div>
								<div className="mb-3">
									<input name="form_botcheck" className="form-control" type="hidden" value="" />
									<button type="submit" className="theme-btn btn-style-one me-3" data-loading-text="Please wait..."><span className="btn-title">Envoyer</span></button>
									{/* <button type="reset" className="theme-btn btn-style-one bg-theme-color5"><span className="btn-title">Reset</span></button> */}
								</div>
							</form>
						</div>
						<div className="col-xl-5 col-lg-6">
							<div className="contact-details__right">
								<div className="sec-title">
									{/* <span className="sub-title">Need any help?</span> */}
									{/* <h2>Get in touch with us</h2> */}
									{/* <div className="text">Lorem ipsum is simply free text available dolor sit amet consectetur notted adipisicing elit
									sed do eiusmod tempor incididunt simply dolore magna.</div> */}
								</div>
								<ul className="list-unstyled contact-details__info pt-5">
									<li>
										<div className="icon">
											<span className="lnr-icon-phone-plus"></span>
										</div>
										<div className="text">
											<h6>Contactez-nous</h6>
											<a href="tel:980089850">+225 07 07 17 04 07</a>
										</div>
									</li>
									<li>
										<div className="icon">
											<span className="lnr-icon-envelope1"></span>
										</div>
										<div className="text">
											<h6>Email</h6>
											<a href="mailto:contact@croissancenumerique.ci">contact@croissancenumerique.ci</a>
										</div>
									</li>
									<li>
										<div className="icon">
											<span className="lnr-icon-location"></span>
										</div>
										<div className="text">
											<h6>Riviera Attoban</h6>
											<span>30ème Arrondissement</span>
										</div>
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
