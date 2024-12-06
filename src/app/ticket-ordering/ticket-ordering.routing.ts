import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Step1FormComponent } from './components/step1-form/step1-form.component';
import { Step2FormComponent } from './components/step2-form/step2-form.component';
import { Step3FormComponent } from './components/step3-form/step3-form.component';
import { ResultsComponent } from './components/results/results.component';
import { MainFormComponent } from './components/main-form/main-form.component';

const routes: Routes = [
    {
        path: "step-1",
        component: Step1FormComponent,
    },
    {
        path: "step-2",
        component: Step2FormComponent
    },
    {
        path: "step-3",
        component: Step3FormComponent
    },
    {
        path: "results",
        component: ResultsComponent
    },
    {
        path: "add",
        component: MainFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TicketOrderingRoutingModule { }
