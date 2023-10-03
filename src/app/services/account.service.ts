import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

const URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient, private router : Router) { }
  
  register(userCredentials: any) {
    
    this.http.post(`${URL}/api/account/register`, userCredentials).subscribe({
      next: resp => {
        console.log(resp);
      },
      error: error => {
        console.error('There was an error!', error);
      }
    });


  }
  loginUser(userCredentials: any) {
    return this.http.post(`${URL}/api/account/login`, userCredentials)
  }

  checkToken() {
    let token = localStorage.getItem('token');
    if(!token) {
      this.router.navigate(['/']);
      return;
    }

    const headers = new HttpHeaders({
      'Autorization': `Bearer ${token }` 

    });
  
    this.http.get(`${URL}/api/account/user`,{headers}).subscribe({

      next: (resp:any) => {
        if (!resp.ok) {
          this.router.navigate(['/']);
        }
      },
      error: error => {
        this.router.navigate(['/']);
      }
    })
    
  

  }


} 
