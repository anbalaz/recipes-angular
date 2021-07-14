import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface AuthResponseData {
  expires_in: string;
  token_type: string;
  refresh_token: string;
  id_token: string;
  user_id: string;
  project_id: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private signUpUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
  private webApiKey = 'AIzaSyBvCWI1vHxBTmXZTHc_VRww1l6tZgRmeJs';

  constructor(private http: HttpClient) { }

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(this.signUpUrl + this.webApiKey,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    );
  }
}
