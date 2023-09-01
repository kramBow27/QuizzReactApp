import { IAlternativa } from "../interfaces/IAlternativas";
export class Alternativa implements IAlternativa {
  alternativa_id: number;
  pergunta_id: number;
  alternativa_texto: string;
  tema_id: number;
  correta: boolean;
 


  constructor(alternativa_id: number, pergunta_id: number, alternativa_texto: string, tema_id: number, correta: boolean) {
    this.alternativa_id = alternativa_id;
    this.pergunta_id = pergunta_id;
    this.alternativa_texto = alternativa_texto;
    this.tema_id = tema_id;
    this.correta = correta;
  }

}