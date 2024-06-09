import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-imc',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-imc.component.html',
  styleUrl: './form-imc.component.css'
})
export class FormImcComponent {
  mostrarResultado = false;
  resultadoFinal = "";
  formImc = {
    nombre: "",
    peso: null,
    talla: null
  }
  pacienteList : Paciente = []

  calcularImc(): void{
    let tallam = Number(this.formImc.talla) / 100;
    let valorImc = Number(this.formImc.peso) / (tallam * tallam)
    var diagnostico = ""
    if(valorImc <= 18.5){
      diagnostico = "por debajo de lo normal"
    }else if(valorImc <= 24.5){
      diagnostico = "peso normal"
    }else if(valorImc <= 29.5){
      diagnostico = "sobrepeso"
    }else if(valorImc <= 34.5){
      diagnostico = "obesidad leve"
    }else if(valorImc <= 39.9) {
      diagnostico = "obesidad leve"
    }else{
      diagnostico = "obesidad extrema"
    }
    this.mostrarResultado = true
    this.resultadoFinal = "Su valor IMC = " + valorImc.toFixed(2).toString()+
                          ", "+ diagnostico;
    this.pacienteList.push({id: this.pacienteList.length + 1,
      nombre: this.formImc.nombre,
      valor: valorImc.toFixed(2).toString(),
      diagnostico: diagnostico
    })    
  }

}
type Paciente = Array<{id: number; nombre: string; 
  valor: string; diagnostico: string}>
