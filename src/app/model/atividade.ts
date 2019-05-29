export class Atividade {
    public CodigoAtividade: Number;
    public DescricaoAtivade: String;
    public DataInicio: String;
    public DataFim: String;
    public HoraFim: String;
    public IndicadorParticipacao: String;
    public CodigoDisciplina: Number;

    constructor() {
        this.CodigoAtividade = 0;
        this.DescricaoAtivade = '';
        this.DataInicio = '';
        this.DataFim = '';
        this.HoraFim = '';
        this.IndicadorParticipacao = '';
        this.CodigoDisciplina = 0;
    }
}