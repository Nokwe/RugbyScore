import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import arrteam, { HomePage } from '../home/home';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  teamA= arrteam[0];
  teamB=arrteam[1];
  team;

  scoreA=0;
  scoreB=0;

  choose(a){

    this.team =a
    if(a==1){
      alert("Home Selected");
 
    }else{
      alert("Away Selected");
    }

  }

  methordTry(){
    if (this.team==1 ){
   this.scoreA=this.scoreA+5
    }else{ this.scoreB=this.scoreB+5}
   

  }

  undoTry(){
    if (this.team==1 ){
   this.scoreA=this.scoreA-5
   if(this.scoreA < 0){
    this.scoreA=0;
        }
    }else{ this.scoreB=this.scoreB-5}
    if(this.scoreB < 0){
      this.scoreB=0;
          }
  }


  methordPenalty(){
    if (this.team==1 ){
   this.scoreA=this.scoreA+3
    }else{ this.scoreB=this.scoreB+3}
 
  }
undoPenalty(){
    if (this.team==1 ){
   this.scoreA=this.scoreA-3
   if(this.scoreA < 0){
    this.scoreA=0;
        }
    }else{ this.scoreB=this.scoreB-3}
    if(this.scoreB < 0){
      this.scoreB=0;
          }
  }


  methordconvesion(){
    if (this.team==1 ){
   this.scoreA=this.scoreA+2
    }else{ this.scoreB=this.scoreB+2}

  }

  undoConvesion(){
    if (this.team==1 ){
   this.scoreA=this.scoreA-2
   if(this.scoreA < 0){
    this.scoreA=0;
        }
    }else{ this.scoreB=this.scoreB-2}

    if(this.scoreB < 0){
      this.scoreB=0;
          }
  }

methordReset(){
  var txt;
this.teamA = "";
this.teamB="";
this.scoreA=0;
this.scoreB=0;


var r = confirm("Are You Sure?");
if (r == true) {
  this.navCtrl.push(HomePage);
} else {
  this.navCtrl.push(MainPage);
}

  }

}





