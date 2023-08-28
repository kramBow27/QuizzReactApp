import { IAlternativa } from "../interfaces/IAlternativas";
export class Alternativa implements IAlternativa {
  alternativa_id: number;
  pergunta_id: number;
  alternativa_texto: string;


  constructor(alternativa_id: number, pergunta_id: number, alternativa_texto: string) {
    this.alternativa_id = alternativa_id;
    this.pergunta_id = pergunta_id;
    this.alternativa_texto = alternativa_texto;
  }

}