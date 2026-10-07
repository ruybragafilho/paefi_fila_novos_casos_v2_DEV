"use strict";


class CaseAttribute {

    constructor( id, name, status ) {
        this._id      =  id;
        this._name    =  name;
        this._status  =  status;
    }    


    getAttribute() {
        return {
            id:     this._id,
            name:   this._name,
            status: this._status
        };
    }

} // Fim da classe CaseAttribute




class Parameter extends CaseAttribute {

    constructor( id, name, status, score ) {
        super( id, name, status );
        this._score = score;
    }     
    
    
    getAttribute() {
        return {
            id:     this._id,
            name:   this._name,
            status: this._status,
            score:  this._score
        };
    }    

} // Fim da classe Parameter




