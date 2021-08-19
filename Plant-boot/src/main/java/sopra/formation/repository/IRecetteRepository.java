package sopra.formation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import sopra.formation.model.Recette;

public interface IRecetteRepository extends  JpaRepository<Recette,Long> {

}
