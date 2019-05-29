import {Horario} from './horario';

export class RetornoHorario {
    public Matricula: String;
    public Senha: String;
    public Nome: String;
    public Mensagem: String;
    public Autenticado: String; 
    public Horarios: Array<Horario>;
     
     constructor() {  
        this.Matricula = '';
        this.Senha = '';
        this.Nome = '';
        this.Mensagem = '';
        this.Autenticado = '';
        this.Horarios = new Array<Horario>();
     }   
  }