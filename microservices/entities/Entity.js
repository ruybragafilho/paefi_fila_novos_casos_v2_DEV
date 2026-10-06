"use strict";


class Entity {

    constructor( id, name, status ) {
        this._id      =  id;
        this._name    =  name;
        this._status  =  status;
    }    


    getAtributes() {
        return {
            id:     this._id,
            name:   this._name,
            status: this._status
        }
    }

} // Fim da classe Entity



class Violacao extends Entity {

    constructor( id, name, status ) {
        super( id, name, status );
    }        

} // Fim da classe Violacao


class Categoria extends Entity {

    constructor( id, name, status ) {
        super( id, name, status );
    }        

} // Fim da classe Categoria


class Parametro extends Entity {

    constructor( id, name, status, pontuacao ) {
        super( id, name, status );
        this._pontuacao = pontuacao;
    }     
    
    
    getAtributes() {
        return {
            id:     this._id,
            name:   this._name,
            status: this._status,
            pontuacao: this._pontuacao
        }
    }    

} // Fim da classe Parametro


class OrgaoEncaminhador extends Entity {

    constructor( id, name, status ) {
        super( id, name, status );
    }        

} // Fim da classe OrgaoEncaminhador


class Regional extends Entity {

    constructor( id, name, status ) {
        super( id, name, status );
    }        

} // Fim da classe Regional


class MotivoDesignacao extends Entity {

    constructor( id, name, status ) {
        super( id, name, status );
    }        

} // Fim da classe MotivoDesignacao
