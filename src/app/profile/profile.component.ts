import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-profile-user',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {
  coursesObservable: Observable<any[]>;
  constructor(private db: AngularFireDatabase) { }
  ngOnInit() {
    this.coursesObservable = this.getCourses('/profile');
  }
  getCourses(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
}
