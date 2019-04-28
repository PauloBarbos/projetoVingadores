import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { PersonagensComponent } from './personagens/personagens.component';

const ROTA: Routes = [
    { path: '', redirectTo: '/home', pathMatch: "full" },
    { path: 'home', component: HomeComponent },
    { path: 'personagens', component: PersonagensComponent },
    { path: '**', component: PageNotFoundComponent }
]

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(ROTA)],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}