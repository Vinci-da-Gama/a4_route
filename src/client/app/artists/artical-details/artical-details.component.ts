import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { AlbumsWithIdInterface } from '../../artists/article-interface/albums-id.interface';
import { ArtistService } from '../artical-services/articals.service';

@Component({
	moduleId: module.id,
	selector: 'app-artical-details',
	templateUrl: './artical-details.component.html',
	styleUrls: ['./artical-details.component.css']
})
export class ArticalDetailsComponent implements OnInit, OnDestroy {

	private article: AlbumsWithIdInterface;

	private articleId: string;
	private paramSubscription: Subscription;

	constructor(private articalService: ArtistService, private activeRoute: ActivatedRoute) {
		console.log('21 -- activeRoute snapshot aId:', activeRoute.snapshot.params['aId']);
	}

	ngOnInit() {
		this.paramSubscription = this.activeRoute.params.subscribe((params) => {
			this.article = this.articalService.getArticle(params['aId']);
		});
	}

	ngOnDestroy() {
		this.paramSubscription.unsubscribe();
	}

}
