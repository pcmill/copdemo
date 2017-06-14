import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class APIService {

  constructor(private http: Http) { }

  // Search for shows with the searchterm
  getShowID(searchTerm: string) {
    return this.http.get('https://api.themoviedb.org/3/search/tv?query=' + searchTerm + '&api_key=2b2f591f91a6ee4d93d7f37e0abc7fc0')
      .map((res: Response) => res.json())
  }

  // Get recommendations based on the showID we got from search
  getRecommondations(showID: number) {
    return this.http.get('https://api.themoviedb.org/3/tv/' + showID + '/recommendations?api_key=2b2f591f91a6ee4d93d7f37e0abc7fc0')
      .map((res: Response) => res.json())
  }
}
