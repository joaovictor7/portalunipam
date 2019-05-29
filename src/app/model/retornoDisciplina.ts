import { Disciplina } from './disciplina';
import { RetornoAutenticacao } from './retornoAutenticacao';

export class RetornoDisciplina {
     public Retorno: RetornoAutenticacao;
     public Disciplinas: Array<Disciplina>;
     
     constructor() {  
          this.Retorno = new RetornoAutenticacao();
          this.Disciplinas = new Array<Disciplina>();
     }   
  }