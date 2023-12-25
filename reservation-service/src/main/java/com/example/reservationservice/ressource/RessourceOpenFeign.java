package com.example.reservationservice.ressource;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "RESSOURCE-SERVICE")
public interface RessourceOpenFeign {

    @GetMapping("/ressources/{id}")
    Ressource getRessourceById(@PathVariable("id") int id);

    @GetMapping("/ressources")
    List<Ressource> getAllRessources();
}
