export enum MovieType {
  MOVIE = 'MOVIE',
  SERIAL = 'SERIAL',
}

export interface Movie {
  id: number;
  type: MovieType;
  title: string;
  year: number;
}

export interface Serial extends Movie {
  seasonCount?: number;
  seriesCount?: number;
}
