export interface RootObject {
  id: number;
  logos: Logo[];
}

export interface Logo {
  aspect_ratio: number;
  file_path: string;
  file_type: string;
  height: number;
  id: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface TvObject {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

export interface TvResult {
  backdrop_path: string | null;
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
}
