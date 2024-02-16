export interface RequestCharacterResponse {
  items: Character[] | [];
  meta?:  Pagination;
  links?: Links;
}

export interface Character {
  id:          number;
  name:        string;
  ki:          string;
  maxKi:       string;
  race:        string;
  gender:      Gender;
  description: string;
  image:       string;
  affiliation: string;
  deletedAt:   null;
}

export enum Affiliation {
  ArmyOfFrieza = "Army of Frieza",
  Freelancer = "Freelancer",
  ZFighter = "Z Fighter",
}

export type Gender="Female" | "Male"

export interface Links {
  first:    string;
  previous: string;
  next:     string;
  last:     string;
}

export interface Pagination {
  totalItems:   number;
  itemCount:    number;
  itemsPerPage: number;
  totalPages:   number;
  currentPage:  number;
}

export interface CharacterFilter {
  page?: number;
  limit?: number;
  name?: string;
  gender?: string;
  race?: string;
  affiliation?: string;
  [key: string]: number|string|undefined;
}

