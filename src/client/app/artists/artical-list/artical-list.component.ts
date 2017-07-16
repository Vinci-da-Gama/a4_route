import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../artical-services/articals.service';
import { ArticleSynopsisInterface } from '../article-interface/article-synopsis.interface';

@Component({
	moduleId: module.id,
	selector: 'artical-list',
	templateUrl: 'artical-list.component.html',
	styleUrls: ['artical-list.component.css'],
	providers: [ArtistService]
})
export class ArticalListComponent implements OnInit {

	private epitome: ArticleSynopsisInterface[];

	constructor(articleService: ArtistService) {
		this.epitome = articleService.getArticlesSynopsis();
		console.log('19 -- this.epitome: ', this.epitome);
	}

	ngOnInit() { }

}
