import { Component } from '@angular/core';

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
      window.location.href="/user";
    }
  }

}
