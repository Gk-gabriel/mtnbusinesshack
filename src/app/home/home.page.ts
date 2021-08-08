import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: string;

  constructor(
    private http: HttpClient
  ) {}

  onEnterEmail(event: any) {
    this.email = event.detail.value;
  }

  onSubmit() {
    const data = {
      email: this.email
    };

    console.log('submitting:', this.email);
    this.http.post('https://mtnbusinesshack-default-rtdb.firebaseio.com/emails.json', data).subscribe(res => {
      console.log('Response: ', res);
    });
  }

}
