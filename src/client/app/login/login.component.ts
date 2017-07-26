import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PersonInterface } from './Person.interface';
import { LoginService } from './login.service';

@Component({
	moduleId: module.id,
	// selector: 'artical-list',
	templateUrl: 'login.component.html',
	styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

	Person: PersonInterface = {
		username: '',
		password: ''
	}

	constructor(private router: Router, private loginService: LoginService) {}

	ngOnInit() { }

	loginformSubmit() {
		if(this.loginService.checkLoggedIn(this.Person.username, this.Person.password)) {
			this.router.navigate(['/artistsList']);
		}
	}

}
