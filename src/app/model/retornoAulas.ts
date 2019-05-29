import { Aula } from './aula'
import { RetornoAutenticacao } from './retornoAutenticacao';

export class RetornoAulas {

     public Retorno: RetornoAutenticacao;
     public Aulas: Array<Aula>;
    
     constructor() {  
          this.Retorno = new RetornoAutenticacao();
          this.Aulas = new Array<Aula>();
    }    
  }