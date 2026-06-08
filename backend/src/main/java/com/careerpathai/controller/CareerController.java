package com.careerpathai.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.careerpathai.model.Career;
import com.careerpathai.service.CareerService;

@RestController
@RequestMapping("/careers")
public class CareerController {

    @Autowired
    private CareerService careerService;

    @PostMapping
    public Career createCareer(@RequestBody Career career) {
        return careerService.saveCareer(career);
    }

    @GetMapping
    public List<Career> getAllCareers() {
        return careerService.getAllCareers();
    }
}