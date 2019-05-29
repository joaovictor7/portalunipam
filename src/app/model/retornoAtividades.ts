import { Atividade } from './atividade'
import { RetornoAutenticacao } from './retornoAutenticacao';

export class RetornoAtividades {
     public Retorno: RetornoAutenticacao;
     public Atividades: Array<Atividade>;
    
     constructor() {  
        this.Retorno = new RetornoAutenticacao();
        this.Atividades = new Array<Atividade>();
    }    
  }