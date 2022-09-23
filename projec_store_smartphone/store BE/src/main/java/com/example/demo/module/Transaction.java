package com.example.demo.module;

import org.springframework.data.jpa.repository.EntityGraph;

import javax.persistence.*;

@Entity
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTransaction;
    private String nameCustomer;
    private String IdCardCustomer;
    private String dateOfPayment;
    @ManyToOne(targetEntity = Product.class)
    private Product product;


    public Transaction() {
    }

    public Transaction(Long idTransaction, String nameCustomer, String idCardCustomer, String dateOfPayment, Product product) {
        this.idTransaction = idTransaction;
        this.nameCustomer = nameCustomer;
        IdCardCustomer = idCardCustomer;
        this.dateOfPayment = dateOfPayment;
        this.product = product;

    }

    public Long getIdTransaction() {
        return idTransaction;
    }

    public void setIdTransaction(Long idTransaction) {
        this.idTransaction = idTransaction;
    }

    public String getNameCustomer() {
        return nameCustomer;
    }

    public void setNameCustomer(String nameCustomer) {
        this.nameCustomer = nameCustomer;
    }

    public String getIdCardCustomer() {
        return IdCardCustomer;
    }

    public void setIdCardCustomer(String idCardCustomer) {
        IdCardCustomer = idCardCustomer;
    }

    public String getDateOfPayment() {
        return dateOfPayment;
    }

    public void setDateOfPayment(String dateOfPayment) {
        this.dateOfPayment = dateOfPayment;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }


}
