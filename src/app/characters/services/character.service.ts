import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  Character,
  RequestCharacterResponse,
} from '../interface/character.interface';
import { Observable, catchError, map, of } from 'rxjs';

interface OptionRequest {
  page?: number;
  limit?: number;
  name?: string;
  gender?: string;
  race?: string;
  affiliation?: string;
}

@Injectable({ providedIn: 'root' })
export class CharacterService {
  private baseUrl = 'https://dragonball-api.com/api';

  constructor(private httpClient: HttpClient) {}

  getCharacters(
    optionRequest?: OptionRequest
  ): Observable<RequestCharacterResponse | Character[]> {

    const options=optionRequest?{params:this.createParams(optionRequest)}:{};
    const url = `${this.baseUrl}/characters`;

    return this.httpClient
      .get<RequestCharacterResponse | Character[]>(url,options)
      .pipe(
        map(this.handleResponse),
        catchError((err) => {
          console.error(err);
          return of([]);
        })
      );
  }

  getCharactersByPagination(
    url: string
  ): Observable<RequestCharacterResponse | Character[]> {
    return this.httpClient
      .get<RequestCharacterResponse | Character[]>(url)
      .pipe(
        map(this.handleResponse),
        catchError((err) => {
          console.error(err);
          return of([]);
        })
      );
  }

  private handleResponse(
    response: RequestCharacterResponse | Character[]
  ): any {
    return Array.isArray(response) && response.length > 0
      ? { items: response }
      : response;
  }

  private createParams(options:any): HttpParams {
    let params = new HttpParams();
    if (options) {
      for (const key in options) {
        if (options.hasOwnProperty(key)) {
          const value = options[key];
          if (value) {
            params = params.append(key, encodeURIComponent(value));
          }
        }
      }
    }
    return params;
  }
}
