import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlistComponent } from './alist.component';

export function main() {
	describe('AlistComponent', () => {
		let component: AlistComponent;
		let fixture: ComponentFixture<AlistComponent>;

		beforeEach(async(() => {
			TestBed.configureTestingModule({
				declarations: [AlistComponent]
			})
			.compileComponents();
		}));

		beforeEach(() => {
			fixture = TestBed.createComponent(AlistComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});

		it('should be created', () => {
			expect(component).toBeTruthy();
		});
	});
}
