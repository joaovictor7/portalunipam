export class Horario {

    public CodigoPeriodoLetivo: String;
    public NumeroDiaDaSemana: Number;
    public DescricaoDiaSemana: String;
    public HoraInicio: String;
    public HoraFim: String;
    public NomeDisciplina: String;
    
    constructor() {  
         this.CodigoPeriodoLetivo = '';
         this.NumeroDiaDaSemana = 0; 
         this.DescricaoDiaSemana = ''; 
         this.HoraInicio = '';
         this.HoraFim = '';
         this.NomeDisciplina = '';
    }    
}