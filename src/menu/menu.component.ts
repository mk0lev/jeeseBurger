import { Component, Input, Output, EventEmitter  } from '@angular/core';
//import { NeoService } from '../app/neo.serivce';

@Component({
    selector: 'menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
  })

export class MenuComponent{
    @Input()  bet: number | string;
    @Output() betChange = new EventEmitter<number>();
    //user inputs his address
    useraddress = "";
    //host address
    hostaddress = "";
    //step in menu
    step = 1;
    //user balance should be taken by the api
    userBalance = 0.0;
    //if true application will start
    startApp = false;
    choice;
    percent:number;


    ngAfterViewInit(){
        // this.NeoService.getAddress().then(function(data:any){
        //     if(data.status == 200){
        //         this.step = 2;
        //         this.useraddress = data.result;
        //         this.setBalance();
        //     }
        // });
    }
    saveUserAddress(){
        this.useraddress = (<HTMLInputElement>document.getElementById('userAddr')).value;
        this.step = 2;
        //this.setBalance();
    }

    betOnChoises(){
        this.step = 3;
    }
    calculate(){
        this.choice = (<HTMLInputElement>document.querySelector('input[name="score"]:checked')).value;
        switch(this.choice){
            case "50": this.percent = 0.01; break;
            case "100": this.percent = 0.05; break;
            case "200": this.percent = 0.1; break;
            case "500": this.percent = 0.5; break;
        }
        console.log(this.choice, this.percent)
    }
    // setBalance(){
    //     this.NeoService.getBalance("NEO",this.useraddress).then(function(data:any){
    //         if(data.status == 200){
    //             this.userBalance = data.result;
    //         }
    //         else{
    //             console.log(data);
    //         }
    //     })
    // }


}