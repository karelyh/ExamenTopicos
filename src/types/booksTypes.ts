export interface BookSearchResponse {
    numFound:      number;
    start:         number;
    numFoundExact: boolean;
    docs:          Book[];
}

export interface Book {
    key:                string;
    title:              string;
    author_name?:       string[];
    cover_i?:           number;
    first_publish_year?: number;
}