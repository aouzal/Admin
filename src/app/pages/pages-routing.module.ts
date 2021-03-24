import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "../shared/components/not-found/not-found.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PagesComponent } from "./pages.component";

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: 'Dashboard',
                component: DashboardComponent,
                //loadChildren: () => import('src/app/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
            }, {
                path: '',
                redirectTo: 'Dashboard',
                pathMatch: 'full'
            }, {
                path: '**',
                component: NotFoundComponent
            }

        ]


    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class PagesRoutingModule {
  }