import { Routes } from '@angular/router';
import { DepartmentComponent } from './CMMS/department/department.component';


export const routes: Routes = [
    { path: 'cmms-department', component: DepartmentComponent },
    { path: 'cmms-location', component: DepartmentComponent },
    { path: 'cmms-group', component: DepartmentComponent },
    { path: 'cmms-asset', component: DepartmentComponent },
    // { path: 'one', component: ComponentOneComponent },
    // { path: 'two', component: ComponentTwoComponent },
    // { path: 'three', component: ComponentThreeComponent },
];
