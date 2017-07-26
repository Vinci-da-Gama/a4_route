import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { LoginComponent } from './login.component';

export function main() {
	describe('LoginComponent', () => {
		let component: LoginComponent;
		let fixture: ComponentFixture<LoginComponent>;

		beforeEach(async(() => {
			TestBed.configureTestingModule({
				declarations: [LoginComponent]
			})
			.compileComponents();
		}));

		beforeEach(() => {
			fixture = TestBed.createComponent(LoginComponent);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});

		it('should be created', () => {
			expect(component).toBeTruthy();
		});
	});
}
