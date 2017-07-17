import { Component, OnInit, Input } from '@angular/core';
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

	private state: string = 'article-list-comp';
	private epitome: ArticleSynopsisInterface[];

	constructor(articleService: ArtistService) {
		this.epitome = articleService.getArticlesSynopsis();
		console.log('19 -- this.epitome: ', this.epitome);
	}

	ngOnInit() { }

	showDetails(switchState: string) {
		this.state = switchState;
	}

	showList(switchState: string) {
		this.state = switchState;
	}
}
