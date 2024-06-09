import { Routes } from '@angular/router';
import { FundamentosComponent } from './fundamentos/fundamentos.component';
import { FormImcComponent } from './form-imc/form-imc.component';
import { FormPipesComponent } from './form-pipes/form-pipes.component';

export const routes: Routes = [
    {path: "fundamentos", component: FundamentosComponent},
    {path: "imc", component: FormImcComponent},
    {path: "pipes", component: FormPipesComponent}
    
];
