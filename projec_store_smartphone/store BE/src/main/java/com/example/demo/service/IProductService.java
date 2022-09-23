package com.example.demo.service;

import com.example.demo.module.Product;



import java.util.List;
import java.util.Optional;

public interface IProductService {

    Optional<Product> findById(Long idProduct);

    List<Product> getAllSmartPhone(String nameProduct);

    List<Product> getAllTablet(String nameProduct);

    List<Product> getAllSmartWatch(String nameProduct);

    List<Product> getAllSmartTV(String nameProduct);
}
