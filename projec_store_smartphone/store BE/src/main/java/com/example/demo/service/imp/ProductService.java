package com.example.demo.service.imp;

import com.example.demo.module.Product;
import com.example.demo.repository.IProductRepository;
import com.example.demo.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository iProductRepository;


    @Override
    public Optional<Product> findById(Long idProduct) {
        return this.iProductRepository.findById(idProduct);
    }

    @Override
    public List<Product> getAllSmartPhone(String nameProduct) {
        return this.iProductRepository.findAllSmartPhone(nameProduct);
    }

    @Override
    public List<Product> getAllTablet(String nameProduct) {
        return this.iProductRepository.findAllTablet(nameProduct);
    }

    @Override
    public List<Product> getAllSmartWatch(String nameProduct) {
        return this.iProductRepository.findAllSmartWatch(nameProduct);
    }

    @Override
    public List<Product> getAllSmartTV(String nameProduct) {
        return this.iProductRepository.findAllSmartTV(nameProduct);
    }
}
