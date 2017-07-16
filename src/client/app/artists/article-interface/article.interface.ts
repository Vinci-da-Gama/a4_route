import { AlbumsInterface } from './albums.interface';

export interface ArticleInterface {
    id: string;
    name: string;
    description: string;
    image: string;
    albums: AlbumsInterface;
    [key: string]: string | AlbumsInterface;
}
