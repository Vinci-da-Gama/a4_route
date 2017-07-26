import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginService } from './login.service';
import { LoginComponent } from './login.component';

import { SharedModule } from '../shared/shared.module';
// import { ArtistService } from './artical-services/articals.service';

@NgModule({
	imports: [LoginRoutingModule, SharedModule],
	declarations: [LoginComponent],
	exports: [LoginComponent],
	providers: [LoginService]
})
export class LoginModule { }
