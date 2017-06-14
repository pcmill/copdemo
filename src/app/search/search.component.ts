import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { APIService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: [
    trigger('result', [
      transition(':enter', [
        style({opacity: 0}),
        animate('500ms', style({ opacity: 1 }))
      ])
    ])
  ]
})

export class SearchComponent implements OnInit {
  results = [];
  searchedFor: string;
  loading = false;
  resultsAmount: number;

  constructor(private apiService: APIService) { }

  search(searchterm: string) {
    this.loading = true;
    this.apiService.getShowID(searchterm).subscribe(
      data => {
        // Show the tvshow the app gets recommendations
        this.searchedFor = data.results[0].name;
        this.apiService.getRecommondations(data.results[0].id).subscribe(
          data => {
            this.results = data.results;
            this.resultsAmount = this.results.length;
            this.loading = false;
          }
        )
      }
    )
  }

  ngOnInit() {}

}
