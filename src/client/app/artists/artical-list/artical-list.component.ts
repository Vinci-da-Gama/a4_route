import { Component, OnInit, Input } from '@angular/core';
import { ArtistService } from '../artical-services/articals.service';
import { ArticleInterface } from '../article-interface/article.interface';

@Component({
	moduleId: module.id,
	selector: 'artical-list',
	templateUrl: 'artical-list.component.html',
	styleUrls: ['artical-list.component.css'],
	providers: [ArtistService]
})
export class ArticalListComponent implements OnInit {

	private state: string = 'article-list-comp';
	private epitome: ArticleInterface[];

	constructor(private articleService: ArtistService) {}

	ngOnInit() {
		this.articleService.getArticlesSynopsis()
		.subscribe((res: ArticleInterface[]) => {
			this.epitome = res;
		});
	}

	showDetails(switchState: string) {
		this.state = switchState;
	}

	showList(switchState: string) {
		this.state = switchState;
	}
}
