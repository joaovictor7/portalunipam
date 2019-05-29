export class Nota {
    public CodigoNota: Number;
    public NomeAvaliacao: String;
    public ValorAluno: Number;
    public ValorAvaliacao: Number;
    public CodigoDisciplina: Number;

    constructor() {
        this.CodigoNota = 0;
        this.NomeAvaliacao = '';
        this.ValorAluno = 0;
        this.ValorAvaliacao = 0;
        this.CodigoDisciplina = 0;
    }
}