import { Injectable, TemplateRef } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { injectNOS, nosProps } from "@nosplatform/api-functions/lib/react";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

export class NeoService {
    constructor(){  
    }
    NEO = 'c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b';
    GAS = '602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7';
    getBalance(asset,address) {
        return new Promise(function(resolve,reject){
            
            if(asset == "NEO") asset = this.NEO;
            else if(asset == "GAS") asset = this.GAS;
            // Example with the optional parameter
            injectNOS.getBalance({ asset: asset, address })
            .then((balance) => { resolve({status:200,result:balance}); })
            .catch((err) => {resolve({status:500})}); 
        })
         
    }

    getAddress(){
        return new Promise(function(resolve,reject){
            injectNOS.getAddress()
            .then((address) => { resolve({status:200,result:address}); })
            .catch((err) => { resolve({status:500}); });
        })
    }

    send(asset, amount, receiver){
        return new Promise(function(resolve,reject){
            if(asset == "NEO") asset = this.NEO;
            else if(asset == "GAS") asset = this.GAS;
            injectNOS.send({ asset: asset, amount, receiver })
            .then((txid) => { resolve({status:200,result:txid}); })
            .catch((err) => { resolve({status:500, err:err}); });
        })
    }
}