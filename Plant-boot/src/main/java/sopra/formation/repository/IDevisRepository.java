package sopra.formation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import sopra.formation.model.Devis;

public interface IDevisRepository extends  JpaRepository<Devis,Long> {

}
