package sopra.formation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import sopra.formation.model.Commande;

public interface ICommandeRepository extends  JpaRepository<Commande,Long> {

}
