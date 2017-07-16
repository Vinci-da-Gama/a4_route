import { NgModule } from '@angular/core';

import { ArticalListRoutingModule } from './artical-list/artical-list-routing.module';
import { ArticalListComponent } from './artical-list/artical-list.component';
/* import { ArticalDetailsRoutingModule } from './artical-details/artical-details-routing.module';
import { ArticalDetailsComponent } from './artical-details/artical-details.component'; */

import { SharedModule } from '../shared/shared.module';
// import { ArtistService } from './artical-services/articals.service';

@NgModule({
	imports: [ArticalListRoutingModule, SharedModule],
	declarations: [ArticalListComponent],
	exports: [ArticalListComponent] /* ,
	providers: [ArtistService] */
})
export class ArticlesModule { }
