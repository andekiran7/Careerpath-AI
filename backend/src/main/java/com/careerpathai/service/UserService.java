package com.careerpathai.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.careerpathai.model.User;
import com.careerpathai.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    public User saveUser(User user) {
    return userRepository.save(user);
}
public User getUserById(Long id) {
    return userRepository.findById(id).orElse(null);
}
public void deleteUser(Long id) {
    userRepository.deleteById(id);
}
public User updateUser(Long id, User updatedUser) {

    User existingUser = userRepository.findById(id).orElse(null);

    if (existingUser != null) {
        existingUser.setFullName(updatedUser.getFullName());
        existingUser.setEmail(updatedUser.getEmail());
        existingUser.setPassword(updatedUser.getPassword());
        existingUser.setRole(updatedUser.getRole());

        return userRepository.save(existingUser);
    }

    return null;
}
}