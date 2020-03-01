import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment3';
  isShown=false;
  logs=[];
  timestamps=[];
  clicks=[];
  current=new Date();
  index=0;
  
  toggleParagraphAndLogDetails(){
    this.isShown=!this.isShown;
    this.current=new Date();
    this.clicks.push({
      'timestamp':this.current.getHours() +':'+ this.current.getMinutes()+':'+this.current.getSeconds(),
      'index':this.index
  });
    this.index+=1;

  }
  getColor(index:number){
    if(index>=4){
      return 'blue';
    }else{
      return 'white';
    }
    
  }
  validateIndex(index:number){
    if(index>=4){
      return true;
    }else{
      return false;
    }
  }
}
