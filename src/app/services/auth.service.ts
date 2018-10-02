import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs';
@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
      this.user = _firebaseAuth.authState;
  }
}

// export const rootRouterConfig: Routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   { path: 'login', component: LoginComponentComponent, canActivate: [AuthGuard] },
//   { path: 'register', component: RegisterComponentComponent, canActivate: [AuthGuard] },
//   { path: 'user', component: Profile,  resolve: { data: user}}
// ];


// doFacebookLogin(){
//   return new Promise<any>((resolve, reject) => {
//     let provider = new firebase.auth.FacebookAuthProvider();
//     this.afAuth.auth
//     .signInWithPopup(provider)
//     .then(res => {
//       resolve(res);
//     }, err => {
//       console.log(err);
//       reject(err);
//     })
//   })

