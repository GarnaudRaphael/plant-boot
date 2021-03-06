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

import sopra.formation.model.Meteo;
import sopra.formation.model.Views;
import sopra.formation.repository.IMeteoRepository;

@RestController
@RequestMapping("/meteo")
@CrossOrigin("*")
public class MeteoRestController {

	@Autowired
	private IMeteoRepository meteoRepo;

	@GetMapping("")
	@JsonView(Views.ViewMeteo.class)
	public List<Meteo> findAll() {
		return meteoRepo.findAllMeteo();
	}

	@GetMapping("/{id}")
	@JsonView(Views.ViewMeteo.class)
	public Meteo find(@PathVariable Long id) {

		Optional<Meteo> optMeteo = meteoRepo.findMeteoById(id);

		if (optMeteo.isPresent()) {
			return optMeteo.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}

	@PostMapping("")
	@JsonView(Views.ViewMeteo.class)
	public Meteo create(@RequestBody Meteo meteo) {
		meteo = meteoRepo.save(meteo);

		return meteo;
	}

	@PutMapping("/{id}")
	@JsonView(Views.ViewMeteo.class)
	public Meteo update(@RequestBody Meteo meteo, @PathVariable Long id) {
		if (!meteoRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		meteo = meteoRepo.save(meteo);

		return meteo;
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		if (!meteoRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
		
		meteoRepo.deleteById(id);
	}
}
