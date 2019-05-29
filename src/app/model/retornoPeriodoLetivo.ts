import { PeriodosLetivos } from './periodoLetivo'
import { RetornoAutenticacao } from './retornoAutenticacao';

export class RetornoPeriodoLetivo {
    public Retorno: RetornoAutenticacao;
    public PeriodosLetivos : Array<PeriodosLetivos>;
    
    constructor() {
        this.Retorno = new RetornoAutenticacao();
        this.PeriodosLetivos = new Array<PeriodosLetivos>();
    }
}