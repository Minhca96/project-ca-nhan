package com.example.demo.module;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.List;

@Entity

public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String codeProduct;
    @Lob
    private String imageProduct;
    private String configurationProduct;
    private String priceProduct;
    @JsonBackReference
    @OneToMany(mappedBy = "product")
    private List<Transaction> transactionList;

    public Product() {
    }

    public Product(Long id, String name, String codeProduct, String imageProduct, String configurationProduct, String priceProduct, List<Transaction> transactionList) {
        this.id = id;
        this.name = name;
        this.codeProduct = codeProduct;
        this.imageProduct = imageProduct;
        this.configurationProduct = configurationProduct;
        this.priceProduct = priceProduct;
        this.transactionList = transactionList;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCodeProduct() {
        return codeProduct;
    }

    public void setCodeProduct(String codeProduct) {
        this.codeProduct = codeProduct;
    }

    public String getImageProduct() {
        return imageProduct;
    }

    public void setImageProduct(String imageProduct) {
        this.imageProduct = imageProduct;
    }

    public String getConfigurationProduct() {
        return configurationProduct;
    }

    public void setConfigurationProduct(String configurationProduct) {
        this.configurationProduct = configurationProduct;
    }

    public String getPriceProduct() {
        return priceProduct;
    }

    public void setPriceProduct(String priceProduct) {
        this.priceProduct = priceProduct;
    }

    public List<Transaction> getTransactionList() {
        return transactionList;
    }

    public void setTransactionList(List<Transaction> transactionList) {
        this.transactionList = transactionList;
    }
}
