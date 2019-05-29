export class RetornoAutenticacao {
     public Matricula: String;
     public Senha: String; 
     public Nome : String; 
     public Mensagem : String;
     public Autenticado : String;
    
     constructor() {  
         this.Matricula = "";
         this.Senha = ""; 
         this.Nome = ""; 
         this.Mensagem = "";
         this.Autenticado = "";
     } 
  }