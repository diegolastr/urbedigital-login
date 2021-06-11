import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-espacio',
  templateUrl: './editar-espacio.component.html',
  styleUrls: ['./editar-espacio.component.css']
})
export class EditarEspacioComponent implements OnInit {
  tiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
