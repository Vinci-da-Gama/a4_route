import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PersonInterface } from './Person.interface';
import { LoginService } from './login.service';

@Component({
	moduleId: module.id,
	// selector: 'artical-list',
	templateUrl: 'login.component.html',
	styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

	private Person: PersonInterface = {
		username: '',
		password: ''
	}

	constructor(private activeRoute: ActivatedRoute, private router: Router, private loginService: LoginService) { }

	ngOnInit() { }

	loginformSubmit() {
		if (this.loginService.checkLoggedIn(this.Person.username, this.Person.password)) {
			const destUrl = this.activeRoute.snapshot.queryParams['destination'] || '/';
			console.log('27 -- destUrl is: ' + destUrl);
			switch (destUrl) {
				case '/':
					this.router.navigate(['/artistsList']);
					break;
				default:
					this.router.navigateByUrl(destUrl);
					break;
			}
		}
	}

}
