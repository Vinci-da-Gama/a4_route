import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'a-details',
	templateUrl: './adetails.component.html',
	styleUrls: ['./adetails.component.css']
})
export class AdsComponent implements OnInit {

	@Output() detailsToList = new EventEmitter<string>();
	private lstate: string = 'article-list-comp';

	constructor() { }

	ngOnInit() { }

	GoListPage() {
		this.detailsToList.emit(this.lstate);
	}

}
