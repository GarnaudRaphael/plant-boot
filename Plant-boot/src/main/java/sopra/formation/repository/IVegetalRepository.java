package sopra.formation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import sopra.formation.model.Vegetal;

public interface IVegetalRepository extends  JpaRepository<Vegetal,Long> {

}
