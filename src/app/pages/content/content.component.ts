import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from '../../data/dataInfo';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  firstTitle: string = '';
  firstDescription: string = '';
  secondTitle: string = '';
  secondDescription: string = '';
  thirdTitle: string = '';
  thirdDescription: string = '';
  fourthTitle: string = '';
  fourthDescription: string = '';
  fifthTitle: string = '';
  fifthDescription: string = '';

  private id: string | null = '1';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    //  paramMap é um observable, pode ser usado para lidar com eventos assíncronos como respostas http, form reativo, eventos de interface de usuário
    // subscribe se inscreve a um observable informando o que deve ser feito com o dado que irá receber
    this.route.paramMap.subscribe((value) => {
      this.id = value.get('id');
      this.setValuesToComponent(this.id);
    });
  }

  setValuesToComponent(id: string | null) {
    const result = data.filter((value) => value.id == id)[0];
    this.contentTitle = result.title[0];
    this.contentDescription = result.description[0];
    this.photoCover = result.photoCover;
    this.firstTitle = result.title[1];
    this.firstDescription = result.description[1];
    this.secondTitle = result.title[2];
    this.secondDescription = result.description[2];
    this.thirdTitle = result.title[3];
    this.thirdDescription = result.description[3];
    this.fourthTitle = result.title[4];
    this.fourthDescription = result.description[4];
    this.fifthTitle = result.title[5];
    this.fifthDescription = result.description[5];
  }
}
