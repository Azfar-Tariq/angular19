import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { ControlStatementComponent } from './components/control-statement/control-statement.component';
import { SignalComponent } from './components/signal/signal.component';
import { LinkedSignalComponent } from './components/linked-signal/linked-signal.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { GetApiComponent } from './components/get-api/get-api.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'data-binding',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'data-binding',
    component: DataBindingComponent,
  },
  {
    path: 'ng-class',
    component: NgClassComponent,
  },
  {
    path: 'ng-style',
    component: NgStyleComponent,
  },
  {
    path: 'control-statement',
    component: ControlStatementComponent,
  },
  {
    path: 'signal',
    component: SignalComponent,
  },
  {
    path: 'linked-signal',
    component: LinkedSignalComponent,
  },
  {
    path: 'template-form',
    component: TemplateFormComponent,
  },
  {
    path: 'reactive-form',
    component: ReactiveFormsComponent,
  },
  {
    path: 'get-api',
    component: GetApiComponent,
  },
];
