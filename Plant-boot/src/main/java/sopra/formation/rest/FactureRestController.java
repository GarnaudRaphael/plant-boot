package sopra.formation.rest;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.fasterxml.jackson.annotation.JsonView;

import sopra.formation.model.Facture;
import sopra.formation.model.Views;
import sopra.formation.repository.IFactureRepository;

@RestController
@RequestMapping("/facture")
@CrossOrigin("*")
public class FactureRestController {

	@Autowired
	private IFactureRepository factureRepo;

	@GetMapping("")
	@JsonView(Views.ViewFacture.class)
	public List<Facture> findAll() {
		return factureRepo.findAll();
	}

	@GetMapping("/{id}")
	@JsonView(Views.ViewFacture.class)
	public Facture find(@PathVariable Long id) {

		Optional<Facture> optFacture = factureRepo.findById(id);
	
		if (optFacture.isPresent()) {
			return optFacture.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}

	@PostMapping("")
	@JsonView(Views.ViewFacture.class)
	public Facture create(@RequestBody Facture facture) {
		facture = factureRepo.save(facture);

		return facture;
	}

	@PutMapping("/{id}")
	@JsonView(Views.ViewFacture.class)
	public Facture update(@RequestBody Facture facture, @PathVariable Long id) {
		if (!factureRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		facture = factureRepo.save(facture);

		return facture;
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		if (!factureRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
		
		factureRepo.deleteById(id);
	}
}
