import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'a-list',
	templateUrl: 'alist.component.html',
	styleUrls: ['alist.component.css'],
})
export class AlistComponent implements OnInit {

	@Output() listToDetails = new EventEmitter<string>();
	private dstate: string = 'article-details-comp';

	constructor() { }

	ngOnInit() { }

	GoDetailsPage() {
		console.log('19 -- alist.component.ts -- dstate: ', this.dstate);
		this.listToDetails.emit(this.dstate);
	}

}
