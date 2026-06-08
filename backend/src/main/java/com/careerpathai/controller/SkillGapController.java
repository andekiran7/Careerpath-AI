package com.careerpathai.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.careerpathai.model.Assessment;
import com.careerpathai.model.Career;
import com.careerpathai.repository.AssessmentRepository;
import com.careerpathai.repository.CareerRepository;

@RestController
@RequestMapping("/skill-gap")
public class SkillGapController {

    @Autowired
    private AssessmentRepository assessmentRepository;

    @Autowired
    private CareerRepository careerRepository;

    @GetMapping("/{userId}/{careerId}")
    public List<String> getSkillGap(
            @PathVariable Long userId,
            @PathVariable Long careerId) {

        Career career = careerRepository.findById(careerId).orElse(null);

        if (career == null) {
            return new ArrayList<>();
        }

        if (career.getRequiredSkills() == null) {
    return new ArrayList<>();
}

String[] requiredSkills =
        career.getRequiredSkills().split(",");

        List<String> userSkills = new ArrayList<>();

        for (Assessment assessment : assessmentRepository.findAll()) {

            if (assessment.getUser() != null &&
                    assessment.getUser().getId().equals(userId)) {

                userSkills.add(
                        assessment.getSkillName().trim());
            }
        }

        List<String> missingSkills = new ArrayList<>();

        for (String skill : requiredSkills) {

            if (!userSkills.contains(skill.trim())) {
                missingSkills.add(skill.trim());
            }
        }

        return missingSkills;
    }
}