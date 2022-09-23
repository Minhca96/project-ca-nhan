package com.example.demo.repository;

import com.example.demo.module.Product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IProductRepository extends JpaRepository<Product,Long> {

    @Query(value="select * from product where `name` like %?1% and code_product = '" + "smart_phone" + "' order by price_product desc",nativeQuery=true)
    List<Product> findAllSmartPhone(String nameProduct);

    @Query(value="select * from product where `name` like %?1% and code_product = '" + "tablet" + "' order by price_product desc" ,nativeQuery=true)
    List<Product> findAllTablet(String nameProduct);

    @Query(value="select * from product where `name` like %?1% and code_product = '" + "smart_watch" + "' order by price_product desc" ,nativeQuery=true)
    List<Product> findAllSmartWatch(String nameProduct);

    @Query(value="select * from product where `name` like %?1% and code_product = '" + "smart_tv" + "' order by price_product desc",nativeQuery=true)
    List<Product> findAllSmartTV(String nameProduct);
}
