import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonagensComponent } from './personagens/personagens.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonagemService } from './personagens/personagem.service';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		PersonagensComponent,
		PageNotFoundComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule
	],
	providers: [PersonagemService],
	bootstrap: [AppComponent]
})
export class AppModule { }
