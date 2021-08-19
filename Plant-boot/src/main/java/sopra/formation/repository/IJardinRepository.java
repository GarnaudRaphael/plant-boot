package sopra.formation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import sopra.formation.model.Jardin;

public interface IJardinRepository extends  JpaRepository<Jardin,Long> 
{

}
