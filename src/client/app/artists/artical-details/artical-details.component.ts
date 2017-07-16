import { Component, OnInit } from '@angular/core';
import { ArticleInterface } from '../article-interface/article.interface';
import { ArtistService } from '../artical-services/articals.service';

@Component({
	moduleId: module.id,
	selector: 'app-artical-details',
	templateUrl: './artical-details.component.html',
	styleUrls: ['./artical-details.component.css'],
	providers: [ArtistService]
})
export class ArticalDetailsComponent implements OnInit {

	private articleId: string = '630662ea-1c7d-4208-99fd-ba3afec20f0c';
	private article: ArticleInterface;

	constructor(private articalService: ArtistService) {
		this.article = articalService.getArticle(this.articleId);
		console.log('18 -- this.article: ', this.article);
	}

	ngOnInit() { }

}
