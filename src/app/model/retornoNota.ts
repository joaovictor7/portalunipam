import { Nota } from './nota'
import { RetornoAutenticacao } from './retornoAutenticacao';

export class RetornoNota {
    public Retorno: RetornoAutenticacao;
    public Notas: Array<Nota>;

    constructor() {
        this.Retorno = new RetornoAutenticacao();
        this.Notas = new Array<Nota>();
    }
}