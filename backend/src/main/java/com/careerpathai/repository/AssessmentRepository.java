package com.careerpathai.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.careerpathai.model.Assessment;

@Repository
public interface AssessmentRepository extends JpaRepository<Assessment, Long> {

}