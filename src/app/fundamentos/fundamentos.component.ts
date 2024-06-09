import { Component } from '@angular/core';

@Component({
  selector: 'app-fundamentos',
  standalone: true,
  imports: [],
  templateUrl: './fundamentos.component.html',
  styleUrl: './fundamentos.component.css'
})
export class FundamentosComponent {
  
  titulo = "Desarrollo de Aplicaciones Web 2"
  imagen = "https://dummyimage.com/300"
  contador = 0;

  constructor(){
    setInterval(() => {
      this.contador++
    }, 2000)
  }

  resetearContador(): void {
    this.contador = 0;
  }

}
