import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tipo: string ="number";
  cat:string = "Categoria";
  categoria:string ="categoria";
  constructor() {}

}
