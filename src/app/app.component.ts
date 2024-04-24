
import { Component,OnInit } from '@angular/core';

import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

 
ngOnInit(): void {
firebase.initializeApp(
  {
    apiKey: "AIzaSyDe7uPH9S2F1s5h_XTYwr4tp0Mb-TdIfWw",
  authDomain: "empleados-95f5a.firebaseapp.com",
      
  }
);
}

}

