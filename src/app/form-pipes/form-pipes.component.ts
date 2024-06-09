import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-pipes.component.html',
  styleUrl: './form-pipes.component.css'
})
export class FormPipesComponent {
  alumnos = [
    {nombre: "Luis Angel"},
    {nombre: "Luis Alberto"},
    {nombre: "Luis Raúl"},
    {nombre: "Luis Gabriel"}
  ]
  fechaActual = new Date()
  cursos = [
    {nombre: "Desarrollo de Aplicaciones Moviles 2", precio: 3200},
    {nombre: "Desarrollo de Servicios Web 2", precio: 2500},
    {nombre: "Base de datos 2", precio: 2850},
    {nombre: "Inglés Técnico", precio: 1850},
  ]
  numeroDecimal = 128.55858782

}
