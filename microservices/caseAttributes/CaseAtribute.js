"use strict";


/**
 * Classe CaseAttribute
 * 
 * Representa um atributo de um caso. Cada atributo tem 
 *   . identificador
 *   . nome
 *   . status (ativo / inativo)
 */
class CaseAttribute {

    // Construtor
    constructor( id, name, status ) {
        this._id      =  id;
        this._name    =  name;
        this._status  =  status;
    }    

    // Método que retorna um objeto contendo
    // seu id, name e status
    getAttribute() {
        return {
            id:     this._id,
            name:   this._name,
            status: this._status
        };
    }

} // Fim da classe CaseAttribute



/**
 * Classe Parameter (classe filha da classe CaseAttribute)
 * 
 * Representa um parâmetro de um caso. Cada atributo tem 
 *   . identificador
 *   . nome
 *   . status (ativo / inativo)
 *   . score
 */
class Parameter extends CaseAttribute {

    // Construtor
    constructor( id, name, status, score ) {
        super( id, name, status );
        this._score = score;
    }     
    
    // Método que retorna um objeto contendo
    // seu id, name, e score
    getAttribute() {

        let attribute = super.getAttribute();
        attribute.score =  this._score;
        
        return attribute;
    }    

} // Fim da classe Parameter




