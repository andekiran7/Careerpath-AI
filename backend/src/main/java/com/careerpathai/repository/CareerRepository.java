package com.careerpathai.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.careerpathai.model.Career;

@Repository
public interface CareerRepository extends JpaRepository<Career, Long> {

}