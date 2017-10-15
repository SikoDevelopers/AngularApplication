


export class Token{
    token: String;
    dataExpiracao: Date;
    userId: string;


    constructor(){
        if(localStorage.getItem('token')){
            let dados = JSON.parse(this.getDadosToken(localStorage.getItem('token')));
            this.token = localStorage.getItem('token');
            this.dataExpiracao = new Date(dados['exp']);
            this.userId = dados['sub'];
        }
        console.log(this.dataExpiracao)
        console.log(new Date());
    }



    public removerToken(causa: String){
        localStorage.removeItem('token');
        console.log("Token removido com sucesso porque: "+causa);
    }

    private getDadosToken(token){
        const tokenValue = token;
        const base64URL = tokenValue.split('.')[1];
        const base64 = base64URL.replace('-', '+').replace('_', '/');
        return window.atob(base64);
    }




}