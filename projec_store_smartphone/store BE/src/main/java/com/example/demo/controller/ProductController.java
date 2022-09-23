package com.example.demo.controller;

import com.example.demo.module.Product;
import com.example.demo.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin("*")
@RequestMapping("/Product")
public class ProductController {
    @Autowired
    private IProductService iProductService;
//    get list smart phone
    @PostMapping("/listSmartPhone")
    public ResponseEntity<List<Product>> getListSmartPhone(
            @RequestParam (defaultValue = "") String nameProduct
    ) {
        List<Product> listSmartPhone = this.iProductService.getAllSmartPhone(nameProduct);
        if (listSmartPhone.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(listSmartPhone,HttpStatus.OK);
    }
//get list tablet
    @PostMapping("/listTablet")
    public ResponseEntity<List<Product>> getListTablet(
            @RequestParam (defaultValue = "") String nameProduct
    ) {
        List<Product> listSmartPhone = this.iProductService.getAllTablet(nameProduct);
        if (listSmartPhone.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(listSmartPhone,HttpStatus.OK);
    }
//get list smart watch
    @PostMapping("/listSmartWatch")
    public ResponseEntity<List<Product>> getListSmartWatch(
            @RequestParam (defaultValue = "") String nameProduct
    ) {
        List<Product> listSmartPhone = this.iProductService.getAllSmartWatch(nameProduct);
        if (listSmartPhone.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(listSmartPhone,HttpStatus.OK);
    }
//get list smart tv
    @PostMapping("/listSmartTV")
    public ResponseEntity<List<Product>> getListSmartTV(
            @RequestParam (defaultValue = "") String nameProduct
    ) {
        List<Product> listSmartPhone = this.iProductService.getAllSmartTV(nameProduct);
        if (listSmartPhone.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(listSmartPhone,HttpStatus.OK);
    }

    //findByIdSmartPhone
    @PostMapping("/findByIdProduct/{idProduct}")
    public ResponseEntity<Product> findByIdSmartPhone(
            @PathVariable Long idProduct
    ){
        Optional<Product> optionalProduct = this.iProductService.findById(idProduct);
        if (!optionalProduct.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(optionalProduct.get(),HttpStatus.OK);
    }
}
