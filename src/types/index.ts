export interface IArticle {
    id: number;
    category: string;
    date: string;
    image: string;
    title: string;
    preamble: string;
}

export type SortingTypes = 'DESC' | 'ASC';
