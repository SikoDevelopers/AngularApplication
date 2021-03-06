import { Injectable } from '@angular/core';
import {UserService} from './user.service';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class AutenticacaoService {


  contaCriada: boolean;
  protected podeLogar: boolean;
  dadosRetornados: any = [];

  constructor(private userService: UserService) {
    this.contaCriada = false;
    this.podeLogar = true;
  }


    /**
     * Este metodo eh responsavel por fazer a autenticacao
     * de um estudante dados as suas credenciais
     * @param user
     * @param {(data) => void} funcaoAceite - uma funcao que sera executada caso as credenciais
     * estejam validas
     * @param {(data) => void} funcaoAceite - uma funcao que sera executada caso as credenciais
     * esteja eradas
     *
     */
  criarContaEsudante(user, funcaoAceite: (data) => void, funcaoNegado: (data) => void, funcaoErro: (data) => void ){

      this.userService.signUp(user).subscribe(
          (resultado: Response) => {
              alert("Conta Criada com sucesso");
              this.contaCriada = true;
              console.log(resultado);
          },
          (erro: HttpErrorResponse)=> {
              funcaoErro(erro);
              console.error(erro);
          },
          ()=>{
            if(this.contaCriada == true)
              this.login(user, funcaoAceite, funcaoNegado);
          }
      );
  }


  login(user, funcaoAceite: (dados)=>void, funcaoNegada: (dados)=>void){
      this.userService.login(user).subscribe(
          (resultado: Response) => {

              if (resultado.status == 200){

                  this.podeLogar = true;
                  this.dadosRetornados = resultado;
              }
              console.log(resultado);
          },
          (error)=>{
            funcaoNegada(error);
              console.log(error);
          },
          ()=>{
              if (this.podeLogar == true) {
                  this.guardarToken(this.dadosRetornados['token']);
                  funcaoAceite(this.dadosRetornados);
              }

          }
      );
  }


  guardarToken(token){
      localStorage.setItem('token', token);
  }


    verificarUserLogado(callback: (dado, context) => void, callbackError: (dado) => void, context){

      let result;
      this.userService.logado(localStorage.getItem('token')).subscribe(
          (resultado: Response) => {
              result = resultado;
          },
          erros => callbackError(erros),
          ()=>{
              callback(result, context);
          }
      );
    }



    criarContaDocente(userDocente, funcaoAceite: (data) => void, funcaoNegado: (data) => void, funcaoErro: (data) => void ){
        let contaCriada = false;
        let result: any;
        this.userService.signUpDocente(userDocente).subscribe(
            (resultado: Response) => {
                alert("Conta Criada com sucesso");
                contaCriada = true;
                result = resultado;
                console.log(resultado);
            },
            (erro: HttpErrorResponse)=> {
                funcaoErro(erro);
            },
            ()=>{
                if(contaCriada == true)
                    funcaoAceite(result);
                else
                    funcaoNegado(result)
            }
        );
    }


  // validarEmail(email, funcao: (dado) => void){
  //         this.userService.validarEmail(email).subscribe(
  //             (resultado: Response) => {
  //                 console.log(resultado);
  //             },
  //                 (erros)=> {
  //                     funcao(erros);
  //                 },
  //
  //
  //         );
  //
  // }



}
