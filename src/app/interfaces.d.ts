export type RootObject = {
  dates: Dates;
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
};

export type Dates = {
  maximum: Date;
  minimum: Date;
};

export type Card = {
  adult?: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: OriginalLanguage | string;
  original_title?: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  name?: string
};

export enum OriginalLanguage {
  En = "en",
  Fi = "fi",
  Ja = "ja",
  Ko = "ko",
}

export type RootMoviesDetails = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelongsToCollection;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: Date;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  name: string
};

export type BelongsToCollection = {
  backdrop_path: string;
  id: number;
  name: string;
  poster_path: string;
};

export type Genre = {
  id: number;
  name: string;
};

export type ProductionCompany = {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
};

export type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

export type SpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type RootMoviesTopRated = {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
};

export type Recomendations = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: MediaType;
  original_language: OriginalLanguage;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export enum MediaType {
  Movie = "movie",
}

export enum OriginalLanguage {
  En = "en",
  It = "it",
  Ja = "ja",
}

export type ImagesRoot = {
  backdrops: Images[];
  id: number;
  logos: Images[];
  posters: Images[];
};

export type Images = {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: null | string;
  vote_average: number;
  vote_count: number;
  width: number;
};

export type SeriesTv = {
  backdrop_path: string;
  first_air_date: Date;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  title: string
};
