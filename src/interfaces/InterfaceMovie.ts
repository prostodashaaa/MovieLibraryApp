export interface RootInterface {
  ok: boolean;
  description: ICardMovie[];
  error_code: number;
}

export interface ICardMovie {
  "#TITLE": string;
  "#IMDB_ID": string;
  "#RANK": number;
  "#IMG_POSTER"?: string;
}

export interface IExtendedCardMovie {
  name: string;
  image: string;
  description?: string;
  datePublished?: string;
  aggregateRating?: AggregateRating;
  duration?: string;
  "@type": string;
  genre: string[];
  review?: Review;
}

export interface Review {
  dateCreated: string;
  name: string;
  reviewBody: string;
}

export interface AggregateRating {
  ratingValue: number;
}
