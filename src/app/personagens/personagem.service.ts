import { Injectable } from "@angular/core";
import { Personagem } from "./personagem";

const PERSONAGENS : Personagem[] = [
    {
        id : 1,
        nome : "CAPITÃO AMÉRICA",
        descricao : "Capitão Steven Grant \"Steve\" Rogers é um veterano da Segunda Guerra Mundial, um dos fundadores dos Vingadores, e o primeiro super-herói conhecido da Terra.",
        imagem: "https://images4.alphacoders.com/659/thumb-1920-659822.jpg"
    },
    {
        id : 2,
        nome : "HOMEM DE FERRO",
        descricao : "Anthony Edward \"Tony\" Stark foi um industrial bilionário, inventor, membro fundador dos Vingadores, dono da Stark Industries, uma empresa originalmente criada por seu pai, Howard Stark. Stark foi auto-descrito como um gênio, bilionário, playboy e filantropo.",
        imagem: "https://wallpapercave.com/wp/wp2638431.jpg"
    },
    {
        id : 3,
        nome : "HULK",
        descricao : "Expostos a doses pesadas de radiação gama, o cientista Bruce Banner se transforma em uma máquina de raiva verde chamada Hulk.",
        imagem: "https://images4.alphacoders.com/588/thumb-1920-588373.jpg"
    },
    {
        id : 4,
        nome : "THOR",
        descricao : "Thor Odinson é o antigo rei de New Asgard, um membro fundador dos Vingadores, e o deus do trovão. Quando seu comportamento irresponsável e impetuoso reacendeu um conflito entre Asgard e Jotunheim, Thor foi negado o direito de se tornar rei, destituído de seu poder e banido por seu pai Odin para a Terra.",
        imagem: "https://images5.alphacoders.com/334/thumb-1920-334243.jpg"
    },
    {
        id : 5,
        nome : "VIÚVA NEGRA",
        descricao : "Natalia Alianovna \"Natasha\" Romanoff, também conhecida como Viúva Negra, foi uma das mais talentosas espiãs e assassinas do mundo e uma das fundadoras dos Vingadores.",
        imagem: "http://sf.co.ua/15/09/wallpaper-132f98.jpg"
    }
]

@Injectable()
export class PersonagemService{

    public listarPersongens(): Personagem[]{
        return PERSONAGENS;
    }
}