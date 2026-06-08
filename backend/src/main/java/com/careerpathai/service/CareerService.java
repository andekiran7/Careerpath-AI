package com.careerpathai.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.careerpathai.model.Career;
import com.careerpathai.repository.CareerRepository;

@Service
public class CareerService {

    @Autowired
    private CareerRepository careerRepository;

    public Career saveCareer(Career career) {
        return careerRepository.save(career);
    }

    public List<Career> getAllCareers() {
        return careerRepository.findAll();
    }
}