import { Component } from '@angular/core';
// import * as firebase from "firebase";
import { Config } from './shared/config/env.config';
import './operators';

/**
 * This class represents the main application component.
 */
@Component({
	moduleId: module.id,
	selector: 'angular-tunes',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css']
})
export class AppComponent {
	constructor() {
		console.log('17 -- app.component.ts -- Environment config', Config);
		/*const firebaseConfig = {
			apiKey: "xxx",
			authDomain: "xxx",
			databaseURL: "xxx",
			storageBucket: "xxx",
			messagingSenderId: "xxx"
		}
		firebase.initializeApp(firebaseConfig);*/
	}
}
