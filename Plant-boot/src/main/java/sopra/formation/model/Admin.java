package sopra.formation.model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("admin")
public class Admin extends Personne {

	public Admin() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Admin(int id, Long version, String nom, String prenom, String adresseMail, String motDePasse,
			String pseudo) {
		super(id, version, nom, prenom, adresseMail, motDePasse, pseudo);
		// TODO Auto-generated constructor stub
	}



}
