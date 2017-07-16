import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { ArticalListComponent } from './artical-list.component';

export function main() {
	describe('ArticalListComponent', () => {
		let component: ArticalListComponent;
		let fixture: ComponentFixture<ArticalListComponent>;

		beforeEach(async(() => {
			TestBed.configureTestingModule({
				declarations: [ArticalListComponent]
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
