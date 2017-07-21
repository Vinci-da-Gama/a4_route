import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArticalDetailsComponent } from './artical-details.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{ path: 'details/:aId', component: ArticalDetailsComponent }
		])
	],
	exports: [RouterModule]
})
export class ArticalDetailsRoutingModule { }
