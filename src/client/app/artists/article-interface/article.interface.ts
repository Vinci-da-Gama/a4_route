import { AlbumsInterface } from './albums.interface';

export interface ArticleInterface {
    fID:    string;
    id:     string;
    name:   string;
    description: string;
    image:  string;
    albums: AlbumsInterface[];
    [key: string]: string | AlbumsInterface[];
}
