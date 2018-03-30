import { Component } from '@angular/core';
import { environment } from "../environments/environment";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  ngOnInit() {
    var cookie=document.cookie;
    var cookieFound=cookie.indexOf("x-auth-token")>=0;
    if(cookieFound){
      console.log("Access found")
    }else{
      console.log("Access not found")
      if(environment.production){
        window.location.href="/user";
      }
      
    }
  }

}
