package com.careerpathai.controller;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.careerpathai.model.Career;
import com.careerpathai.repository.CareerRepository;

@RestController
@RequestMapping("/roadmap")
public class RoadmapController {

    @Autowired
    private CareerRepository careerRepository;

    @GetMapping("/{careerId}")
    public Map<String, Object> getRoadmap(@PathVariable Long careerId) {

        Career career = careerRepository.findById(careerId).orElse(null);

        Map<String, Object> response = new LinkedHashMap<>();

        if (career == null) {
            return response;
        }

        response.put("career", career.getCareerName());

        List<String> roadmap = new ArrayList<>();

        if (career.getRequiredSkills() != null) {

            String[] skills = career.getRequiredSkills().split(",");

            for (String skill : skills) {

                roadmap.add("Learn " + skill.trim() + " Basics");
            }
        }

        response.put("roadmap", roadmap);

        return response;
    }
}