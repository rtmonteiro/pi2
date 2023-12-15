import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/services/login.service";
import { User } from "../../models/User";
import { Router } from "@angular/router";

@Component({
  selector: "ca-login",
  templateUrl: "login.component.html",
  styleUrls: ["login.component.scss"],
})
export class LoginComponent implements OnInit {

  user = new User('', '')

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}
  
  ngOnInit(): void {

  }

  login() {
    this.loginService.login(this.user)
      .subscribe({
        complete: () => this.router.navigate(['/menu']),
        error: (err) => console.error(err)
      })
  }
}
