import { Component } from '@angular/core';
import { NavController,AlertController, Button } from 'ionic-angular';
import{MainPage} from '../../pages/main/main';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController ,public alert :AlertController) {

  }


  teamA;
  teamB;



mainpage(){

  if(this.teamA==this.teamB && this.teamB==this.teamA){

const a = this.alert.create({

title:'Confirmation',
message:'Teams can not have the same Name',
buttons:['Okay']


});

a.present();



  }else{
    this.navCtrl.push(MainPage);

  }

  alert(this.teamA+this.teamB);
  
  arrteam[0]=this.teamA;
  
  arrteam[1]=this.teamB;



}
 



}

var arrteam=[];
export default arrteam;
