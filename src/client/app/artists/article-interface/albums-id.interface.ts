import { AlbumsInterface } from './albums.interface';

export interface AlbumsWithIdInterface {
    id: string;
    image: string;
    albums: AlbumsInterface[];
}
