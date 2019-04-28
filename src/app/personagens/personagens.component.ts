import { PersonagemService } from './personagem.service';
import { Component, OnInit } from '@angular/core';
import { Personagem } from './personagem';

@Component({
	selector: 'app-personagens',
	templateUrl: './personagens.component.html',
	styleUrls: ['./personagens.component.css']
})
export class PersonagensComponent implements OnInit {

	//cria a lista de Personagem
	//no construtor passo o serviço
	//crio o metodo de listar
	//no oninit inicializo a lista

	personagens: Personagem[] = [];

	constructor(private service: PersonagemService) {

	}

	ngOnInit() {
		this.listar();
	}

	public listar() {
		this.personagens = this.service.listarPersongens();
	}

}
