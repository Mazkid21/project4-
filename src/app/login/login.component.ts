import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AuthService } from '../shared/auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	topics: FirebaseListObservable<any[]>;
	user = null;


constructor(private auth: AuthService, public db: AngularFireDatabase,  private router: Router) { }

ngOnInit() {
	this.auth.getAuthState().subscribe(
		(user) => this.user = user);
	this.topics = this.db.list('https://backbyfire.firebaseio.com/');



}

loginWithGoogle() {
    this.auth.loginWithGoogle();
    this.router.navigate(['/members']);
  }

// loginWithFacebook() {
//     this.auth.loginWithFacebook();
//     console.log(this.auth);
//   }

 

  isLoggedIn() {
  	return this.auth.isLoggedIn();
  }

}
