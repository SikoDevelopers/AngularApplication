export class Evento{
    data:string;
    data_inicio:Date;
    data_fim:Date;
    local:string;
    hora:string;
    agenda:string;
    telefone:string;
    email:string;
    categorias_eventos_id: string;
    trabalho: any;

    constructor(){
        this.data_inicio = new Date();
        this.data_fim = new Date();
        this.local = '';
        this.agenda = '';
        this.telefone = '';
        this.email = '';
        this.hora = '';
        this.categorias_eventos_id = 'Pre-defesa';
        this.trabalho = null;
    }
}