package com.example.demo.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.model.User;
import com.example.demo.model.User_Interests;


public interface UserInterestRepo extends CrudRepository<User_Interests, Integer> {

}