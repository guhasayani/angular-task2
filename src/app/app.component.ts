import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "";
  convert(a:any,b:any){
    let i:any="";
    if(b=="f"){
      i=(a-32)/1.8;
      this.title=i+ "°C";
    }
    else{
      i=(a*1.8+32);
      this.title=i+ "°F";
    }
    
  }
}
