package com.careerpathai.controller;

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
@RequestMapping("/recommendations")
public class RecommendationController {

    @Autowired
    private AssessmentRepository assessmentRepository;

    @Autowired
    private CareerRepository careerRepository;

    @GetMapping("/{userId}")
    public Career recommendCareer(@PathVariable Long userId) {

        List<Assessment> assessments = assessmentRepository.findAll();

        Assessment bestAssessment = null;

        for (Assessment assessment : assessments) {

            if (assessment.getUser() != null &&
                    assessment.getUser().getId().equals(userId)) {

                if (bestAssessment == null ||
                        assessment.getScore() > bestAssessment.getScore()) {

                    bestAssessment = assessment;
                }
            }
        }

        if (bestAssessment == null) {
            return null;
        }

        List<Career> careers = careerRepository.findAll();

        for (Career career : careers) {

            if (career.getRequiredSkill()
                    .equalsIgnoreCase(bestAssessment.getSkillName())) {

                System.out.println("Recommended Career: - RecommendationController.java:57"
                        + career.getCareerName());

                return career;
            }
        }

        return null;
    }
}