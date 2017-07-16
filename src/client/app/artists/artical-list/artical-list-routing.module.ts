import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArticalListComponent } from './artical-list.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{ path: '', component: ArticalListComponent }
		])
	],
	exports: [RouterModule]
})
export class ArticalListRoutingModule { }
