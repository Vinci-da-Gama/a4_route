import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { ArticalListComponent } from './artical-list.component';
import { AlistComponent } from '../../Components/alist/alist.component';
import { AdsComponent } from '../../Components/adetails/adetails.component';

export function main() {
	describe('ArticalListComponent', () => {
		let component: ArticalListComponent;
		let fixture: ComponentFixture<ArticalListComponent>;

		beforeEach(async(() => {
			TestBed.configureTestingModule({
				declarations: [
					ArticalListComponent,
					AlistComponent,
					AdsComponent
				]
			})
			.compileComponents();
		}));

		beforeEach(() => {
			fixture = TestBed.createComponent(ArticalListComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});

		it('should be created', () => {
			expect(component).toBeTruthy();
		});
	});
}
