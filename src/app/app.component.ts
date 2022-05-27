import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="";
  n="";
  convert(a:any,b:any){
    let i:any="";
    if(b=="f"){
      i=(a-32)/1.8;
      this.title=i.toPrecision(2);
      this.n=this.title + "°C";
    }
    else{
      i=(a*1.8+32);
      this.title=i.toFixed(2);
      this.n=this.title + "°F";
    }
    
  }
}
