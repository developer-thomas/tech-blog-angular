import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent {
  @Input()
  public photoCover: string = '';
  @Input()
  public cardTitle: string = '';
  @Input()
  public cardDescription: string = '';
  @Input()
  Id: string = '0';
}
