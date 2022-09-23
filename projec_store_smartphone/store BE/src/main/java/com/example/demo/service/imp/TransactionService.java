package com.example.demo.service.imp;

import com.example.demo.repository.ITransactionRepository;
import com.example.demo.service.ITransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TransactionService implements ITransactionService {
    @Autowired
    private ITransactionRepository iTransactionRepository;
}
