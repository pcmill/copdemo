import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})

export class ResultComponent implements OnInit {
  @Input() resultname: string;
  @Input() resultimage: string;
  @Input() resulttext: string;

  private resulturl: string;

  constructor() { }

  ngOnInit() {
    this.resulturl = 'https://image.tmdb.org/t/p/w500' + this.resultimage;
  }
}
