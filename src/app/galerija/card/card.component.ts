import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/model/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  card: Card;
  id: number;
  title: string;

  @Input()
  index: number;

 // id: number;

  @Output()
  cardSelected = new EventEmitter<Card>();

  constructor(
    private router: Router,
    private element: ElementRef
    ) { }

  ngOnInit() {
  }

  onCardClick() {
    this.id = this.card.id;
    this.title = this.card.description;
    this.router.navigate(['/renginiai/' + this.id] );

    // this.router.navigate(["/projektai/" + this.title],  { queryParams: { pavadinimas: this.title } );

    this.cardSelected.emit(this.card);
  }

}
