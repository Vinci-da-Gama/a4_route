import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ArticleInterface } from '../article-interface/article.interface';
import { AlbumsWithIdInterface } from '../article-interface/albums-id.interface';

import { Observable } from 'rxjs/Observable';
import '../../operators';

@Injectable()
export class ArtistService {

	private StaticArtists: Object | any;

	private baseUrl = 'https://a4-test-db-14june2017.firebaseio.com/';
	private jsonFile = 'artists.json';

	constructor(private http: Http) { }

	getArticlesSynopsis(): Observable<ArticleInterface[]> {
		return this.http.get(`${this.baseUrl}${this.jsonFile}`)
			.map((res: Response) => {
				let articles: ArticleInterface[] = this.convertFibResponseToArray(res.json());
				this.StaticArtists = Object.assign({}, articles);
				console.log('79 -- this.StaticArtists is: ', this.StaticArtists);
				return articles;
			})
			.catch(this.handleError);
	}

	getArticle(aId: string) {
		const all = Object.values(this.StaticArtists);
		let theTarget: AlbumsWithIdInterface;
		all.forEach((elem: ArticleInterface) => {
			if (elem.id === aId) {
				theTarget = {
					id: elem.id,
					image: elem.image,
					albums: elem.albums
				};
			}
		});
		console.log('101 -- theTarget: ', theTarget);
		return theTarget;
	}

	private convertFibResponseToArray(res: Object | any) {
		return Object.keys(res)
			.map((key: string) => {
				const currentObj = res[key];
				return {
					fID: key,
					id: currentObj.id,
					name: currentObj.name,
					description: currentObj.description,
					image: currentObj.image,
					albums: currentObj.albums
				}
			})
			.sort((a: ArticleInterface, b: ArticleInterface) => {
				a.name.localeCompare(b.name);
			});
	}

	private handleError(error: Response | any) {
		// In a real world app, you might use a remote logging infrastructure
		let errMsg: string;
		if (error instanceof Response) {
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}
		console.error(errMsg);
		return Observable.throw(errMsg);
	}

}