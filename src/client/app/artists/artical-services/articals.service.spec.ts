import { TestBed, inject } from '@angular/core/testing';

import { ArtistService } from './articals.service';

export function main() {
	describe('ArtistService', () => {
		beforeEach(() => {
			TestBed.configureTestingModule({
				providers: [ArtistService]
			});
		});

		it('should be created', inject([ArtistService], (service: ArtistService) => {
			expect(service).toBeTruthy();
		}));
	});
}
