import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
// import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { ArticlesModule } from './artists/articals.module';
import { AboutModule } from './about/about.module';


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule, HttpModule, AppRoutingModule,
		LoginModule, ArticlesModule, AboutModule,
		SharedModule.forRoot()
	],
	providers: [{
		provide: APP_BASE_HREF,
		useValue: '<%= APP_BASE %>'
	}],
	bootstrap: [AppComponent]

})
export class AppModule { }
