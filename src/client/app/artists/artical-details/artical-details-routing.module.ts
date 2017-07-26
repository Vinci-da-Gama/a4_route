import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoggedInGuard } from '../../login/login-guard';
import { ArticalDetailsComponent } from './artical-details.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: 'details/:aId',
				component: ArticalDetailsComponent,
				canActivate: [LoggedInGuard]
			}
		])
	],
	exports: [RouterModule],
	providers: [LoggedInGuard]
})
export class ArticalDetailsRoutingModule { }
