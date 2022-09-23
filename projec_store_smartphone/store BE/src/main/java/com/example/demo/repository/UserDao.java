package com.example.demo.repository;



import com.example.demo.module.DAOUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserDao extends JpaRepository<DAOUser, Integer> {

    DAOUser findByUsername(String username);
}